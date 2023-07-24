import  { useState } from 'react'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import styled from 'styled-components'
import Input from '../system/inputs/Input'
import Checkbox from '../system/inputs/Checkbox'
import Button from '../system/inputs/Button'
import { useTranslation } from 'react-i18next'


const ContainerStyles = styled.div`
background: var(--white);
display: flex;
width: 90vw;
padding: 30px;
flex-direction: column;
align-items: flex-start;
gap: 30px;
border-radius: 7px;
a{
    color:var(--burgundy);
}
/* Shadow */
box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.10);
@media ${MEDIAQUERIES.LAPTOP} {
    width: 550px;

}
`
const SignUpModal = () => {
    const {t} = useTranslation()
    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        termsAndConditions: false
    })
  return (
    <ContainerStyles>
        <h3 className='h2 font-bold'>{t('inregistreaza_te')}</h3>
        <div className='flex gap-2'>
            <p>{t('deja_ai_cont')}</p>
            <a className='underline font-regular'>{t("logheaza_te")}</a>
        </div>
        <Input
        placeholder={t("email")}
        value={form.email}
        onChange={(value) => setForm({...form, email: value})}
        ></Input>
        <Input
        placeholder={t("parola")}
        value={form.password}
        onChange={(value) => setForm({...form, password: value})}
        ></Input>

        <Input
        placeholder={t("confirma_parola")}
        value={form.passwordConfirm}
        onChange={(value) => setForm({...form, passwordConfirm: value})}
        ></Input>
        <Checkbox
        value={form.termsAndConditions}
        onChange={(value:boolean) => setForm({...form, termsAndConditions: value})}
        title={t('acord_termeni')}
        ></Checkbox>
        <Button className='p-bold w-full'>{t("inregistrare")}</Button>

    </ContainerStyles>
  )
}

export default SignUpModal