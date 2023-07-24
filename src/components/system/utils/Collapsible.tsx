import React from 'react'
import styled from 'styled-components'
import { useContent } from '../../../contexts/ContentProvider.context'
import ColorImage from './ColorImage'





const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
border-radius: 7px;
/* border: 1px solid var(--gray, #E7E5E4); */
overflow: hidden;
box-shadow: 0px 5px 15px 2px rgba(27, 25, 24, 0.05);


`


const Head = styled.div`
display: flex;
height: 50px;
padding: 0px 20px;
align-items: center;
align-self: stretch;
justify-content: space-between;
border-radius: 7px 7px 0px 0px;
background: var(--white, #FFF);

`
const ContentStyles = styled.div`
display: flex;
padding: 20px 14px 20px 20px;
align-items: center;
gap: 20px;
align-self: stretch;
border-radius: 0px 0px 7px 7px;
background: var(--white, #FFF);
overflow: hidden;
text-align: left;
border-top: 1px solid var(--gray, #E7E5E4);

`



const CloseOpenButton = styled(ColorImage)`
height: 20px;
width: 20px;`


interface CollapsibleProps {
    title: string,
    content: React.ReactNode
}
const Collapsible = ({
    title,
    content
}: CollapsibleProps) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [open, setOpen] = React.useState(false)
    const [height, setHeight] = React.useState(0)
    const {icons} =useContent()
    React.useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.scrollHeight)
        }
    }, [ref.current, content])



    return (
        <Container
        role='collapsible'



        >
            <Head
                className={open ? 'open' : ''}
                onClick={() => setOpen(prev => !prev)}>
                <span className='p-bold'>{title}</span>
                <CloseOpenButton 
                src={open?icons.close:icons.plus}
                color='burgundy'
                 ></CloseOpenButton>
         
            </Head>
            <div
                style={{
                    height: open ? height : 0
                }}
                ref={ref}
                className={
                    `${open ? 'open' : ''} transition`
                }>
                <ContentStyles
                    className='small font-regular'
                >
                    {content}
                </ContentStyles>
            </div>
        </Container>
    )
}

export default Collapsible