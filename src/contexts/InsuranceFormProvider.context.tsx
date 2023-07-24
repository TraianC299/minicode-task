import React, { ReactNode, useContext, useEffect, useMemo, useState} from 'react'
import useDidMountEffect from '../hooks/useDidMountEffect'
import { useContent } from './ContentProvider.context'
import CarteVerdeStep1 from '../components/home/forms/carte-verde/Step1'
import CarteVerdeStep2 from '../components/home/forms/carte-verde/Step2'


import CascoStep1 from '../components/home/forms/casco/Step1'
import CascoStep2 from '../components/home/forms/casco/Step2'
import CascoStep3 from '../components/home/forms/casco/Step3'


import RCAStep1 from '../components/home/forms/rca/Step1'
import RCAStep2 from '../components/home/forms/rca/Step2'
import RCAStep3 from '../components/home/forms/rca/Step3'
import RCAStep4 from '../components/home/forms/rca/Step4'
import useForm from '../hooks/useForm'
const initialState = {
    form: {},
    setForm: ()=>{},
    step: 0,
    setStep: ()=>{},
    showCost: false,
    setShowCost: ()=>{},
    currentInstance: {},
    currentScreen: {},
    selectedInsuranceFormType: '3',
    setSelectedInsuranceFormType: ()=>{},
    handleChange: ()=>{}


}


interface InsuranceFormState {
    form: any,
    setForm: (form: any)=>void,
    step: number,
    setStep: (step: number)=>void,
    showCost: boolean,
    setShowCost: (showCost: boolean)=>void,
    currentInstance: any,
    currentScreen: any,
    selectedInsuranceFormType: string,
    setSelectedInsuranceFormType: (selectedInsuranceFormType: string)=>void,
    handleChange: (value:any, key:string)=>{}

}

interface InsuranceFormProviderProps {
    children: ReactNode
}


const rcaForm = {
    automobilImatriculat:null,
    persoana: null,
    domiciliu: '',
    vehicul: null,
    nrLocuri: null,
    nrPersAdmise: null,
    stagiu: null,
    pensionar: null,
    rcaAsigurat: null,
    asigRemorca: null,
  }
  
  
  const cascoForm = {
    vehicul:null,
    model: '',
    marca: '',
    anProducere: null,
    valoareaPePiata: '',
    teritoriulDeAcoperire: null,
    fransiza: null,
  }
  
  const carteVerdeForm = {
    vehicul: null,
    zonaDeDeplasare: [],
    valabilitateaPolitei: null,
  }



const ContentContext = React.createContext<InsuranceFormState>(initialState)
export const useInsuranceForm=():InsuranceFormState=>{
        return useContext(ContentContext)
    }



export const InsuranceFormProvider = ({children, }:InsuranceFormProviderProps) => {
    const { insurance} = useContent()

    const [form, setForm] = useState({})
    const {handleChange} = useForm(form, setForm, {})
    const [step, setStep] = useState(0)
    const [showCost, setShowCost] = useState(false)
    useDidMountEffect(()=>{
        setStep(0)
        setShowCost(false)
        setForm(currentScreen?.form || {})
      },[selectedInsuranceFormType])
    


    
    let value={
        showCost,
        setShowCost,
        form, 
        setForm,
        step,
        setStep,
        currentInstance,
        currentScreen,
        setSelectedInsuranceFormType,
        selectedInsuranceFormType,
        handleChange
    }


    







    
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}

export default InsuranceFormProvider