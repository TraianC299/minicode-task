import styled from "styled-components"
import VehicleCheckbox from "../../../system/inputs/VehicleCheckbox"
import { useContent } from "../../../../contexts/ContentProvider.context"
import { useInsuranceForm } from "../../../../contexts/InsuranceFormProvider.context"
import { useEffect } from "react"

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
        title: 'Autovehicule destinate transportului de pers...',
        icon: 'bus',
    },
    {
        id: '3',
        title: 'Tractoare rutiere avind puterea motorului',
        icon: 'tractor',
    },
    {
        id: '4',
        title: 'Camioane si alte autovehicule a caror m...',
        icon: 'truck',
    },
    {
        id: '5',
        title: 'Motociclete',
        icon: 'bike',
    }
]
      


  
  

const Step2 = () => {
    const {icons} = useContent()
    const {form, handleChange,setCurrentFields, errors} = useInsuranceForm()
    useEffect(() => {
        setCurrentFields(['vehicul'])
    }, [])
  return (
    <ContainerStyles>
       
        {vehicles.map(vehicle => (
            <VehicleCheckbox
            error={errors.vehicul}
            key={vehicle.id}
            iconSrc={icons[vehicle.icon]}
            title={vehicle.title}
            value={form.vehicul === vehicle.id}
            onChange={() => handleChange(vehicle.id, 'vehicul')}
            ></VehicleCheckbox>
        ))}



      

    </ContainerStyles>
  )
}

export default Step2