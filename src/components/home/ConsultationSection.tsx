import Input from '../system/inputs/Input'
import Button from '../system/inputs/Button'
import { useState } from 'react'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import styled from 'styled-components'
import PhoneNumberInput from '../system/inputs/PhoneNumberInput'
import { useTranslation } from 'react-i18next'
import useForm from '../../hooks/useForm'



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
    const [form, setForm] = useState({
        name: '',
        phone: ''
    })
    const {handleChange, errors, validateForm} = useForm(form, setForm,{
        name:"empty",
        phone:"empty"
    })


    const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        validateForm()
    }



  return (
    <ContainerStyles>
        <ContentStyles className='max-width'>
            <TextContainerStyles>
                <h3 className='h3 raleway'>{t('consultatie_titlu')}</h3>
                <p className='p'>{t('consultatie_subtitlu')}</p>
            </TextContainerStyles>
            <FormContainerStyles
            onSubmit={submitForm}
            >
                <div className='input-container'>
                    <Input
                    error={errors.name}
                    placeholder={t('nume')}
                    value={form.name}
                    onChange={(value) => handleChange(value,'name')}
                    ></Input>
                    <PhoneNumberInput
                    error={errors.phone}
                    value={form.phone}
                    onChange={(value) => handleChange(value,'phone')}
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