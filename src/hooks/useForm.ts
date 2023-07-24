import { useState } from "react";
import { useTranslation } from "react-i18next";

const useForm = (form: any, setForm:any, vlidationRules:any) => {
    const {t} = useTranslation();
    const [errors, setErrors] = useState<any>({});
    
    const validate = (name: string, value: string) => {
        if(!vlidationRules[name]) return;
        const error = t(validateField(vlidationRules[name], value));
        setErrors((prevErrors:any) => ({ ...prevErrors, [name]: error }));
    };

    const validateMultiple = (names: string[]) => {
        
        let valid = true;
        names.forEach((name) => {
            const error = t(validateField(vlidationRules[name], form[name]));
            setErrors((prevErrors:any) => ({ ...prevErrors, [name]: error }));
            if (error) valid = false;
        });
        return valid;
    }

    
   
    const handleChange = (value:any, key:string) => {
        validate(key, value);
        setForm((prev:any)=>({...prev, [key]:value}))
    }

    const validateForm = () => {
        let valid = true;
        Object.keys(form).forEach((key) => {
            const error = t(validateField(vlidationRules[key], form[key]));
            setErrors((prevErrors:any) => ({ ...prevErrors, [key]: error }));
            if (error) valid = false;
        });
        return valid;
    };
    
 
    
    return { form, errors, handleChange, validateMultiple, setErrors, validateForm };
    }
export default useForm;


export const validateField = (name: string, value: string | string[]) => {
    switch (name) {
        case "email":
            return validateEmail(value as string);
        case "password":
            return validatePassword(value as string);
        case "confirmPassword":
            return validateConfirmPassword(value as string);
        case "number":
            return validateNumber(value as string);
        case "check":
            return validateCheck(value as string);
        case "multiple":
            return validateEmptyArray(value as string[]);
        case "empty":
            return validateEmpty(value as string);
        case "radio":{
            return validateRadio(value as string);
        }
        default:
            return "";
    }
}

export const validateEmail = (email: string) => {
    if (!email.includes("@")) {
        return 'email_nevalid';
    }
    return "";
}

export const validatePassword = (password: string) => {
    if (password.length < 6) {
        return 'password_6_caractere';
    }
    return "";
}

export const validateConfirmPassword = (confirmPassword: string) => {
    if (confirmPassword.length < 6) {
        return 'password_6_caractere';
    }
    return "";
}

export const validateEmptyArray = (array: any[]) => {
    if (array.length === 0) {
        return 'camp_obligatoriu';
    }
    return "";
}

export const validateEmpty = (value: string) => {
    if (!value) {
        return 'camp_obligatoriu';
    }
    return "";
}

export const validateRadio = (value: string) => {
    if (value===null) {
        return 'camp_obligatoriu';
    }
    return "";
}

export const validateNumber = (value: string) => {
    if (!value) {
        return 'camp_obligatoriu';
    }
    if (isNaN(Number(value))) {
        return 'numar_nevalid';
    }
    return "";
}

export const validateCheck = (value: string) => {
    if (!value) {
        return "Check eroare";
    }
    return "";
}
        

export const validateForm = (errors: any) => {
    let valid = true;
    Object.values(errors).forEach((val:any) => val.length > 0 && (valid = false));
    return valid;
}



