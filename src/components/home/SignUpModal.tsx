import  { FormEvent, useState } from 'react'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import styled from 'styled-components'
import Input from '../system/inputs/Input'
import Checkbox from '../system/inputs/Checkbox'
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
.link{
    color:var(--burgundy);
}
/* Shadow */
box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.10);
@media ${MEDIAQUERIES.LAPTOP} {
    width: 550px;

}
`

interface Props {
    closeModal: () => void
    openLogInModal: () => void
}
const SignUpModal = ({
    closeModal,
    openLogInModal
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
        passwordConfirm: '',
        termsAndConditions: false,
    })
    const {
        handleChange,
        validateForm,
        errors
    } = useForm(form, setForm, {
        email: "email",
        password: "password",
        passwordConfirm: "confirmPassword",
        termsAndConditions: "check",
    })



    const  handleSignUp = async (e:FormEvent) => {
        e.preventDefault()
        if(validateForm()){
            setLoading(true)
            try{
                const response = await AuthService.register(form.email, form.password)
                console.log(response)
                setSuccess('Logare cu succes')
            }catch{
                setError('Email sau parola incorecta')
            }finally{
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            }
        }
    }

  return (
    <FormStyles
    onSubmit={handleSignUp}
    >
        <h3 className='h2 font-bold'>{t('inregistreaza_te')}</h3>
        <div className='flex gap-2'>
            <p>{t('deja_ai_cont')}</p>
            <span 
            onClick={()=>{
                closeModal()
                openLogInModal()
            }}
            className='underline font-regular link'>{t("logheaza_te")}</span>
        </div>
        <Input
        error={errors.email}
        placeholder={t("email")}
        value={form.email}
        onChange={(value) => handleChange(value,'email')}
        ></Input>
        <Input
        error={errors.password}
        placeholder={t("parola")}
        value={form.password}
        onChange={(value) => handleChange(value,'password')}
        ></Input>

        <Input
        error={errors.passwordConfirm}
        placeholder={t("confirma_parola")}
        value={form.passwordConfirm}
        onChange={(value) => handleChange(value,'passwordConfirm')}
        ></Input>
        <Checkbox
        value={form.termsAndConditions}
        onChange={(value:boolean) => handleChange(value,'termsAndConditions')}
        title={t('acord_termeni')}
        ></Checkbox>
        <Button className='p-bold w-full'>{t("inregistrare")}</Button>

    </FormStyles>
  )
}

export default SignUpModal