import React from 'react'
import COLORS from '../../../constants/COLORS.constant'
import styled from 'styled-components'
import MoreInfo from '../data-display/MoreInfo'

const ContainerStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 5px;
width: 100%;
>label{
  color: var(--black);
}
`
export const InputStyles = styled.input`
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
:focus{
    border-radius: 7px;
border: 1px solid var(--dark-gray, #42403F);
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
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string,
    label?: string,
    moreInfo?: boolean,
    onChange: (value: string) => void
}
const Input = ({
    value, 
    label,
    onChange,
    moreInfo,
    ...props
}:InputProps) => {
  return (
    <Input.Wrapper>
      {!moreInfo && label && <Input.Label className='p' htmlFor={props.id}>{label}</Input.Label>}
      {moreInfo && label && <Input.MoreInfo label={label}></Input.MoreInfo>}
      <InputStyles
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      {...props}></InputStyles>
    </Input.Wrapper>
  )
}

Input.MoreInfo = ({label}:{label:string}) => <div className='flex items-center justify-between w-full'><Input.Label>{label}</Input.Label><MoreInfo></MoreInfo></div>
Input.Wrapper = ({children, ...props}:React.InputHTMLAttributes<HTMLDivElement>)=><ContainerStyles {...props}>{children}</ContainerStyles>
Input.Label = ({children}:React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) => <label className='p' >{children}</label>
export default Input