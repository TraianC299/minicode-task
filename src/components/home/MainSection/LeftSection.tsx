import styled from 'styled-components'
import MEDIAQUERIES from '../../../constants/MEDIAQUERIES'
import ColorImage from '../../system/utils/ColorImage'
import IconButton from '../IconButton'
import { useContent } from '../../../contexts/ContentProvider.context'
import useLanguage from '../../../hooks/useLanguage'
import { useTranslation } from 'react-i18next'
import LANGUAGES from '../../../constants/LANGUAGES.constant'


const LeftSideContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 35px;
padding: 30px 15px;
border-right: 1px solid var(--gray, #E7E5E4);
width: 100px;
.phone{
  flex:1;
}

@media ${MEDIAQUERIES.MOBILE}{
  display: none;
}
`



const Icon = styled(ColorImage)`
width: 32px;
height: 32px;

`

const HorizontalLine = styled.div`
height: 1px;
width: 100%;
background: var(--gray, #E7E5E4);
`

const VerticalLine = styled.div`
height: 100%;
width: 1px;
background: var(--gray, #E7E5E4);`
const LanguageContainer = styled.div`
display: flex;
gap: 8px;
>.active{
  color: var(--burgundy);
}
>.line{
  align-self: stretch;
    width: 1px;
  background: var(--gray, #E7E5E4);
}
`
const LeftSection = () => {
  const {t} = useTranslation()
  const {onChangeLang, currentLang} = useLanguage()
    const {icons} = useContent()
  return (
    <LeftSideContainer>
        <IconButton
        text={
          <LanguageContainer className='flex'>
            {
              LANGUAGES.map((lang, index) => (
              <><p
                className={currentLang === lang.code ? 'active' : ''}
                onClick={() => onChangeLang(lang.code)}
                >{lang.code.toUpperCase()}</p>
                {index !== LANGUAGES.length - 1 && <div className='line'/>}
                </>

              ))
            }
          </LanguageContainer>
        }
          icon={<Icon color="burgundy" src={icons.lang}/>}/>
          <VerticalLine/>
        <IconButton 
          className='phone'
          text={t('suna')}
          icon={<Icon color="burgundy" src={icons.phone}/>}/>
          <VerticalLine/>
            <IconButton
            text={t('messenger')}
            icon={<Icon color="burgundy" src={icons.messenger}/>}/>
            <HorizontalLine/>
            <IconButton
            text={t('whatsapp')}
            icon={<Icon color="burgundy" src={icons.whatsapp}/>}/>
      </LeftSideContainer>
  )
}

export default LeftSection