import Input from '../../../system/inputs/Input'
import Checkbox from '../../../system/inputs/Checkbox'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'



const teritoriulDeAcoperireOptions = [
    {
        id: '1',
        title: 'rm'
    },
    {
        id: '2',
        title: 'rm_csi'
    },
    {
        id: '3',
        title: 'rm_csi_eu_turcia'
    }
]


const fransizaOptions = [
    {
        id: '1',
        title: 'fara_fransiza'
    },
    {
        id: '2',
        title: 'cu_aplicarea_fransizei'
    }
]



const Step3 = () => {
    const {t} = useTranslation()
    const {form, handleChange,setCurrentFields, errors} = useInsuranceForm()

    useEffect(() => {
        setCurrentFields(['valoareaPePiata', 'teritoriulDeAcoperire', 'fransiza'])
    }, [])
    return (
        <div className='w-full flex flex-column gap-8'>
            <Input 
            error={errors.valoareaPePiata}
            type='number'
            value={form.valoareaPePiata}
            onChange={(value) => handleChange(value, 'valoareaPePiata')}
            label={t('valoarea_pe_piata')} />
            <Input.Wrapper error={errors.teritoriulDeAcoperire } className='gap-2'>
                <Input.Label>{t('teritoriul_de_acoperire_casco')}</Input.Label>
                <div className='flex gap-8'>
                    {teritoriulDeAcoperireOptions.map((option) => (
                        <Checkbox
                            key={option.id}
                            title={t(option.title)}
                            value={form.teritoriulDeAcoperire === option.id}
                            onChange={() => handleChange(option.id, 'teritoriulDeAcoperire')}
                        />
                    ))}
                </div>
            </Input.Wrapper>
            <Input.Wrapper error={errors.fransiza} className='gap-2'>
            <Input.Label
            
            >{t("fransiza")}</Input.Label>
                <div className='flex gap-8'>
                    {fransizaOptions.map((option) => (
                        <Checkbox
                            key={option.id}
                            title={t(option.title)}
                            value={form.fransiza === option.id}
                            onChange={() => handleChange(option.id, 'fransiza')}
                        />
                    ))}

                </div>
            </Input.Wrapper>
        </div>
    )
}

export default Step3