import styled from 'styled-components'
import MEDIAQUERIES from '../../constants/MEDIAQUERIES'
import Testimonial from './Testimonial'
import { useContent } from '../../contexts/ContentProvider.context'
import { useState } from 'react'
import SmoothFadeInOut from '../system/utils/Transition'
import { useTranslation } from 'react-i18next'


const ContainerStyles = styled.div`
display: flex;
width: 100%;
padding: 1rem;
justify-content: center;
align-items: center;
background: var(--light-gray, #F9F9F9);
@media ${MEDIAQUERIES.LAPTOP}{
    padding: 80px 0px;
}
`

const ContentStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
flex-shrink: 0;
width: 100%;
>h2{
  align-self: flex-start;
}
`

const TestimonialContainerStyles = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
@media ${MEDIAQUERIES.LAPTOP} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;

}
`


const PointsContainerStyles = styled.div`
display: flex;
padding-top: 10px;
align-items: flex-start;
gap: 10px;
`

const PointStyles = styled.div`
width: 20px;
height: 5px;
border-radius: 5px;
background: var(--gray, #E7E5E4);
cursor: pointer;
&.active{
  width: 40px;
  background: var(--burgundy, #A40731);
}
`
const TestimonialsSection = () => {
  const {t} = useTranslation()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const {testimonials} = useContent()
 

  return (
    <ContainerStyles>
        <ContentStyles className='max-width'>
            <h2 className='raleway h3'>{t('recenziile_clientilor')}</h2>
            <SmoothFadeInOut>
              <TestimonialContainerStyles>
                  {testimonials.slice(
                    activeTestimonial * 4,
                    activeTestimonial * 4 + 4
                  ).map((testimonial, index) => <Testimonial key={index} {...testimonial}/>)}
              </TestimonialContainerStyles>
            </SmoothFadeInOut>
            <PointsContainerStyles>
              {new Array(testimonials.length/4).fill(0).map((testimonial, index) => <PointStyles
              onClick={() => setActiveTestimonial(index)}
               key={index} 
               className={`transition ${index === activeTestimonial ? 'active' : ''}`}/>
               )}
            </PointsContainerStyles>
        </ContentStyles>
    </ContainerStyles>
  )
}

export default TestimonialsSection