import Checkbox from '../../../system/inputs/Checkbox'
import VerticalRadio from '../../../system/inputs/VerticalRadio'
import Input from '../../../system/inputs/Input'
import { useInsurance } from '../../../../contexts/InsuranceProvider.context'







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
        title: 'Ucraina, Belarus'
    },
    {
        id: '2',
        title: 'Ucraina, Belarus, Federatia Rusa'
    },
    {
        id: '3',
        title: 'Tarile membre ale sistemului Carte Verde, Europa'
    }
]
const Step2 = () => {

    const {handleChange, form} = useInsurance()


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

     
  return (
    <div className='flex flex-column gap-4'>
        <Input.Wrapper className='flex flex-column gap-2'>
            <Input.Label>Zona de deplasare:</Input.Label>
            <div className='flex flex-column gap-4'>
                {zonaDeplasare.map((item) => (
                    <Checkbox

                    key={item.id}
                    title={item.title}
                    value={form.zonaDeDeplasare?.includes(item.id)}
                    onChange={(value) =>onCheck(value, item.id)}
                    />
                ))}

            </div>
        </Input.Wrapper>
        <Input.Wrapper className='flex flex-column gap-2'>
            <Input.Label>Valabilitatea poliței:</Input.Label>
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