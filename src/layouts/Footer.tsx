import styled from 'styled-components'
import MEDIAQUERIES from '../constants/MEDIAQUERIES'
import { useContent } from '../contexts/ContentProvider.context'
import Button from '../components/system/inputs/Button'
import ColorImage from '../components/system/utils/ColorImage'
import { useTranslation } from 'react-i18next'



const ContainerStyles = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
background: var(--burgundy);
*{
    color: var(--white);
}
a{
    :hover{
        color: var(--gray);
    }
}
@media ${MEDIAQUERIES.LAPTOP} {
    padding: 80px 0px;
}

`

const InnerContainer = styled.div`
display: flex;
width: 100%;
height: fit-content;
align-items: flex-start;
gap: 1rem;
flex-shrink: 0;
flex-direction: column;
padding: 1rem;
@media ${MEDIAQUERIES.LAPTOP} {
    flex-direction: row;
    width: 1300px;
    height: 392px;
    gap: 130px;
    padding: 0rem;

}
`
const LogoContainer = styled.div`
display: flex;
width: 100%;
padding-top: 60px;
flex-direction: column;
align-items: flex-start;
gap: 35px;
flex-shrink: 0;
>img{
    height: 34px;
}
@media ${MEDIAQUERIES.LAPTOP} {
    width: 310px;
}
`

const Section = styled.div`
display: flex;
width: 100%;
padding-top: 60px;
flex-direction: column;
align-items: flex-start;
gap: 30px;
flex-shrink: 0;
align-self: stretch;
h5{
    margin: 0px;
}
.links{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media ${MEDIAQUERIES.LAPTOP} {
    width: 200px;
}
`
const Footer = () => {
    const {t} = useTranslation()
    const { icons } = useContent()
    return (
        <ContainerStyles>
            <InnerContainer className='max-width'>
                <LogoContainer>
                    <ColorImage color='white' height={34} src={icons.logo}></ColorImage>
                    <p className='p'>{t("footer_text")}</p>
                    <Button className='ghost'>Comanda apel</Button>
                </LogoContainer>
                <Section className='flex flex-column'>
                    <h5 className='h5'>Companie</h5>
                    <div className='links'>
                        <a className='p'>{t("produse_de_asigurare")}</a>
                        <a className='p'>{t("caz_asigurat")}</a>
                        <a className='p'>{t("noutati")}</a>
                        <a className='p'>{t("cariera")}</a>
                        <a className='p'>{t("oferte")}</a>
                        <a className='p'>{t('intrebari')}</a>
                    </div>
                </Section>
                <Section className='flex flex-column'>
                    <h5 className='h5'>{t('contacte')}</h5>
                    <div className='links'>
                        <a className='p'>+373 69 845 825</a>
                        <a className='p'>+373 22 824 845</a>
                        <div>mun. Chișinău,<br />
                            str. București, 101
                        </div>
                    </div>
                </Section>
                <Section className='flex flex-column'>
                    <h5 className='h5'>Social media</h5>
                    <div className='links'>
                        <a className='p'>Facebook</a>
                        <a className='p'>Instagram</a>
                        <a className='p'>LinkedIn</a>
                        <a className='p'>Youtube</a>
                    </div>
                </Section>
            </InnerContainer>

        </ContainerStyles>
    )
}

export default Footer