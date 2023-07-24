import { useInsurance } from '../../../../contexts/InsuranceProvider.context'
import Input from '../../../system/inputs/Input'
import Select from '../../../system/inputs/Select'




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
    const {form, handleChange} = useInsurance()

    return (
        <div className='flex flex-column gap-8 w-full'>
            <Input.Wrapper>
                <Input.MoreInfo label='Numarul de locuri:' />
                <Select
                    value={form.nrLocuri}
                    onChange={(value) => handleChange(value, 'nrLocuri')}
                    options={nrDeLocuri}
                    placheloder='Selecteaza o optiune' />
            </Input.Wrapper>
            <Input.Wrapper>
                <Input.MoreInfo label='Numărul persoanelor admise la conducere:' />
                <Select
                    value={form.nrPersAdmise}
                    onChange={(value) => handleChange(value, 'nrPersAdmise')}
                    options={nrPersoane}
                    placheloder='Selecteaza o optiune' />
            </Input.Wrapper>
            <Input 
            value={form.stagiu} 
            onChange={(value) => handleChange(value, 'stagiu')}
            moreInfo label='Stagiul de conducere a posesorului:' />
        </div>
    )
}

export default Step3