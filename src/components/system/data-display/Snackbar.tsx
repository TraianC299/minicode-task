import styled from 'styled-components'
import { useContent } from '../../../contexts/ContentProvider.context'
import MEDIAQUERIES from '../../../constants/MEDIAQUERIES'
import SNACKTYPES from '../../../constants/SNACKTYPES.constant'
import { useEffect, useState } from 'react'


const ContainerStyles = styled.div`
display: flex;
padding: 20px;
align-items: flex-start;
gap: 20px;
flex: 1 0 0;
border-radius: 7px;
border: 2px solid var(--dark-gray);
background: var(--white, #FFF);
position: fixed;
max-width: 90vw;
bottom: -100px;
left: 20px;
transition: bottom 0.3s ease-in-out;
z-index: 1000;


img{
height: 20px;
width: 20px;
}
&.success{
    border: 2px solid var(--success, #00A86B);
}
&.warning{
    border: 2px solid var(--warning, #FFC107);
}
&.error{ 
    border: 2px solid var(--danger, #E83912);
}

&.open{
    bottom: 20px;
}
@media ${MEDIAQUERIES.LAPTOP} {
    max-width: 500px;
}

`



interface Props {
    message: string,
    setMessage: (message: string) => void,
    type?: typeof SNACKTYPES[keyof typeof SNACKTYPES],
    autoHideDuration?: number
}


const Snackbar = ({ message, setMessage, autoHideDuration, type }: Props) => {

    const { icons } = useContent()
    const [open, setOpen] = useState(false)
    const close = () => {
        setOpen(false)
        setTimeout(() => {
            setMessage("")
        }, 300)
    }
    useEffect(() => {
        if (message) {
            setOpen(true)
            if (autoHideDuration) {
                setTimeout(() => {
                    close()
                }, autoHideDuration)
            }
            return
        }else{
            close()
        }
    }, [message])

  

    return (
        <ContainerStyles
            className={`p transition ${type} ${open ? "open" : ""}`}
        >
            {message}
            <img onClick={close} src={icons.close}></img>
        </ContainerStyles>
    )
}

export default Snackbar