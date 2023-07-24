import styled from 'styled-components'
import FILTERS from '../../../constants/FILTERS.constant'
import MEDIAQUERIES from '../../../constants/MEDIAQUERIES'


const ContainerStyles = styled.div`
display: flex;
width: 100%;
height: 125px;
padding: 15px 20px;
flex-direction: column;
align-items: center;
gap: 7px;
border-radius: 7px;
background: var(--white);
/* Standard gray shadow */
box-shadow: 0px 5px 15px 2px rgba(27, 25, 24, 0.05);
text-align: center;
cursor: pointer;
>img{
    height: 50px;
    width: 50px;
}
&:hover{
    >img{
        filter: ${FILTERS.BURGUNDY};
    }
}
&.selected{
    border: 1px solid var(--burgundy, #A40731);
    >img{
        filter: ${FILTERS.BURGUNDY};
    }
    >p{
        font-weight: 700;
    }
}

@media ${MEDIAQUERIES.LAPTOP} {
    height: 100px;
    padding: 10px 15px;
    >img{
        height: 35px;
        width: 35px;
    }
}
@media ${MEDIAQUERIES.DESKTOP} {
    height: 125px;
padding: 15px 20px;
    >img{
        height: 50px;
        width: 50px;
    }
}
`


interface VehicleCheckboxProps {
    iconSrc: string,
    title: string,
    value: boolean,
    onChange: (value: boolean) => void
}
const VehicleCheckbox = ({
    iconSrc, title, value, onChange
}:VehicleCheckboxProps) => {
    
  return (
    <ContainerStyles
    onClick={()=>onChange(!value)}
        className={value ? 'selected' : ''}
    >
        <img src={iconSrc}></img>
        <p className='small'>{title}</p>
    </ContainerStyles>
  )
}

export default VehicleCheckbox