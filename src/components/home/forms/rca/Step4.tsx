import { useInsurance } from '../../../../contexts/InsuranceProvider.context'
import Checkbox from '../../../system/inputs/Checkbox'
import Input from '../../../system/inputs/Input'



const pensionarOptions = [
    {
        id: true,
        title: 'Da'
    },
    {
        id: false,
        title: 'Nu'
    }
]
const rcaAsigurat = [
    {
        id: true,
        title: 'Da'
    },
    {
        id: false,
        title: 'Nu'
    }
]


const asigRemorca = [
    {
        id: true,
        title: 'Da'
    },
    {
        id: false,
        title: 'Nu'
    }
]

const Step4 = () => {
    const { form, handleChange } = useInsurance()

    return (
        <div className='w-full flex flex-column gap-8'>
            <Input.Wrapper className='gap-4'>
                <Input.Label>Sunteti pensionar sau aveti grad de invaliditate?</Input.Label>
                <div className='flex gap-8'>
                    {pensionarOptions.map((option, index) => (
                        <Checkbox
                            key={index}
                            title={option.title}
                            value={form.pensionar === option.id}
                            onChange={() => handleChange(option.id, 'pensionar')}
                        />
                    ))}
                </div>
            </Input.Wrapper>
            <Input.Wrapper
                className='gap-4'>
                <Input.Label>Aţi mai încheiat contract de asigurare RCA?</Input.Label>
                <div className='flex gap-8'>
                    {rcaAsigurat.map((option, index) => (
                        <Checkbox
                            key={index}
                            title={option.title}
                            value={form.rcaAsigurat === option.id}
                            onChange={() => handleChange(option.id, 'rcaAsigurat')}
                        />
                    ))}
                </div>
            </Input.Wrapper >
            <Input.Wrapper
                className='gap-4'>
                <Input.Label>Asigurare pentru remorci</Input.Label>
                <div className='flex gap-8'>
                    {asigRemorca.map((option, index) => (
                        <Checkbox
                            key={index}
                            title={option.title}
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