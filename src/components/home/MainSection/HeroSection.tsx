import styled from 'styled-components'
import InsuranceTypeSelector from './InsuranceTypeSelector'
import VerticalStepper from './HeroRightSide'
import Collapsible from '../../system/utils/Collapsible'
import MEDIAQUERIES from '../../../constants/MEDIAQUERIES'
import LeftSection from './LeftSection'
import { useInsurance } from '../../../contexts/InsuranceProvider.context'
import { useTranslation } from 'react-i18next'
import InsuranceForm from './InsuranceForm'
import Transition from '../../system/utils/Transition'

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







const InsuranceTitle = styled.h3`
margin-top: 40px;
`



const HeroSection = () => {
  const {t} = useTranslation()
  const {
    currentInstance,
  } = useInsurance()

    






  
  return (
    <ContainerStyles>
      <LeftSection/>

      <InsuranceSectionContainer className='max-width'>
        <InsuranceTypeSelector
       
        />
         <Transition>
           <InsuranceTitle className="h3">{t(currentInstance?.title)}</InsuranceTitle>
         </Transition>
          <InsurancePresentationContainer>
              <InsuranceForm/>
              <CollapsiblesContainer>
              {currentInstance?.info?.map(el=><Collapsible 
              key={el.id} 
              title={t(el.title)} 
              content={t(el.content)}/>) }
          
              </CollapsiblesContainer>
          </InsurancePresentationContainer>
      </InsuranceSectionContainer>

      <VerticalStepper />
    </ContainerStyles>
  )
}

export default HeroSection







