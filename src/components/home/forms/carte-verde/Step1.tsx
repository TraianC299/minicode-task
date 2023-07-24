import VehicleCheckbox from '../../../system/inputs/VehicleCheckbox'
import styled from 'styled-components'
import { useContent } from '../../../../contexts/ContentProvider.context'
import { useInsuranceForm } from '../../../../contexts/InsuranceFormProvider.context'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'


const ContainerStyles = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
gap: 20px;

`

const vehicles = [
  {
      id: '1',
      title: 'motocicleta_b',
      icon: "bike"
  },
  {
      id: '2',
      title: 'autoturisme_a',
      icon: 'car',
  },
  {
      id: '3',
      title: 'camion_pana_la_3',
      icon: 'minitruck',
  },
  {
      id: '4',
      title: 'camion_peste_3',
      icon: 'truck',
  },
  {
      id: '5',
      title: 'microbus_de_pana_la_20',
      icon: 'minibus',
  },
  {
      id: '6',
      title: 'autobuz_peste_20',
      icon: 'bus',
  }
]
const Step1 = () => {
    const {t} = useTranslation()
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
            title={t(vehicle.title)}
            iconSrc={icons[vehicle.icon]}
            onChange={(value) => onCheck(value, vehicle.id)}
            />
        ))}
        

    </ContainerStyles>
  )
}

export default Step1