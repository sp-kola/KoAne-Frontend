import {TRY_AUTH, AUTH_SET_TOKEN} from './actionType'
import { uiStartLoading,uiStopLoading, getLoggedCustomer, getCustomerLastSavedLocation } from './index'
import AsyncStorage from '@react-native-community/async-storage';
import { getLoggedVendor } from './vendor';

export const login = (authData,nav) => {
    return dispatch => {
        dispatch(uiStartLoading());
        console.log('in login',authData)

        let url = 'http://192.168.1.101:3300/user/login'

        fetch(url,{
            method: "POST",
            body: JSON.stringify({
                email: authData.email,
                password: authData.password,
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => {return res.json()})
        .then(async(prasedRes) => {
            dispatch(uiStopLoading())
            console.log(prasedRes.type)
            if(!prasedRes.token){
                alert("Authentication failed! Please try again ")
            }
            else{   
                await dispatch(
                    authStoreToken(
                        prasedRes.id,
                        prasedRes.token,
                        prasedRes.type,
                        prasedRes.email,
                        prasedRes.userName,
                    ))
                if(prasedRes.type == 'Customer'){
                  await dispatch(getLoggedCustomer())
                  await dispatch(getCustomerLastSavedLocation())
                }
                else if(prasedRes.type == 'Vendor'){
                  console.log('vendor is login in')
                  await dispatch(getLoggedVendor())
                }
                const type = prasedRes.type
                if(type === 'Admin'){
                    await nav.navigation.push('AdminSideScreen',{
                        user: prasedRes
                    })
                }
                else if(type === 'Vendor'){
                    await nav.navigation.push('VendorSideScreen',{
                        user: prasedRes
                    })
                }
                else {
                  await nav.navigation.push('CustomerSideScreen',{
                        user: prasedRes
                    })
                }
            }
            
        })
        .catch(err => {
            dispatch(uiStopLoading())
            console.log(err)
            alert('Authentication failed! Please try again ')
        })
    }
}

export const authStoreToken = (id, token, userType, email, userName) => {
  return async dispatch => {
    //   const now = new Date();
    //   const expiryDate = now.getTime() + expiresIn * 1000;
      await dispatch(authSetToken(id,token,userType,email,userName));
      console.log('async email', email)
      if(email=== undefined){
        email = await AsyncStorage.getItem('koane:auth:email');
        userName = await AsyncStorage.getItem('koane:auth:userName');
        id = await AsyncStorage.getItem('koane:auth:id');
        userType = await AsyncStorage.getItem('koane:atuh:userType')
      }
      //console.log(now, new Date(expiryDate))
      console.log('setting token', token)
      console.log('initialized mail', email)
      AsyncStorage.setItem('koane:auth:token', token);
      //AsyncStorage.setItem('koane:auth:expiryDate', expiryDate.toString());
      AsyncStorage.setItem('koane:auth:email', email)
      AsyncStorage.setItem('koane:auth:userName', userName)
      AsyncStorage.setItem('koane:auth:id', id)
      AsyncStorage.setItem('koane:auth:userType', userType)
      // console.log('name',(AsyncStorage.getItem('koane:auth:name')).toString())
      // return((AsyncStorage.getItem('koane:auth:name')))
      // .then(name){
      //   console.log(name)
      // }
    };
  };

export const authSetToken = (id, token, userType, email, userName) => {
  console.log('in setting token');
  return {
    type: AUTH_SET_TOKEN,
    token: token,
    //expiryDate: expiryDate,
    email: email,
    userName: userName,
    id: id,
    userType: userType,
  };
};

export const authGetToken = () => {
  return async (dispatch, getState) => {
    console.log('getting token');
    try {
      const token = await getState().auth.token;
      console.log(token);
      if (!token) {
        let fetchedToken;
        const tokenFromStorage = await AsyncStorage.getItem('koane:auth:token');
        if (tokenFromStorage) {
          fetchedToken = tokenFromStorage;
          token = fetchedToken;
          console.log('returning token', token);
          return token;
        }
      } else {
        console.log('returning token', token);
        return token;
      }
    } catch (e) {
      console.log(e);
      alert('something went wrong');
    }
    // const promise = new Promise((resolve, reject) => {
    //     const token = getState().auth.token;
    //     console.log('getting token');
    //     if(!token){
    //         let fetchedToken;
    //         AsyncStorage.getItem('koane:auth:token')
    //         .catch((err) => reject())
    //         .then((tokenFromStorage) => {
    //             fetchedToken = tokenFromStorage
    //             if(!tokenFromStorage){
    //                 reject();
    //                 return;
    //             }
    //             else{
    //                 resolve(token);
    //             }
    //         })
    //     }
    //     else{
    //       console.log(token)
    //       resolve(token);
    //       return token;
    //     }
    // })
    // .then((token) => {
    //   if (!token) {
    //     throw new Error();
    //   } else {
    //     return token;
    //   }
    // });
    // return promise
    // .catch(error => alert('something went wrong'))
  };
};

export const authAutoSignIn = (nav) => {
    return (dispatch) => {
      dispatch(authGetToken())
        .then(async(token) => {
        email = await AsyncStorage.getItem('koane:auth:email');
        userName = await AsyncStorage.getItem('koane:auth:userName');
        id = await AsyncStorage.getItem('koane:auth:id');
        userType = await AsyncStorage.getItem('koane:atuh:userType');
          //console.log(email)
          await dispatch(getLoggedUser(email))
          if(type === 'Admin'){
            await nav.navigation.push('AdminSideScreen',{
                user: prasedRes
            })
            .catch((err) => console.log('Failed to fetch token'));
        }
        else if(type === 'Vendor'){
            await nav.navigation.push('VendorSideScreen',{
                user: prasedRes
            })
            .catch((err) => console.log('Failed to fetch token'));
        }
        else {
            await nav.navigation.push('CustomerSideScreen',{
                user: prasedRes
            })
            .catch((err) => console.log('Failed to fetch token'));
        }
    
        }
    )};
    }

export const authClearStorage = () => {
  return dispatch => {
    //AsyncStorage.removeItem('koane:auth:expiryDate');
    AsyncStorage.removeItem('koane:auth:token');
    AsyncStorage.removeItem('koane:auth:email');
    AsyncStorage.removeItem('koane:auth:userName');
    AsyncStorage.removeItem('koane:auth:id');
    return AsyncStorage.removeItem('koane:auth:userType');
  };
};

export const authLogout = nav => {
  return async dispatch => {
    await dispatch(initiateLogOut());
    await dispatch(authClearStorage()).then(() => {
      nav.navigation.push('Login');
    });
    await dispatch(authRemoveToken());
    //   dispatch(userLogOut());
  };
};

export const authRemoveToken = () => {
  return {
    type: AUTH_REMOVE_TOKEN,
  };
};

export const initiateLogOut = () => {
  return dispatch => {
    dispatch(authGetToken())
      .catch(() => {
        alert('No valid token found');
      })
      .then(token => {
        //dispatch(removeProduct(key))
        console.log('pass1');
        let url = 'http://192.168.1.100:3300/user/logout';
        return fetch(url, {
          method: 'PATCH',
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(parsedRes => {
        console.log('Done!');
        //   dispatch(uiStopLoading());
        //   dispatch(getUserProducts(owner));
        //   dispatch(stopUpdateProduct());
      })
      .catch(err => {
        alert('Something went wrong, sorry :/');
        console.log(err);
        //   dispatch(uiStopLoading());
        //   dispatch(getUserProducts(owner));
        //   dispatch(stopUpdateProduct());
      });
  };
};
