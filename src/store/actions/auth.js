// import {TRY_AUTH, AUTH_SET_TOKEN} from './actionType'
import { uiStartLoading,uiStopLoading } from './index'


//login auto login if token not expired log out storing data 

export const login = (authData,nav) => {
    return dispatch => {
        dispatch(uiStartLoading());
        //console.log('in login')
        let url = 'http://192.168.8.162:3300/user/login'
        fetch(url,{
            method: "POST",
            body: JSON.stringify({
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => {return res.json()})
        .then(prasedRes => {
            dispatch(uiStopLoading())
            console.log(prasedRes.type)
            const type = prasedRes.type
            if(type === 'Admin'){
                nav.navigation.push('AdminHome',{
                    user: prasedRes
                })
            }
            else if(type === 'Vendor'){
                nav.navigation.push('VendorHome',{
                    user: prasedRes
                })
            }
            else {
                nav.navigation.push('CustomerHome',{
                    user: prasedRes
                })
            }
            
            // if(!prasedRes.idToken){
            //     alert("Authentication failed! Please try again ")
                
            // }
            // else{   
            //     dispatch(authSetToken(prasedRes.idToken))
            //     nav.navigation.push('SideDrawer')
            // }
            
        })
        .catch(err => {
            dispatch(uiStopLoading())
            console.log(err)
            alert('Authentication failed! Please try again ')
        })
    }
}
