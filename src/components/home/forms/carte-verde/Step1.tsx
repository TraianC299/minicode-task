import VehicleCheckbox from '../../../system/inputs/VehicleCheckbox'
import styled from 'styled-components'
import { useContent } from '../../../../contexts/ContentProvider.context'
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
      title: 'Motocicleta B',
      icon: "bike"
  },
  {
      id: '2',
      title: 'Autoturisme A',
      icon: 'car',
  },
  {
      id: '3',
      title: 'Camion pînă la 3,5 tone',
      icon: 'minitruck',
  },
  {
      id: '4',
      title: 'Camion mai mult de 3,5 tone',
      icon: 'truck',
  },
  {
      id: '5',
      title: 'Microbus de pana la 20 de locuri',
      icon: 'minibus',
  },
  {
      id: '6',
      title: 'Autobuz peste 20 locuri',
      icon: 'bus',
  }
]
const Step1 = () => {
  const {icons} = useContent()
  const {handleChange, form, setCurrentFields, errors} = useInsuranceForm()  
  

  const onCheck = (value: boolean, id: string) => {
      if(value) {
          handleChange(id, 'vehicul')
      } else {
          handleChange(null, 'vehicul')
      }
  }

  useEffect(() => {
    setCurrentFields(['vehicul'])
    }, [])


  return ( 
    <ContainerStyles>
        {vehicles.map(vehicle => (
            <VehicleCheckbox  
            error={errors.vehicul}
            value={form.vehicul===vehicle.id}
            key={vehicle.id}
            title={vehicle.title}
            iconSrc={icons[vehicle.icon]}
            onChange={(value) => onCheck(value, vehicle.id)}
            />
        ))}
        

    </ContainerStyles>
  )
}

export default Step1