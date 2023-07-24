import { useEffect } from 'react'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import Checkbox from '../../../system/inputs/Checkbox'
import Input from '../../../system/inputs/Input'
import { useTranslation } from 'react-i18next'


const persoanaOptions = [
  {
    id: '1',
    title: 'fizica'
  },
  {
    id: '2',
    title: 'juridica'
  }
]

const Step1 = () => {
  const {t} = useTranslation()
  const {form, handleChange,setCurrentFields, errors} = useInsuranceForm()


  useEffect(() => {
    setCurrentFields(['automobilImatriculat', 'persoana', 'domiciliu'])
}, [])
  return (
    <div className='w-full flex flex-column gap-8'>
        <Input.Wrapper error={errors.automobilImatriculat} className='gap-2'>
            <Input.MoreInfo
            
             label={t('autovehiculul_este_imatriculat_in')}/>
            <Checkbox 
            
            value={form.automobilImatriculat}
            onChange={(value) => handleChange(value, 'automobilImatriculat')}
            title={t('republica_moldova')}/>
        </Input.Wrapper>
        <Input.Wrapper error={errors.persoana} className='gap-2'>
            <Input.MoreInfo
            label={t('posesorul_este_persoana')}/>
            <div className='flex gap-8'>
                    {persoanaOptions.map((option) => (
                        <Checkbox
                            key={option.id}
                            title={t(option.title)}
                            value={form.persoana === option.id}
                            onChange={() => handleChange(option.id, 'persoana')}
                        />
                    ))}
            </div>
        </Input.Wrapper>
        <Input 
        error={errors.domiciliu}
        value={form.domiciliu}
        onChange={(value) => handleChange(value, 'domiciliu')}
        label={t('domiciuliul')}/>
    </div>
  )
}

export default Step1