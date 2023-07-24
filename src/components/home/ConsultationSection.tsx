import Input from '../system/inputs/Input'
import Button from '../system/inputs/Button'
import { useState } from 'react'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import styled from 'styled-components'
import { useContent } from '../../contexts/ContentProvider.context'
import PhoneNumberInput from '../system/inputs/PhoneNumberInput'
import { useTranslation } from 'react-i18next'



const ContainerStyles = styled.div`
display: flex;
height: fit-content;
padding: 40px 0px;
justify-content: center;
align-items: center;
padding: 1rem;
@media ${MEDIAQUERIES.LAPTOP} {
    height: 260px;
    padding: 80px 0px;
    
}
`
const ContentStyles = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: flex-start;
gap: 20px;
@media ${MEDIAQUERIES.LAPTOP} {
    flex-direction: row;

}
`
const TextContainerStyles = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 25px;
flex: 1 0 0;
>p{
    color: var(--dark-gray);
}`

const FormContainerStyles = styled.form`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-end;
gap: 30px;
flex-shrink: 0;
.input-container{
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
}

@media ${MEDIAQUERIES.LAPTOP} {
    width: 50%;
    .input-container{
        flex-direction: row;
    }
}
`


const ConsultationSection = () => {
    const {t} = useTranslation()
    const {consultation} = useContent()
    const [form, setForm] = useState({
        name: '',
        phone: ''
    })


  return (
    <ContainerStyles>
        <ContentStyles className='max-width'>
            <TextContainerStyles>
                <h3 className='h3 raleway'>{t('consultatie_titlu')}</h3>
                <p className='p'>{t('consultatie_subtitlu')}</p>
            </TextContainerStyles>
            <FormContainerStyles>
                <div className='input-container'>
                    <Input
                    placeholder={t('nume')}
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    ></Input>
                    <PhoneNumberInput
                   
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    ></PhoneNumberInput>
                </div>
                <Button type='submit'>{
                    t("consultatie_button")
                }</Button>
            </FormContainerStyles>
        </ContentStyles>
    </ContainerStyles>
  )
}

export default ConsultationSection