import styled from 'styled-components'
import InsuranceTypeSelector from './InsuranceTypeSelector'
import VerticalStepper from './HeroRightSide'
import { useContent } from '../../../contexts/ContentProvider.context'
import ColorImage from '../../system/utils/ColorImage'
import Button from '../../system/inputs/Button'
import Collapsible from '../../system/utils/Collapsible'
import { useCallback } from 'react'


import MEDIAQUERIES from '../../../constants/MEDIAQUERIES'
import Transition from '../../system/utils/Transition'
import LeftSection from './LeftSection'
import FinalPrice from './FinalPrice'
import { useInsurance } from '../../../contexts/InsuranceProvider.context'
import { useTranslation } from 'react-i18next'

const ContainerStyles = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
background: var(--light-gray);
height:fit-content;
@media ${MEDIAQUERIES.LAPTOP}{
  height: calc(100vh - 80px);
}
`



const InsuranceSectionContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
padding:1rem;
@media ${MEDIAQUERIES.LAPTOP}{
  padding: 2rem;
}
`


const InsurancePresentationContainer = styled.div`
display: grid;
padding-top: 30px;
height: fit-content;
gap: 20px;
grid-template-rows: repeat(2, auto);
width: 100%;
@media ${MEDIAQUERIES.LAPTOP}{
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 450px;
}
@media ${MEDIAQUERIES.DESKTOP}{
  height: 600px;
}
`
const CollapsiblesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
`


const InsuranceTypeStyles = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 40px;
`


const ButtonsContainerStyles = styled.div`
margin:auto;
margin-bottom: 0px;

`


const InsuranceTitle = styled.h3`
margin-top: 40px;
`



const HeroSection = () => {
  const {t} = useTranslation()
  const {icons} = useContent()
  const {
    showCost,
    setShowCost,
    step,
    setStep,
    currentInstance,
    currentScreen
  } = useInsurance()

    

  const onNextClick = useCallback(() => {
    if(step < currentScreen?.screens?.length - 1){
      setStep(step+1)
    }else{
      setShowCost(true)
    }
  }, [step, currentScreen])

  const onBackClick = useCallback(() => {
    if(showCost){
      setShowCost(false)
    }else if(step > 0){
      setStep(step-1)
    }
  }, [step, showCost])





  
  return (
    <ContainerStyles>
      <LeftSection/>

      <InsuranceSectionContainer className='max-width'>
        <InsuranceTypeSelector
       
        />
         {/* <Transition> */}
           <InsuranceTitle className="h3">{t(currentInstance?.title)}</InsuranceTitle>
         {/* </Transition> */}
          <InsurancePresentationContainer>
          
              <InsuranceTypeStyles>
                <Transition>
                  {currentScreen?.screens[step]?.screen}
                  </Transition>
                  <Transition>
                    {showCost &&<FinalPrice finalPrice={300}/>}
                  </Transition>
                <ButtonsContainerStyles className='w-full flex justify-between items-center'>
                <Button
              onClick={onBackClick}
              className='ghost'><ColorImage className='reverse' src={icons["arrow-right"]}/>{t('inapoi')}</Button>
              <Button
              className='icon'
              onClick={onNextClick}
              >
                {t(showCost?'comanda_online':'inainte')} <ColorImage color='white' src={icons["arrow-right"]}></ColorImage></Button>
                </ButtonsContainerStyles>
              </InsuranceTypeStyles>
              <CollapsiblesContainer>
              {currentInstance?.info?.map(el=><Collapsible 
              key={el.id} 
              title={t(el.title)} 
              content={el.content}/>) }
          
              </CollapsiblesContainer>
          </InsurancePresentationContainer>
      </InsuranceSectionContainer>

      <VerticalStepper 
      currentStep={step}
      stepsNr={
        currentScreen?.screens.length || 0
      }/>
    </ContainerStyles>
  )
}

export default HeroSection







