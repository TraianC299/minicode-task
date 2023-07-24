import Input from '../../../system/inputs/Input'
import Checkbox from '../../../system/inputs/Checkbox'
import { useInsurance } from '../../../../contexts/InsuranceProvider.context'



const teritoriulDeAcoperireOptions = [
    {
        id: '1',
        title: 'RM'
    },
    {
        id: '2',
        title: 'RM + CSI'
    },
    {
        id: '3',
        title: 'RM + CSI + EU + TURCIA'
    }
]


const fransizaOptions = [
    {
        id: '1',
        title: 'Fără Franșiză'
    },
    {
        id: '2',
        title: 'Cu aplicarea franșizei'
    }
]



const Step3 = () => {
    const {form, handleChange} = useInsurance()


    return (
        <div className='w-full flex flex-column gap-8'>
            <Input 
            type='number'
            value={form.valoareaPePiata}
            onChange={(value) => handleChange(value, 'valoareaPePiata')}
            label='Valoarea de piață ( € )' />
            <Input.Wrapper className='gap-2'>
                <Input.Label>Teritoriul de acoperire CASCO</Input.Label>
                <div className='flex gap-8'>
                    {teritoriulDeAcoperireOptions.map((option) => (
                        <Checkbox
                            key={option.id}
                            title={option.title}
                            value={form.teritoriulDeAcoperire === option.id}
                            onChange={() => handleChange(option.id, 'teritoriulDeAcoperire')}
                        />
                    ))}
                </div>
            </Input.Wrapper>
            <Input.Wrapper className='gap-2'>
            <Input.Label>Franșiza</Input.Label>
                <div className='flex gap-8'>
                    {fransizaOptions.map((option) => (
                        <Checkbox
                            key={option.id}
                            title={option.title}
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