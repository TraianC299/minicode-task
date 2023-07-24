import React from 'react'
import styled from 'styled-components'
import useClickOutside from '../../../hooks/useClickOutside'
import Input from './Input'

const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3.55183L8.96825 0.150476C9.23032 -0.0741627 9.62489 -0.0438118 9.84952 0.218266C10.0742 0.480344 10.0438 0.874906 9.78173 1.09954L5.40674 4.84954C5.17269 5.05015 4.82731 5.05015 4.59326 4.84954L0.218266 1.09954C-0.0438118 0.874906 -0.0741625 0.480344 0.150476 0.218266C0.375114 -0.0438118 0.769675 -0.0741627 1.03175 0.150476L5 3.55183Z" fill="#1B1918" />
</svg>



const Container = styled.div`
position: relative;
width: 100%;
`


const Head = styled.div`
display: flex;
align-items: center;
gap: 20px;
height: 45px;
padding: 0px 20px;
border-radius: 7px;
background: var(--white, #FFF);
border: 1px solid var(--gray);
justify-content: space-between;
&:hover{
  border-color: var(--burgundy, #A40731);
  >span{
    color: var(--burgundy, #A40731);
  }
}

`
const OptionsContainerStyles = styled.div`
position: absolute;
top: calc(100% + 10px);
left: 0px;
width: 100%;
flex-direction: column;
border: 1px solid var(--gray);
border-radius:7px;
display: none;
background: var(--white, #FFF);
z-index: 1;
overflow: hidden;
&.open{
    display: flex;
}

`




const OptionStyles = styled.div`
display: flex;
height: 45px;
padding: 0px 20px;
align-items: center;
align-self: stretch;
cursor: pointer;

&:hover{
    background: var(--light-gray, #E7E5E4);
}
&.selected{
    background: var(--black, #1B1918);
    color: var(--white, #FFF);
}
`

interface SelectProps {
    value: string,
    onChange: (value: string) => void,
    icon?: React.ReactNode,
    placheloder: string,
    label:  string,
    moreInfo: boolean,
    error?: boolean,
    options: {
        label: string,
        value: string
    }[]
}
const Select = ({
    value, 
    onChange,
    icon,
    placheloder,
    options,
    label,
    error,
    moreInfo
}: SelectProps) => {
    const ref = React.useRef(null)
    const [open, setOpen] = React.useState(false)
    useClickOutside(ref, () => setOpen(false))
    const getLabel = () => {
        const option = options.find(option => option.value === value)
        if(option){
            return option.label
        }
        return ''
    }
    return (
        <Input.Wrapper error={error}>
            {!moreInfo && label && <Input.Label>{label}</Input.Label>}
            {moreInfo && label && <Input.MoreInfo label={label}></Input.MoreInfo>}
            <Container
            role='select'
            aria-label={placheloder}
            aria-expanded={open}
            aria-haspopup='listbox'
            aria-owns='listbox'
            ref={ref}
            >
                <Head
                className={open ? 'open' : ''}
                onClick={() => setOpen(prev => !prev)}>
                    {icon}
                    <span className='p'>{getLabel() || 'Selectati o optiune'}</span>
                    <ArrowDown
                    style={{
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    />
                </Head>
                <OptionsContainerStyles className={
                    open ? 'open' : ''
                }>
                    {options.map((option, index) => (
                        <OptionStyles
                        className={`${option.value === value ? 'selected' : ''} p`}
                        onClick={()=>onChange(option.value)}
                         key={index}>
                            {option.label}
                        </OptionStyles>
                    ))}
                </OptionsContainerStyles>
            </Container>
        </Input.Wrapper>
    )
}

export default Select