const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
const fs = require('fs');
const UUID = require('uuid-v4');
const {Storage} = require('@google-cloud/storage');
const gcs = new Storage({
  projectId: 'koane-287520',
  keyFilename: 'koane.json',
});

admin.initializeApp({
  credential: admin.credential.cert(require('./koane.json')),
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.storeImage = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    // if (
    //   !request.headers.authorization ||
    //   !request.headers.authorization.startsWith('Bearer ')
    // ) {
    //   console.log('No token present!');
    //   response.status(403).json({error: 'Unauthorized'});
    //   return;
    // }
    // let idToken;
    // idToken = request.headers.authorization.split('Bearer ')[1];
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        const body = JSON.parse(request.body);
        fs.writeFileSync(
          '/tmp/uploaded-image.jpg',
          body.image,
          'base64',
          (err) => {
            console.log(err);
            return response.status(500).json({error: err});
          },
        );
        const bucket = gcs.bucket('koane-9090.appspot.com');
        const uuid = UUID();

        return bucket.upload(
          '/tmp/uploaded-image.jpg',
          {
            uploadType: 'media',
            destination: '/products/' + uuid + '.jpg',
            metadata: {
              metadata: {
                contentType: 'image/jpeg',
                firebaseStorageDownloadTokens: uuid,
              },
            },
          },
          (err, file) => {
            if (!err) {
              return response.status(201).json({
                imageUrl:
                  'https://firebasestorage.googleapis.com/v0/b/' +
                  bucket.name +
                  '/o/' +
                  encodeURIComponent(file.name) +
                  '?alt=media&token=' +
                  uuid,
                imagePath: '/products/' + uuid + '.jpg',
              });
            } else {
              console.log(err);
              return response.status(500).json({error: err});
            }
          },
        );
      })
      .catch((error) => {
        console.log('Token is invalid!');
        response.status(403).json({error: 'Unauthorized'});
      });
  });
});

exports.deleteImage = functions.database
  .ref('/products/{productId}')
  .onDelete((snapshot) => {
    //console.log(event);
    //const productData = event.data.val();
    const productData = snapshot.val();
    const imagePath = productData.imagePath;
    const bucket = gcs.bucket('koane-9090.appspot.com');
    return bucket.file(imagePath).delete();
  });
