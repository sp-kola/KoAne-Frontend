import { authGetToken, login } from './index'
import { VENDOR_ADDED, CLEAR_SELECT_VENDORS, DELETE_VENDOR, GET_VENDOR, LOGIN_VENDOR, LOGOUT_VENDOR, REMOVE_VENDOR, SEARCH_VENDOR, SELECT_VENDORS, SET_VENDORS, START_ADD_VENDOR, STOP_SEARCH_VENDOR, TOGGLE_VENDOR_STATUS, UPDATE_VENDOR } from './actionType'

export const vendorSignup = (signupData,nav) => {
    return dispatch => {
        console.log(signupData);
        fetch('http://192.168.1.3:3300/vendor/signup',{
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
        .then(async(parsedRes) => {
            console.log(parsedRes)
            if(parsedRes._id){
                var authData = {
                    email: signupData.email,
                    password: signupData.password
                }
                await dispatch(login(authData,nav))
            }
        })
    }  
}

export const getLoggedVendor = () => {
    console.log('in getting logged vendor');
    return dispatch => {
      dispatch(authGetToken())
      .catch(() =>{
          alert('No valid token found')
      })
      .then(token =>{
          console.log('token from auth get',token)
  
          let url = 'http://192.168.1.3:3300/vendor/vendor'
          return fetch(url, {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + token,
            },
          });
        })
        .then(res => {
          if (res.ok) {
            console.log('res', res);
            return res.json();
          } else {
            throw new Error();
          }
        })
        .then(async(parsedRes) => {
          console.log('returned data', parsedRes);
          let vendor = {
            id: parsedRes._id,
            email: parsedRes.email,
            firstName: parsedRes.firstName,
            lastName: parsedRes.lastName,
            contactNo: parsedRes.contactNo,
            visitingDates: parsedRes.visitingDates,
            visitingPlaces: parsedRes.visitingPlaces,
            nic: parsedRes.nic,
            businessName: parsedRes.businessName,
            businessAddress: parsedRes.businessAddress,
            vehicleNo: parsedRes.vehicleNo,
            delivering: parsedRes.delivering,
            startTime: parsedRes.startTime,
            endTime: parsedRes.endTime,
            bio: parsedRes.bio
          };
          console.log('loding data');
          await dispatch(vendorLogIn(vendor));
        })
        .catch(err => {
          alert('Something went wrong, sorry :/');
          console.log(err);
        });
    };
  };

  export const searchVendor = (id) => {
    console.log('in searching vendor', id);
    return dispatch => {
      dispatch(authGetToken())
      .catch(() =>{
          alert('No valid token found')
      })
      .then(token =>{
          console.log('token from auth get',token)
  
          let url = 'http://192.168.1.3:3300/vendor/search/'+id
          return fetch(url, {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + token,
              // Accept: 'application/json',
              // 'Content-Type': 'application/json'
            },
          //body: JSON.stringify(id)
          });
        })
        .then(res => {
          if (res.ok) {
            console.log('res', res);
            return res.json();
          } else {
            throw new Error();
          }
        })
        .then(async(parsedRes) => {
          console.log('returned data', parsedRes);
          let vendor = {
            id: parsedRes._id,
            email: parsedRes.email,
            firstName: parsedRes.firstName,
            lastName: parsedRes.lastName,
            contactNo: parsedRes.contactNo,
            visitingDates: parsedRes.visitingDates,
            visitingPlaces: parsedRes.visitingPlaces,
            nic: parsedRes.nic,
            businessName: parsedRes.businessName,
            businessAddress: parsedRes.businessAddress,
            vehicleNo: parsedRes.vehicleNo,
            delivering: parsedRes.delivering,
            startTime: parsedRes.startTime,
            endTime: parsedRes.endTime,
            bio: parsedRes.bio
          };
          console.log('loding data');
          await dispatch(selectVendor(vendor))
        })
        .catch(err => {
          alert('Something went wrong, sorry :/');
          console.log(err);
        });
    };
  };

  export const updateLoggedVendor = (email,firstName,lastName,contactNo,visitingDates, visitingPlaces,nic,businessName, businessAddress,vehicleNo,delivering, startTime, endTime, bio) => {
    const updateData = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        contactNo:contactNo,
        visitingDates : visitingDates, 
        visitingPlaces : visitingPlaces,
        nic : nic,
        businessName : businessName, 
        businessAddress : businessAddress,
        vehicleNo : vehicleNo,
        delivering : delivering, 
        startTime : startTime, 
        endTime : endTime, 
        bio : bio,
    }
    console.log('in update logged vendor')
    return (dispatch) =>{
    dispatch(authGetToken())
    .catch(() =>{
        alert('No valid token found')
    })
    .then(token =>{
        console.log('token from auth get',token)
        let url = 'http://192.168.1.3:3300/vendor'
        return fetch(url, {
            method: "PATCH",
            headers: {
            Authorization : "Bearer "+token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
    })
    .then(res =>  {
      if(res.ok){
        console.log('res',res)
        return res.json()
      }
      else{
        throw (new Error())
      }
    })
      .then(parsedRes => {
        console.log('returned data', parsedRes);
        let vendor = {
          id: parsedRes._id,
          email: parsedRes.email,
          firstName: parsedRes.firstName,
          lastName: parsedRes.lastName,
          contactNo: parsedRes.contactNo,
          visitingDates: parsedRes.visitingDates,
          visitingPlaces: parsedRes.visitingPlaces,
          nic: parsedRes.nic,
          businessName: parsedRes.businessName,
          businessAddress: parsedRes.businessAddress,
          vehicleNo: parsedRes.vehicleNo,
          delivering: parsedRes.delivering,
          startTime: parsedRes.startTime,
          endTime: parsedRes.endTime,
          bio: parsedRes.bio
        };
        console.log('loding data');
        dispatch(vendorLogIn(vendor));
      })
      .catch(err => {
        alert('Something went wrong, sorry :/');
        console.log(err);
      });
  };
};

  export const vendorLogIn = (vendor) => {
    console.log('in user login', vendor.email)
    return{
        type: LOGIN_VENDOR,
        vendor: vendor
    }
  }

  export const selectVendor = (vendor) => {
    console.log('selected vendor ', vendor.firstName)
    return{
      type: SELECT_VENDORS,
      vendor: vendor
    }
  }
