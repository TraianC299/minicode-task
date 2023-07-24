import VehicleCheckbox from '../../../system/inputs/VehicleCheckbox'
import { useContent } from '../../../../contexts/ContentProvider.context'
import styled from 'styled-components'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import { useEffect } from 'react'


const ContainerStyles = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
gap: 20px;

`


const vehicles = [
    {
        id: '1',
        title: 'Autoturism cu pînă la 9 locuri',
        icon: "car"
    },
    {
        id: '2',
        title: 'Camion pînă la 3,5 tone',
        icon: 'minitruck',
    },
    {
        id: '3',
        title: 'Camion mai mult de 3,5 tone',
        icon: 'truck',
    },
    {
        id: '4',
        title: 'Microbus de pana la 20 de locuri',
        icon: 'minibus',
    },
    {
        id: '5',
        title: 'Autobuz peste 20 locuri',
        icon: 'bus',
    },
    {
        id: '6',
        title: 'Remorci, semiremorci',
        icon: 'trailer',
    },
    {
        id: '7',
        title: 'Refrigeratoare, cisterne',
        icon: 'refrigerant'
    },
    {
        id: '8',
        title: 'Tehnică specială',
        icon: 'technique'
    },
    {
        id: '9',
        title: 'Echipament suplimentar',
        icon: 'other-technique'
    }
]
        

const Step1 = () => {
    const {form,handleChange, setCurrentFields, errors} = useInsuranceForm()
    const {icons}  = useContent()


    useEffect(() => {
        setCurrentFields(['vehicul'])
    }, [])

  return (
    <ContainerStyles>
       
        {vehicles.map(vehicle => (
            <VehicleCheckbox
            key={vehicle.id}
            error={errors.vehicul}
            iconSrc={icons[vehicle.icon]}
            title={vehicle.title}
            value={form.vehicul === vehicle.id}
            onChange={() => handleChange(vehicle.id, 'vehicul')}
            ></VehicleCheckbox>
        ))}



      

    </ContainerStyles>
  )
}

export default Step1
