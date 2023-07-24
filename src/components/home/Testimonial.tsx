import styled from 'styled-components'
import { useContent } from '../../contexts/ContentProvider.context'
import ColorImage from '../system/utils/ColorImage'
import TestimonialType from '../../types/Testimonial.type'

const ContainerStyles = styled.div`
display: flex;
width: 100%;
max-width: 640px;
padding: 25px;
align-items: flex-start;
gap: 20px;
border-radius: 7px;
background: var(--white, #FFF);
/* Standard gray shadow */
box-shadow: 0px 5px 15px 2px rgba(27, 25, 24, 0.05);
&:hover{
  box-shadow: 0px 5px 15px 2px rgba(205, 28, 75, 0.12);
}

`
const PersonImageStyles = styled.img`
height: 100px;
align-self: stretch;
border-radius: 100px;
border: 2px solid var(--burgundy, #A40731);
object-fit: cover;
`

const StarsContainerStyles = styled.div`
display: flex;
gap: 5px;
>img{
  height: 20px;
  width: 20px;
}

`

const TextContainerStyles = styled.div`
display: flex;
flex-direction: column;
gap: 15px;

`
const Testimonial = ({name,image,content, rating=3}:TestimonialType) => {
    const {icons} = useContent()
  return (
    <ContainerStyles className='transition'>
        <PersonImageStyles src={image}></PersonImageStyles>
        <TextContainerStyles>
            <p className='h5 font-bold'>{name}</p>
            <StarsContainerStyles className='items-center'>
              {new Array(rating).fill(1).map((_) => <ColorImage color='orange' src={icons["star-filled"]}></ColorImage>)}
              {new Array(5-rating).fill(1).map((_) => <ColorImage color='gray' src={icons.star}></ColorImage>)}
              </StarsContainerStyles>
            <p className='small font-regular'>{content}</p>
        </TextContainerStyles>
      
    </ContainerStyles>
  )
}

export default Testimonial

