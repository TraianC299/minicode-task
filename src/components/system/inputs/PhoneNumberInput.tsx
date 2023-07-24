import { PatternFormat } from 'react-number-format';
import styled from 'styled-components';
import COLORS from '../../../constants/COLORS.constant';
 

export const InputStyles = styled(PatternFormat)`
width: 100%;
min-width: 300px;
height: 45px;
padding: 0px 15px;
align-items: center;
border-radius: 7px;
border: 1px solid var(--gray);
background: ${COLORS.WHITE};
display: flex;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 27px; /* 150% */
justify-content: flex-start;
align-items: center;
outline: none;
:focus{
    border-radius: 7px;
border: 1px solid var(--burgundy, #A40731);
background: ${COLORS.WHITE};
}
.small{
    border-radius: 5px;
border: 1px solid ${COLORS.GRAY};
background: ${COLORS.WHITE};
}

&::placeholder{
  color: var(--dark-gray, #42403F);
font-size: 18px;
font-style: normal;
font-weight: 200;
line-height: 27px; /* 150% */
}

&:hover{
  border-color: var(--burgundy, #A40731);
  &::placeholder{
    color: var(--burgundy, #A40731);
  }
}


&.error{
  border-color: var(--danger, #D32F2F);
  &::placeholder{
    color: var(--danger, #D32F2F);
  }
}
`

interface PhoneNumberInputProps {
  value: string,
  onChange: (value: string) => void,
  error?: boolean
}

const PhoneNumberInput = ({
  value,
  onChange,
  error
}:PhoneNumberInputProps) => {
  return (
  <InputStyles 
    className={error ? 'error' : ''}
    value={value}
    onChange={(e)=>onChange(e.target.value)}
    style={{
      fontWeight: 300,
      fontFamily: 'PT-Root-UI',
    }}
    format="(+373) ##-###-### " 
    allowEmptyFormatting mask="_" />
  )
}

export default PhoneNumberInput