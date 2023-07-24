import { useInsurance } from '../../../../contexts/InsuranceProvider.context'
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
  const {form, handleChange} = useInsurance()


  
  return (
    <div className='w-full flex flex-column gap-8'>
        <Input.Wrapper className='gap-2'>
            <Input.MoreInfo label="Autovehicolul este înmatriculat în:"/>
            <Checkbox 
            value={form.automobilImatriculat}
            onChange={(value) => handleChange(value, 'automobilImatriculat')}
            title='Republica Moldova'/>
        </Input.Wrapper>
        <Input.Wrapper className='gap-2'>
            <Input.MoreInfo label="Posesorul autovehicoluiui este persoană:"/>
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
        value={form.domiciliu}
        onChange={(value) => handleChange(value, 'domiciliu')}
        label='Domiciliul persoanei asigurate'/>
    </div>
  )
}

export default Step1