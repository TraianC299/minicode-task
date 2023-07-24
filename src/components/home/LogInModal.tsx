import  { FormEvent, useState } from 'react'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import styled from 'styled-components'
import Input from '../system/inputs/Input'
import Button from '../system/inputs/Button'
import { useTranslation } from 'react-i18next'
import { useSnack } from '../../contexts/SnackProvider.context'
import useForm from '../../hooks/useForm'
import AuthService from '../../services/AuthService.service'


const FormStyles = styled.form`
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

interface Props {
    closeModal: () => void
    openSignUpModal: () => void
}
const LogInModal = ({
    closeModal,
    openSignUpModal
}:Props) => {
    const {
        setSuccess,
        setError,
        setLoading,
    } = useSnack()
    const {t} = useTranslation()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const {
        handleChange,
        validateForm,
        errors
    } = useForm(form, setForm, {
        email: "email",
        password: "password",
    })

    const  handleLogin = async (e:FormEvent) => {
        e.preventDefault()
        if(validateForm()){
            setLoading(true)
            try{
                const response = await AuthService.login(form.email, form.password)
                console.log(response)
                setSuccess('Logare cu succes')
            }catch{
                setError('Email sau parola incorecta')
    
            }finally{
                setLoading(false)
            }
        }
    }



  return (
    <FormStyles
    onSubmit={handleLogin}
    >
        <h3 className='h3'>{t('logheaza_te')}</h3>
        <div className='flex gap-2'>
            <p>{t('nu_ai_cont')}</p>
            <span onClick={()=>{closeModal();openSignUpModal()}}
            >{t('inregistreaza_te')}</span>
        </div>
        <Input
        error={errors.email}
        placeholder={t('email')}
        value={form.email}
        onChange={(value) => handleChange(value,'email')}
        ></Input>
        <Input
        type='password'
        error={errors.password}
        placeholder={t('parola')}
        value={form.password}
        onChange={(value) => handleChange(value,'password')}
        ></Input>

        <ForgPassLinkStyles>{t('ai_uitat_parola')}</ForgPassLinkStyles>
        <Button className='p-bold w-full' type='submit'>{t('logheaza_te')}</Button>

    </FormStyles>
  )
}

export default LogInModal