export const vendorSignup = (signupData,nav) => {
    return dispatch => {
        //console.log(locationData);
        fetch('http://192.168.8.162:3300/vendor/signup',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(signupData)
            
        })
        .catch(err => console.log(err))
        .then(res => {
            return res.json()
            
        })
        .then(parsedRes => {
            console.log(parsedRes)
            nav.navigation.push('VendorHome',{
                user: parsedRes
            })
        })
    }  
}