export const signup = (signupData) => {
    return dispatch => {
        //console.log(locationData);
        fetch('http://192.168.8.162:3300/customer/signup',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(signupData)
            
        })
        .catch(err => console.log(err))
        .then(res => {
            res.json()
            console.log(res)
        })
        .then(parsedRes => {
            console.log(parsedRes)
            
        })
    }  
}