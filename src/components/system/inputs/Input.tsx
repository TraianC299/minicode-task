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
.error-text{
  color: var(--danger, #D32F2F);
}

&.error{
  label{
    color: var(--danger, #D32F2F);
  }
  >input, .input{
    border-color: var(--danger);
  &::placeholder{
    color: var(--danger);
  }
  }

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
&.small{
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

const LabelStyles = styled.label`
&.error{
  color: var(--danger, #D32F2F);
}
`

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    value: string,
    label?: string,
    moreInfo?: boolean,
    onChange: (value: string) => void,
    error?: boolean
}
const Input = ({
    value, 
    label,
    onChange,
    moreInfo,
    className,
    error,
    ...props
}:InputProps) => {
  return (
    <Input.Wrapper error={error}>
      {!moreInfo && label && <Input.Label  htmlFor={props.id}>{label}</Input.Label>}
      {moreInfo && label && <Input.MoreInfo  label={label}></Input.MoreInfo>}
      <InputStyles
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      className={`${error && 'error'}  ${className}`}
      {...props}></InputStyles>
      {error && <Input.Error>{error}</Input.Error>}
    </Input.Wrapper>
  )
}




interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  children: React.ReactNode,
  className?: string
}

interface WrapperProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
  error?: boolean
}


interface ErrorProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: React.ReactNode
}
Input.MoreInfo = ({label}:{label:string}) => <div className='flex items-center justify-between w-full'><Input.Label >{label}</Input.Label><MoreInfo></MoreInfo></div>
Input.Wrapper = ({children,error, ...props}:WrapperProps)=><ContainerStyles {...props} className={error ? 'error':''}>{children}</ContainerStyles>
Input.Label = ({children, ...props}:LabelProps) => <LabelStyles {...props} className={`p ${props.className}`} >{children}</LabelStyles>
Input.Error = ({children, ...props}:ErrorProps) => <p {...props} className={`small error-text`} >{children}</p>
export default Input