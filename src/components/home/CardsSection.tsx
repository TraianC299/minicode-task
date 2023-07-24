import styled from 'styled-components'
import { useContent } from '../../contexts/ContentProvider.context'
import Card from './Card'
import Button from '../system/inputs/Button'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import ColorImage from '../system/utils/ColorImage'
import { useTranslation } from 'react-i18next'


const Container = styled.div<{bgImage: string}>`
display: flex;
width: 100%;
padding: 0px;
justify-content: center;
align-items: center;
background-size: cover;
background-repeat: no-repeat;
background-position: top;
position: relative;
@media ${MEDIAQUERIES.LAPTOP}{
    padding: 80px 0px;
}
&::before{
z-index: -1;
content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
`


const ContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 30px;

padding: 1rem;

@media ${MEDIAQUERIES.LAPTOP}{
    padding: 0rem;
}
`

const CardsContainer = styled.div`
flex-direction: column;
width: 100%;

//background: url(<path-to-image>), lightgray 50% / cover no-repeat, #F4F9FF;
@media ${MEDIAQUERIES.LAPTOP}{
    flex-direction: row;

}
`


const CardsSection = () => {
    const {t} = useTranslation()
    const {images, icons, cards} = useContent()
  return (
    <Container
    bgImage={images["card-section-bg"]}
    >
        <ContentContainer className='max-width'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='h3 raleway'>{t("oferte")}</h2>
                <Button  className='p-bold text icon'>{t("vezi_toate_ofertele")}
                <ColorImage color='burgundy' src={icons["arrow-right"]}></ColorImage>
</Button>
            </div>
            <CardsContainer className='flex items-center justify-center gap-4'>
                {cards.map((card) => <Card key={card.id} {...card}/>)}
            </CardsContainer>
        </ContentContainer>

    </Container>
  )
}

export default CardsSection



