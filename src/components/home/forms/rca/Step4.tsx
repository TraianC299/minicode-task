import { useEffect } from 'react'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import Checkbox from '../../../system/inputs/Checkbox'
import Input from '../../../system/inputs/Input'
import { useTranslation } from 'react-i18next'



const pensionarOptions = [
    {
        id: true,
        title: 'da'
    },
    {
        id: false,
        title: 'nu'
    }
]
const rcaAsigurat = [
    {
        id: true,
        title: 'da'
    },
    {
        id: false,
        title: 'nu'
    }
]


const asigRemorca = [
    {
        id: true,
        title: 'da'
    },
    {
        id: false,
        title: 'nu'
    }
]

const Step4 = () => {
    const {t} = useTranslation()
    const { form, handleChange,setCurrentFields } = useInsuranceForm()
    useEffect(() => {
        setCurrentFields(['pensionar', 'rcaAsigurat', 'asigRemorca'])
    }, [])

    
    return (
        <div className='w-full flex flex-column gap-8'>
            <Input.Wrapper className='gap-4'>
                <Input.Label>{t('sunteti_pensionar')}</Input.Label>
                <div className='flex gap-8'>
                    {pensionarOptions.map((option, index) => (
                        <Checkbox
                            key={index}
                            title={t(option.title)}
                            value={form.pensionar === option.id}
                            onChange={() => handleChange(option.id, 'pensionar')}
                        />
                    ))}
                </div>
            </Input.Wrapper>
            <Input.Wrapper
                className='gap-4'>
                <Input.Label>{t('ati_incheiat')}</Input.Label>
                <div className='flex gap-8'>
                    {rcaAsigurat.map((option, index) => (
                        <Checkbox
                            key={index}
                            title={t(option.title)}
                            value={form.rcaAsigurat === option.id}
                            onChange={() => handleChange(option.id, 'rcaAsigurat')}
                        />
                    ))}
                </div>
            </Input.Wrapper >
            <Input.Wrapper
                className='gap-4'>
                <Input.Label>{t('asigurare_pt_remorci')}</Input.Label>
                <div className='flex gap-8'>
                    {asigRemorca.map((option, index) => (
                        <Checkbox
                            key={index}
                            title={t(option.title)}
                            value={form.asigRemorca === option.id}
                            onChange={() => handleChange(option.id, 'asigRemorca')}
                        />
                    ))}
                </div>
            </Input.Wrapper>
        </div>
    )
}

export default Step4