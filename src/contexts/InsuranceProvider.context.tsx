import React, { ReactNode, useCallback, useContext, useMemo, useState} from 'react'
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
import InsuranceType from '../types/Insurance.type'
import InsuranceService from '../services/InsuranceService.service'
import { useSnack } from './SnackProvider.context'

interface InsuranceState {
    step: number,
    setStep: (step: number)=>void,
    showCost: boolean,
    setShowCost: (showCost: boolean)=>void,
    currentInstance: InsuranceType  
    screen: ReactNode,
    selectedInsuranceType: string,
    setSelectedInsuranceType: React.Dispatch<React.SetStateAction<string>>,
    onNextClick: ()=>void,
    onBackClick: ()=>void,
    nextButtonTitle: string
}

interface InsuranceProviderProps {
    children: ReactNode
}




  const screens = [
    {
      id:"1",
      screens: [<CarteVerdeStep1/>, <CarteVerdeStep2/>]
    },
    {
      id:'2',
      screens: [<RCAStep1/>, <RCAStep2/>, <RCAStep3/>, <RCAStep4/>]
    },
    {
      id:'3',
      screens: [<CascoStep1/>, <CascoStep2/>, <CascoStep3/>]
    }
  ]


const ContentContext = React.createContext<InsuranceState | null>(null)
export const useInsurance=():InsuranceState=>{
        return useContext(ContentContext) as InsuranceState
    }



export const InsuranceProvider = ({children}:InsuranceProviderProps) => {
  const {
    setSuccess,
    setError,
    setLoading,
  } = useSnack()
    const {insurance} = useContent()
    const [step, setStep] = useState(0)
    const [showCost, setShowCost] = useState(false)
    const [selectedInsuranceType, setSelectedInsuranceType] = useState<string>('3')
    const currentInstance = useMemo(()=>insurance.find(type => type.id === selectedInsuranceType),[selectedInsuranceType]) || insurance[0]
    const currentScreen = useMemo(()=>screens.find(type => type.id === selectedInsuranceType), [selectedInsuranceType])
    const nextButtonTitle = useMemo(()=>{
      if(showCost){
        return 'comanda_online'
      }else if(step === screens?.length - 1){
          return 'vezi_costul'
        }else{
          return 'inainte'
        }
      },[step, screens,showCost])


      const postInsurance = async()=>{
        setLoading(true)
        try{
          const res = await InsuranceService.createInsurance(currentInstance)
          console.log(res)
          if(res.code === 200){

            setSuccess('Comanda a fost plasata cu succes')
          }else{
            setError('A aparut o eroare')
          }
        }catch(e){
          setError('A aparut o eroare')
        }finally{
          setLoading(false)
        }
      }



      const onNextClick = useCallback(async () => {
        if(showCost){
          await postInsurance()
        }
        if(step < currentInstance.steps?.length - 1){
          setStep(step+1)
        }else{
          setShowCost(true)
        }
      }, [step, screens,showCost])
    
      const onBackClick = useCallback(() => {
        if(showCost){
          setShowCost(false)
        }else if(step > 0){
          setStep(step-1)
        }
      }, [step, showCost])


      useDidMountEffect(()=>{
        setStep(0)
        setShowCost(false)
    },[selectedInsuranceType])

    
    const value={
        showCost,
        setShowCost,
        step,
        setStep,
        currentInstance,
        screen: currentScreen?.screens[step],
        setSelectedInsuranceType,
        selectedInsuranceType,
        onNextClick,
        onBackClick,
        nextButtonTitle
    }


    







    
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}

export default InsuranceProvider