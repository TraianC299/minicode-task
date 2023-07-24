import styled from 'styled-components'
import Button from '../system/inputs/Button'
import { useContent } from '../../contexts/ContentProvider.context'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import ColorImage from '../system/utils/ColorImage'
import CardType from '../../types/Card.type'
import { useTranslation } from 'react-i18next'



const ContainerStyles = styled.div`
display: flex;
width: 100%;
height: fit-content;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
border-radius: 7px;
background: var(--white, #FFF);
overflow: hidden;
/* Standard gray shadow */
box-shadow: 0px 5px 15px 2px rgba(27, 25, 24, 0.05);
>.image{
    border-radius: 7px 7px 0px 0px;
    height: 247px;
    overflow: hidden;
flex-shrink: 0;
align-self: stretch;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
}
&:hover{
  box-shadow: 0px 5px 15px 2px rgba(205, 28, 75, 0.12);
  img{
    transform: scale(1.05);
  }
}

@media ${MEDIAQUERIES.LAPTOP} {
  flex:1;
    max-width: 420px;
    height: 515px;
    >img{
        height: 247px;
    }
}
`


const TextContentStyles = styled.div`
display: flex;
height: fit-content;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
flex-shrink: 0;
align-self: stretch;
text-align: left;
.h4, .p{
  margin: 0px;
}
@media ${MEDIAQUERIES.LAPTOP} {
    height: 268px;
}
`






const Card = ({
  title,
  subtitle,
  image
}: CardType) => {
  const {t} = useTranslation()
  const { icons } = useContent()
  return (
    <ContainerStyles className='transition'>
      <div className='image'><img className='transition' src={image}></img></div>
      <TextContentStyles className='flex flex-column justify-between'>
        <h4 className='h4'>{title}</h4>
        <p className='sp'>{subtitle}</p>
        {/* <LinkStyles className='p-bold'>Vezi mai mult <img src={icons["arrow-right"]}></img>
</LinkStyles> */}
        <Button className='p-bold text p-0'>
          {t("vezi_mai_mult")}
          <ColorImage
            color='burgundy'
            src={icons["arrow-right"]}></ColorImage>
        </Button>
      </TextContentStyles>
    </ContainerStyles>
  )
}

export default Card