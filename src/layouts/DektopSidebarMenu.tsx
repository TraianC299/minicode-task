import styled from 'styled-components'
import { useContent } from '../contexts/ContentProvider.context'
import ColorImage from '../components/system/utils/ColorImage'
import useLanguage from '../hooks/useLanguage'
import { useTranslation } from 'react-i18next'
import LANGUAGES from '../constants/LANGUAGES.constant'


const Background = styled.div`
display: flex;
width: 100%;
height: 100%;
position: fixed;
top: 0px;
left: 0px;
justify-content: flex-start;
align-items: center;
background: rgba(0, 0, 0, 0.50);
backdrop-filter: blur(5px);
z-index: 100;
opacity: 0;
pointer-events: none;
&.visible{
    opacity: 1;
    pointer-events: all;
}
`
const DektopSidebarMenuStyles = styled.div`
display: flex;
width: 400px;
height: 100%;
padding: 30px;
flex-direction: column;
align-items: flex-start;
gap: 30px;
background: var(--white, #FFF);
transform: translateX(-100%);
&.visible{
    transform: translateX(0%);
}
`

const HeaderStyles = styled.div`
gap: 30px;`

const CloseButtonStyles = styled.button<{ src: string }>`
height: 30px;
width: 30px;
background-image: url(${props => props.src});
background-repeat: no-repeat;
background-position: center;
background-size: contain;
background-color: transparent;
border: none;
`


const LinkStyles = styled.div`
display: flex;
padding-right: 0px;
align-items: center;
gap: 10px;
align-self: stretch;
>h5{
    color: var(--black);
}
>img{
    height: 24px;
    width: 24px;
}
`
interface DektopSidebarMenuProps {
    visible: boolean,
    setVisible: (visible: boolean) => void
}


const SmallLinkStyles = styled(LinkStyles)`
>p{
    cursor: pointer;
}
>img{
    height: 18px;
    width: 18px;
}
>.line{
    height: 18px;
    width: 1px;
    background: var(--gray);
}
>.active{
    color: var(--burgundy);
    font-weight: 600;
}
`



const menuItems = [
    {
        title: 'pagina_principala',
        icon: 'home',
        link: '/'
    },
    {
        title: 'despre_minicode',
        icon: 'users',
        link: '/despre'
    },
    {
        title: 'produse_de_asigurare',
        icon: 'check-circle'
    },
    {
        title: 'caz_asigurat',
        icon: 'delivery'
    },
    {
        title: 'cariera',
        icon: 'file-reg'
    },
    {
        title: 'oferte',
        icon: 'star'
    },
    {
        title: 'noutati',
        icon: 'support'
    },
    {
        title: 'intrebari',
        icon: 'question'
    },
    {
        title: 'contacte',
        icon: 'phone'
    }
]


const bottomMenuItens = [
    {
        title: '+ 373 69 845 845',
        icon: 'phone'
    },
    {
        title: 'office@minicode.md',
        icon: 'mail'
    },
    {
        title: 'mun. Chisinau, str Bucuresti, 101',
        icon: 'placeholder'
    },
    {
        title: 'harta',
        icon: 'search'
    }
]
const DektopSidebarMenu = ({ visible, setVisible }: DektopSidebarMenuProps) => {
    const { t } = useTranslation()
    const { icons } = useContent()
    const { onChangeLang, currentLang } = useLanguage()
    return (
        <Background
            className={`transition ${visible ? "visible" : ""}`}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setVisible(false)
                }
            }
            }
        >
            <DektopSidebarMenuStyles
                className={`transition ${visible ? "visible" : ""}`}
            >
                <HeaderStyles className='flex justify-start items-center'>
                    <CloseButtonStyles
                        onClick={() => setVisible(false)}
                        src={icons.close}
                    />
                    <h2>{t("meniu")}</h2>
                </HeaderStyles>
                <div className='flex flex-column flex-1 gap-4'>
                    {menuItems.map(el => <LinkStyles className='flex justify-start items-center'>
                        <ColorImage color='burgundy' src={icons[el.icon]} />
                        <h5 className='h5'>{t(el.title)}</h5>
                    </LinkStyles>)}
                </div>
                <SmallLinkStyles>
                    <ColorImage color='burgundy' src={icons['lang']} />
                    {LANGUAGES.map((el, index) => <><p
                        onClick={() => onChangeLang(el.code)}
                        className={`p ${currentLang === el.code ? 'active' : ''}`}>{el.code.toUpperCase()}</p>
                            {index !== LANGUAGES.length - 1 && <div className='line'/>}
                        </>)
                        }
                </SmallLinkStyles>
                <div className='flex flex-column gap-2'>
                    {bottomMenuItens.map(el => <SmallLinkStyles className='flex justify-start items-center'>
                        <ColorImage color='black' src={icons[el.icon]} />
                        <p className='p'>{t(el.title)}</p>
                    </SmallLinkStyles>)}
                </div>


            </DektopSidebarMenuStyles>
        </Background>
    )
}

export default DektopSidebarMenu