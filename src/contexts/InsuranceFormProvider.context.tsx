import React, { ReactNode, useContext, useState} from 'react'
import useDidMountEffect from '../hooks/useDidMountEffect'
import useForm from '../hooks/useForm'
import { useInsurance } from './InsuranceProvider.context'
import CascoFormType from '../types/forms/CascoForm.type'
import CarteaVerdeFormType from '../types/forms/CarteaVerdeForm.type'



interface InsuranceFormState {
    form: any,
    setForm: React.Dispatch<React.SetStateAction<CascoFormType | CarteaVerdeFormType | RCAFormType >>,
    handleChange: any,
    validateMultiple: (names: string[])=>boolean,
    setCurrentFields: React.Dispatch<React.SetStateAction<string[]>>,
    errors: any,
    disabled: boolean,
    onNextClickHandler: ()=>void,

}

interface InsuranceFormProviderProps {
    children: ReactNode
}





const ContentContext = React.createContext<InsuranceFormState | null>(null)
export const useInsuranceForm=()=>{
        return useContext(ContentContext) as InsuranceFormState
    }



export const InsuranceFormProvider = ({children}:InsuranceFormProviderProps) => {
    const {currentInstance, selectedInsuranceType, onNextClick} = useInsurance()
    const [disabled, setDisabled] = useState<boolean>(false)
    const [currentFields, setCurrentFields] = useState<string[]>([])
    const [form, setForm] = useState<CascoFormType | CarteaVerdeFormType | RCAFormType >(currentInstance.form)
    const {handleChange, validateMultiple, errors, setErrors} = useForm(form, setForm,currentInstance.validation_rules)
    useDidMountEffect(()=>{
        setErrors({})
        setForm(currentInstance.form)
      },[selectedInsuranceType])
    


    const validateCurrentStep = () => {
        // if(validateMultiple(currentFields)){
        //     setDisabled(false)
        // }else{
        //     setDisabled(true)
        // }
        return validateMultiple(currentFields)
    }


    const onNextClickHandler = () => {
        if(validateCurrentStep()){
            onNextClick()
        }
    }


    
    let value={
        form, 
        setForm,
        handleChange,
        validateMultiple,
        errors,
        disabled,
        setDisabled,
        currentFields,
        setCurrentFields,
        onNextClickHandler
    }

    
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}

export default InsuranceFormProvider