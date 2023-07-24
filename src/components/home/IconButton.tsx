import React from 'react'
import styled from 'styled-components'

const ContainerStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100px;
gap: 5px;
width: min-content;
text-align: center;
cursor: pointer;
`


interface IconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: any,
    text: string | React.ReactNode
}

const IconButton = ({
    icon, 
    text,
    ...props
}:IconButtonProps) => {
  return (
    <ContainerStyles {...props}>
        {icon}
        <div 
        className='small m-0'>{text}</div>
    </ContainerStyles>
  )
}

export default IconButton