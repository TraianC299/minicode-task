import styled from 'styled-components'
import Input from '../../../system/inputs/Input'
import VerticalRadio from '../../../system/inputs/VerticalRadio'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'



const ContainerStyles = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 40px;
align-self: stretch;
`

const InputsContainerStyles = styled.div`
display: flex;
width: 600px;
flex-direction: column;
align-items: center;
gap: 20px;
`

const RadioContainerStyles = styled.div`
gap: 20px;`



const anulProduceriiOptions = [
    //from 2010 to 2021
    {
        id: "2010",
        title: "2010"
    },
    {
        id: "2011",
        title: "2011"
    },
    {
        id: "2012",
        title: "2012"
    },
    {
        id: "2013",
        title: "2013"
    },
    {

        id: "2014",
        title: "2014"
    },
    {
        id: "2015",
        title: "2015"
    },
    {
        id: "2016",
        title: "2016"
    },
    {
        id: "2017",
        title: "2017"
    },
    {
        id: "2018",
        title: "2018"
    },
    {
        id: "2019",
        title: "2019"
    },
    {
        id: "2020",
        title: "2020"
    },
    {
        id: "2021",
        title: "2021"
    }
]
const Step2 = () => {
    const {t} = useTranslation()
    const {form, handleChange,errors,setCurrentFields} = useInsuranceForm()
  
    useEffect(() => {
        setCurrentFields(['model', 'marca', 'anProducere'])
    }, [])
    return (
        <ContainerStyles className='w-full'>
            <InputsContainerStyles className='w-full'>
                <Input 
                error={errors.model}
                value={form.model}
                placeholder={t("introduceti_modelul")}
                onChange={(value)=>handleChange(value,'model')}
                label={t('model')} className='w-full'/>
                <Input 
                error={errors.marca}
                value={form.marca}
                onChange={(value)=>handleChange(value,'marca')}
                label={t('marca')}
                placeholder={t("intro_marca")}
                className='w-full'/>
            </InputsContainerStyles>
            <Input.Wrapper error={errors.anProducere} className='gap-2'>
                <Input.Label >{t('anul_producerii')}</Input.Label>
                <RadioContainerStyles className='flex flex gap-1'>
                    {anulProduceriiOptions.map((option) => (
                        <VerticalRadio
                            key={option.id}
                            title={option.title}
                            value={form.anProducere === option.id}
                            onChange={() => handleChange(option.id, 'anProducere')}
                        />
                    ))}
                </RadioContainerStyles>
            </Input.Wrapper>
        </ContainerStyles>
    )
}

export default Step2