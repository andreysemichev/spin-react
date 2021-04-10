import isEmail  from "validator/lib/isEmail";
import isLength  from "validator/lib/isLength";

export class Validate {
    static email = email => {
        
        const info = {
            isValid: true,
            msg: ""
        };

        if (!isEmail(email)) {
            info.isValid = false;
            info.msg = "Email is not valid";
        }

        return info;
    }

    static password = password => {
        const info = {
            isValid: true,
            msg: ""
        };

        if (!isLength(password, {min: 3, max: 32})) {
            info.isValid = false;
            info.msg = "Password must be between 3 and 12 characters";
        }

        return info;
    }

}

export default Validate;