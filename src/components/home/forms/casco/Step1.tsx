import VehicleCheckbox from '../../../system/inputs/VehicleCheckbox'
import { useContent } from '../../../../contexts/ContentProvider.context'
import styled from 'styled-components'
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
        title: 'autoturism_cu_pana_la_9',
        icon: "car"
    },
    {
        id: '2',
        title: 'camion_pana_la_3',
        icon: 'minitruck',
    },
    {
        id: '3',
        title: 'camion_peste_3',
        icon: 'truck',
    },
    {
        id: '4',
        title: 'microbus_de_pana_la_20',
        icon: 'minibus',
    },
    {
        id: '5',
        title: 'autobuz_peste_20',
        icon: 'bus',
    },
    {
        id: '6',
        title: 'remorci_semiremorci',
        icon: 'trailer',
    },
    {
        id: '7',
        title: 'refrigeratoare_cisterne',
        icon: 'refrigerant'
    },
    {
        id: '8',
        title: 'tehnica_speciala',
        icon: 'technique'
    },
    {
        id: '9',
        title: 'echipament_suplimentar',
        icon: 'other-technique'
    }
]
        

const Step1 = () => {
    const {t} = useTranslation()
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
            title={t(vehicle.title)}
            value={form.vehicul === vehicle.id}
            onChange={() => handleChange(vehicle.id, 'vehicul')}
            ></VehicleCheckbox>
        ))}



      

    </ContainerStyles>
  )
}

export default Step1
