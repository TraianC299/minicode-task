import styled from 'styled-components'
import { useContent } from '../../../contexts/ContentProvider.context'
import Button from '../../system/inputs/Button'
import MEDIAQUERIES from '../../../constants/MEDIAQUERIES'
import ColorImage from '../../system/utils/ColorImage'
import { useInsurance } from '../../../contexts/InsuranceProvider.context'
import { useTranslation } from 'react-i18next'



const ContainerStyles = styled.div`
display: grid;
padding: 1rem;
gap: 10px;

align-items: flex-start;
width: 100%;
border-radius: 7px;
background: var(--gradient-2, linear-gradient(61deg, #A40731 0%, #830B3A 40.06%, #002359 100%));
/* Standard gray shadow */
box-shadow: 0px 5px 15px 2px rgba(27, 25, 24, 0.05);
>h3{
  color: var(--white, #FFF);
}
.text-white{
  color: var(--white, #FFF);
}

@media ${MEDIAQUERIES.LAPTOP} {
  gap: 15px;
  padding: 30px;

}
@media ${MEDIAQUERIES.DESKTOP} {
  gap: 30px;
  padding: 30px;
}
`
const InsuranceTypeStyles = styled.button`
align-self: stretch;
display: flex;
width: fit-content;
height: 45px;
padding: 0px 30px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 7px;
border: 1px solid var(--gray, #E7E5E4);
background: var(--white, #FFF);
width: max-content;
:hover{
  background: var(--gradient-2, linear-gradient(61deg, #A40731 0%, #830B3A 40.06%, #002359 100%));
    background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
&.selected{
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.30) inset;
  //grdient text
  >p{
    background: var(--gradient-2, linear-gradient(61deg, #A40731 0%, #830B3A 40.06%, #002359 100%));
    background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  }
  
}
`

const InsuranceTypeContainerStyles = styled.div`
display: flex;
justify-content: flex-start;
/* width: 100%; */
overflow-x: scroll;
gap: 10px;
@media ${MEDIAQUERIES.LAPTOP}{
  flex-wrap: nowrap;
  justify-content: space-between;
}
`
const InsuranceTypeSelector = () => {
  const { selectedInsuranceType, setSelectedInsuranceType } = useInsurance()
  const { insurance, icons } = useContent()
  const {t} = useTranslation()
  return (
    <ContainerStyles className='max-width'>
      <h3 className='h3'>{t("alege_tipul_de_asigurare")}</h3>
      <InsuranceTypeContainerStyles className='flex gap-2'>
        {insurance.map(el => <InsuranceTypeStyles
          key={el.id}
          disabled={!el.active}
          onClick={() => setSelectedInsuranceType(el.id)}
          className={`flex align-center justify-center ${selectedInsuranceType === el.id ? 'selected' : ''}`}
          style={{
            cursor: el.active ? 'pointer' : 'not-allowed'
          }}
        ><p className='p'>{t(el.title)}</p></InsuranceTypeStyles>)}
        <Button
          className='text text-white'>{t("altele")}<ColorImage color="white" src={icons["arrow-right"]} />

        </Button>
      </InsuranceTypeContainerStyles>
    </ContainerStyles>
  )
}

export default InsuranceTypeSelector