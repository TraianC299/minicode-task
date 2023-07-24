import { useEffect } from 'react'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import Input from '../../../system/inputs/Input'
import Select from '../../../system/inputs/Select'
import { useTranslation } from 'react-i18next'




const nrDeLocuri = [
    {
        value: '1',
        label: 'Pina la 17 locuri, inclusiv al conducatorului'
    },
    {
        value: '2',
        label: 'De la 18 pina la 30 locuri, inclusiv al conducatorului'
    },
    {
        value: '3',
        label: 'Cu peste 30 locuri'
    },
    {
        value: '4',
        label: 'Troleibuze'
    }

]


const nrPersoane = [
    {
        value: '1',
        label: 'Limitat'
    },
    {
        value: '2',
        label: 'Nelimitat'
    }
]




const Step3 = () => {
    const {t} = useTranslation()
    const {form, handleChange, setCurrentFields, errors} = useInsuranceForm()
    useEffect(() => {
        setCurrentFields(['nrLocuri', 'nrPersAdmise', 'stagiu'])
    }, [])
    return (
        <div className='flex flex-column gap-8 w-full'>
                
                <Select
                    error={errors.nrLocuri}
                    label={t('nr_de_locuri')}
                    moreInfo
                    value={form.nrLocuri}
                    onChange={(value) => handleChange(value, 'nrLocuri')}
                    options={nrDeLocuri}
                    placheloder={t('selectati_o_optiune')} />
          
                <Select
                    error={errors.nrLocuri}
                    label={t('nr_persoanelor_admise')}
                    moreInfo
                    value={form.nrPersAdmise}
                    onChange={(value) => handleChange(value, 'nrPersAdmise')}
                    options={nrPersoane}
                    placheloder={t('selectati_o_optiune')} />
            <Input 
            error={errors?.stagiu}
            value={form?.stagiu} 
            onChange={(value) => handleChange(value, 'stagiu')}
            moreInfo 
            placeholder={t('pana_la_1_an')}
            label={t('stagiul_de_conducere')} />
        </div>
    )
}

export default Step3