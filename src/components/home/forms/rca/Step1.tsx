import { useEffect } from 'react'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import Checkbox from '../../../system/inputs/Checkbox'
import Input from '../../../system/inputs/Input'


const persoanaOptions = [
  {
    id: '1',
    title: 'Fizica'
  },
  {
    id: '2',
    title: 'Juridica'
  }
]

const Step1 = () => {
  const {form, handleChange,setCurrentFields, errors} = useInsuranceForm()


  useEffect(() => {
    setCurrentFields(['automobilImatriculat', 'persoana', 'domiciliu'])
}, [])
  return (
    <div className='w-full flex flex-column gap-8'>
        <Input.Wrapper error={errors.automobilImatriculat} className='gap-2'>
            <Input.MoreInfo
            
             label="Autovehicolul este înmatriculat în:"/>
            <Checkbox 
            
            value={form.automobilImatriculat}
            onChange={(value) => handleChange(value, 'automobilImatriculat')}
            title='Republica Moldova'/>
        </Input.Wrapper>
        <Input.Wrapper error={errors.persoana} className='gap-2'>
            <Input.MoreInfo 
            
            label="Posesorul autovehicoluiui este persoană:"/>
            <div className='flex gap-8'>
                    {persoanaOptions.map((option) => (
                        <Checkbox
                            key={option.id}
                            title={option.title}
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
        label='Domiciliul persoanei asigurate'/>
    </div>
  )
}

export default Step1