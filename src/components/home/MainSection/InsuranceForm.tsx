import InsuranceFormProvider, { useInsuranceForm } from '../../../contexts/InsuranceFormProvider.context'
import styled from 'styled-components'
import Transition from '../../system/utils/Transition'
import { useInsurance } from '../../../contexts/InsuranceProvider.context'
import Button from '../../system/inputs/Button'
import ColorImage from '../../system/utils/ColorImage'
import FinalPrice from './FinalPrice'
import { useContent } from '../../../contexts/ContentProvider.context'
import { useTranslation } from 'react-i18next'







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

const InsuranceForm = () => {
    const {t} = useTranslation()
    const {icons} = useContent()
    const {screen, showCost, onBackClick, nextButtonTitle} = useInsurance()
    const {onNextClickHandler} = useInsuranceForm()

  return (
    <InsuranceTypeStyles>
    <Transition>
      {screen}
      </Transition>
      <Transition>
        {showCost &&<FinalPrice finalPrice={300}/>}
      </Transition>
    <ButtonsContainerStyles className='w-full flex justify-between items-center'>
    <Button
  onClick={onBackClick}
  className='ghost'><ColorImage className='reverse' src={icons["arrow-right"]}/>{t('inapoi')}</Button>
  <Button
  // disabled={disabled}
  className='icon'
  onClick={onNextClickHandler}
  >
    {t(nextButtonTitle)} <ColorImage color='white' src={icons["arrow-right"]}></ColorImage></Button>
    </ButtonsContainerStyles>
  </InsuranceTypeStyles>
  )
}



export default ()=><InsuranceFormProvider><InsuranceForm/></InsuranceFormProvider>