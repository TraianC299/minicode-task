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
    selectedInsuranceType: '3',
    setSelectedInsuranceType: ()=>{},
    handleChange: ()=>{}


}


interface InsuranceState {
    form: any,
    setForm: (form: any)=>void,
    step: number,
    setStep: (step: number)=>void,
    showCost: boolean,
    setShowCost: (showCost: boolean)=>void,
    currentInstance: any,
    currentScreen: any,
    selectedInsuranceType: string,
    setSelectedInsuranceType: (selectedInsuranceType: string)=>void,
    handleChange: (value:any, key:string)=>{}

}

interface InsuranceProviderProps {
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
  const screens = [
    {
      title:"Carte Verde",
      id:"1",
      form: carteVerdeForm,
      screens: [
        {
          title: "Alege tipul autovehiculului",
          screen: <CarteVerdeStep1/>
        },
        {
          title: "Zona de deplasare",
          screen: <CarteVerdeStep2/>
        }
  
      ]
    },
    {
      title:'RCA',
      id:'2',
      form: rcaForm,
      screens: [
        {
          title: "Alege tipul autovehiculului",
          screen: <RCAStep1/>
        },
        {
          title: "Alege marca",
          screen: <RCAStep2/>
        },
        {
          title: 'Numarul de locuri',
          screen: <RCAStep3/>
        },
        {
          title: 'Numarul de locuri',
          screen: <RCAStep4/>
        }
      ]
    },
    {
      title:'Casco',
      id:'3',
      form: cascoForm,
      screens: [
        {
          title: "Alege tipul autovehiculului",
          screen: <CascoStep1/>
        },
        {
          title: "Alege marca",
          screen: <CascoStep2/>
        },
        {
          title: "Alege valoarea pe piață",
          screen: <CascoStep3/>
        }
  
  
      ]
    }
  ]


const ContentContext = React.createContext<InsuranceState>(initialState)
export const useInsurance=():InsuranceState=>{
        return useContext(ContentContext)
    }



export const InsuranceProvider = ({children}:InsuranceProviderProps) => {
    const { insurance} = useContent()

    const [form, setForm] = useState({})
    const {handleChange} = useForm(form, setForm, {})
    const [step, setStep] = useState(0)
    const [showCost, setShowCost] = useState(false)
    const [selectedInsuranceType, setSelectedInsuranceType] = useState('3' as string)
    const currentInstance = useMemo(()=>insurance.find(type => type.id === selectedInsuranceType),[selectedInsuranceType])
    let currentScreen = useMemo(()=>screens.find(type => type.id === selectedInsuranceType), [selectedInsuranceType])
    useDidMountEffect(()=>{
        setStep(0)
        setShowCost(false)
        setForm(currentScreen?.form || {})
      },[selectedInsuranceType])
    


    
    let value={
        showCost,
        setShowCost,
        form, 
        setForm,
        step,
        setStep,
        currentInstance,
        currentScreen,
        setSelectedInsuranceType,
        selectedInsuranceType,
        handleChange
    }


    







    
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}

export default InsuranceProvider