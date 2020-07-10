const validate = (val, rules, connectedValue) => {
    let isValid = true;
    for(let rule in rules){
        switch(rule){
            case 'isEmail':
                isValid = isValid && emailValidator(val);
                break;
            case 'minLength': 
                isValid = isValid && minLengthValidator(val,rules[rule])
                break;
            case 'equalTo':
                isValid = isValid && equalToValidator(val,connectedValue[rule])
                break;
            case 'notEmpty':
                isValid = isValid && notEmptyValidator(val);
                break;
            case 'strongPassword':
                isValid = isValid && strongPasswordValidator(val);
                //console.log('pwd',isValid)    
                break;
            default: 
                isValid = true
                break;
        }
    }
    return isValid;
}

const emailValidator = val => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
}

const strongPasswordValidator = val =>{
    const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    //console.log('pwd',passwordReg.test(String(val)))
    return passwordReg.test(String(val))
}

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;

}

const equalToValidator = (val, checkValue) => {
    return val === checkValue; 
}

const notEmptyValidator = val => {
    console.log(val.trim() !== "")

    return val.trim() !== "";
  };
  
export default validate;