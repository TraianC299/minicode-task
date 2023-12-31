import Checkbox from '../../../system/inputs/Checkbox'
import VerticalRadio from '../../../system/inputs/VerticalRadio'
import Input from '../../../system/inputs/Input'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'







const valabilitateaPolitei = [
    {
        id: '1',
        title: '15 zile'
    },
    {
        id: '2',
        title: '1 luna'
    },
    {
        id: '3',
        title: '2 luni'
    },
    {
        id: '4',
        title: '3 luni'
    },
    {
        id: '5',
        title: '4 luni'
    },
    {
        id: '6',
        title: '5 luni'
    },
    {
        id: '7',
        title: '6 luni'
    },
    {
        id: '8',
        title: '7 luni'
    },
    {
        id: '9',
        title: '8 luni'
    },
    {   
        id: '10',
        title: '9 luni'
    }

]


const zonaDeplasare = [
    {
        id: '1',
        title: 'ucraina_belarus'
    },
    {
        id: '2',
        title: 'ucraine_belarus_fed_rusia'
    },
    {
        id: '3',
        title: 'tarile_membre'
    }
]
const Step2 = () => {
    const {t} = useTranslation()
    const {handleChange, form, setCurrentFields, errors} = useInsuranceForm() 


    const onCheck = (value: boolean, id: string) => {
        if(value) {
            handleChange([...form.zonaDeDeplasare, id], 'zonaDeDeplasare')
        } else {
            handleChange(form.zonaDeDeplasare.filter((item: string) => item !== id), 'zonaDeDeplasare')
        }
    }

    const onChoose = (value: boolean, id:string) => {
        if(value) {
            handleChange(id, 'valabilitateaPolitei')
        } else {
            handleChange(null, 'valabilitateaPolitei')
        }
    }

    useEffect(() => {
        setCurrentFields(['zonaDeDeplasare', 'valabilitateaPolitei'])
    }, [])

     
  return (
    <div className='flex flex-column gap-4'>
        <Input.Wrapper
        error={errors.zonaDeDeplasare}
         className='flex flex-column gap-2'>
            <Input.Label
            >Zona de deplasare:</Input.Label>
            <div className='flex flex-column gap-4'>
                {zonaDeplasare.map((item) => (
                    <Checkbox
                    key={item.id}
                    title={t(item.title)}
                    value={form.zonaDeDeplasare?.includes(item.id)}
                    onChange={(value) =>onCheck(value, item.id)}
                    />
                ))}

            </div>
        </Input.Wrapper>
        <Input.Wrapper 
        error={errors.valabilitateaPolitei}
        className='flex flex-column gap-2'>
            <Input.Label
            className={errors.valabilitateaPolitei}
            >{t('valabilitatea_politei')}</Input.Label>
            <div className='flex gap-4'>
                {valabilitateaPolitei.map((item) => (
                    <VerticalRadio
                    key={item.id}
                    title={item.title}
                    value={form.valabilitateaPolitei===item.id}
                    onChange={(value) =>  onChoose(value, item.id)}
                    />
                ))}
            </div>
        </Input.Wrapper>
       
    </div>
  )
}

export default Step2