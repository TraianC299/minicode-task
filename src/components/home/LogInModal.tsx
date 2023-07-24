import  { useState } from 'react'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import styled from 'styled-components'
import Input from '../system/inputs/Input'
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

const ForgPassLinkStyles = styled.a`
color: var(--dark-gray);
text-decoration: none;
`
const LogInModal = () => {
    const {t} = useTranslation()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
  return (
    <ContainerStyles>
        <h3 className='h3'>{t('logheaza_te')}</h3>
        <div className='flex gap-2'>
            <p>{t('nu_ai_cont')}</p>
            <a>{t('inregistreaza_te')}</a>
        </div>
        <Input
        placeholder={t('email')}
        value={form.email}
        onChange={(value) => setForm({...form, email: value})}
        ></Input>
        <Input
        placeholder={t('parola')}
        value={form.password}
        onChange={(value) => setForm({...form, password: value})}
        ></Input>

        <ForgPassLinkStyles>{t('ai_uitat_parola')}</ForgPassLinkStyles>
        <Button className='p-bold w-full'>{t('inregistrare')}</Button>

    </ContainerStyles>
  )
}

export default LogInModal