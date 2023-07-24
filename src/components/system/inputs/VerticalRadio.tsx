
import styled from 'styled-components'



const ContainerStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
>p{

    text-align: center;
}
>.line{
    width: 2px;
    height: 6px;
    border: 1px solid #948E8C;
}
*{
        color: #948E8C;
    }
&.selected{
    *{
        color: var(--black);
    }
}
`

const RadioButtonStyles = styled.div`
width: 20px;
height: 20px;
border: 1px solid #948E8C;
border-radius: 50%;
cursor: pointer;

&.selected{
    border: 1px solid var(--burgundy, #A40731);
    position: relative;
    &::after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--black);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

        
}
`
interface VerticalRadioProps {
    title: string,
    value: boolean,
    onChange: (value: boolean) => void,
    
}


const VerticalRadio = ({
    title,
    value,
    onChange,


}:VerticalRadioProps) => {
    return (
        <ContainerStyles
        className={value ? 'selected' : ''}
        >
            <RadioButtonStyles
            
            aria-checked={value?"true":"false"}
                onClick={() => onChange(!value)}
                className={value ? 'selected' : ''}
            />
            <div className='line' />
            <p className='small'>{title}</p>
        </ContainerStyles>
    )
}

export default VerticalRadio

