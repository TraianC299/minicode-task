import styled from 'styled-components'
import ColorImage from '../utils/ColorImage'
import { useContent } from '../../../contexts/ContentProvider.context'


const ContainerStyles = styled.div`
display: flex;
align-items: center;
gap: 10px;
>p{
  color: #948E8C;
}
`


const CheckboxContainer = styled.div`
width: 16px;
height: 16px;
border-radius: 4px;
border: 1px solid var(--burgundy, #A40731);
cursor: pointer;
>img{
    height: 12px;
    width: 12px;
}
&.selected{
    border: 1px solid var(--burgundy, #A40731);
    
}
`
interface CheckboxProps {
    title: string,
    value: boolean,
    onChange: (value: boolean) => void
}

const Checkbox = ({title, value, onChange}:CheckboxProps) => {
  const {icons} = useContent()
  return (
    <ContainerStyles>
      <CheckboxContainer
      onClick={()=>onChange(!value)}
       className='flex items-center justify-center'>
        {value &&<ColorImage color='burgundy' src={icons.check} />}
      </CheckboxContainer>
      <p className='p'>{title}</p>
    </ContainerStyles>
  )
}

export default Checkbox