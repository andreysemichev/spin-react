export class Validate {
    static email = email => {
        // eslint-disable-next-line
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        const info = {
            isValid: true,
            msg: ""
        };

        if (/[а-я]/i.test(email)) {
            info.isValid = false;
            info.msg = "Email is not valid";

        } else if (!re.test(email)) {
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

        if (password.length === 0) {
            info.isValid = false;
            info.msg = "Enter password";
            
        } else if (password.length < 3 || password.length > 32) {
            info.isValid = false;
            info.msg = "Password must be between 3 and 12 characters";
        }

        return info;
    }

}

export default Validate;