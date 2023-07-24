import styled from 'styled-components'
import IconButton from '../components/home/IconButton'
import Modal from '../components/system/utils/Modal'
import SignUpModal from '../components/home/SignUpModal'
import { useState } from 'react'
import LogInModal from '../components/home/LogInModal'
import { useContent } from '../contexts/ContentProvider.context'
import DektopSidebarMenu from './DektopSidebarMenu'
import ColorImage from '../components/system/utils/ColorImage'
import { useTranslation } from 'react-i18next'


const ContainerStyles = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 30px;
align-self: stretch;
position: sticky;
top: 0;
height: 5rem;
background: var(--white, #FFF);
z-index: 9999;
box-shadow: 0px 5px 15px 2px rgba(27, 25, 24, 0.05);
@media (max-width: 768px){
    display: none;
}
`


const AuthButtonsContainer = styled.div`
display: flex;
align-items: center;
gap: 15px;
align-self: stretch;
>div{
    width: 100px;
}
`



const MiddleTextContainer = styled.div`
flex:1;
position: relative;
display: flex;
justify-content: center;
align-items: center;
>.h3{
    background: var(--white, #FFF);
    z-index: 1;
    height: fit-content;
    width: fit-content;
    padding: 0px 43px;
}
.line{
    height: 1px;
    background: var(--gray, #E7E5E4);
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -9999;

}`


const MenuButtonStyles = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100px;
margin-right: 20px;
>img{
    height: 32px;
    width: 32px;
}
`



const DesktopNav = () => {
    const { t } = useTranslation();

    const { icons } = useContent()
    const [openLogInModal, setOpenLogInModal] = useState(false)
    const [openSignUpModal, setOpenSignUpModal] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <ContainerStyles>
            <DektopSidebarMenu visible={openMenu} setVisible={setOpenMenu} />
            <div className='flex justify-center items-center'>
                <MenuButtonStyles
                    onClick={() => setOpenMenu(prev => !prev)}
                >
                    <img src={icons['menu1']} alt=""></img>

                </MenuButtonStyles>
                <img height={34} src={icons.logo}></img>
            </div>
            <MiddleTextContainer>
                <div className='h3 raleway'>{t("nav_title")}</div>
                <div className='line'></div>
            </MiddleTextContainer>
            <AuthButtonsContainer>
                <IconButton
                    onClick={() => setOpenLogInModal(true)}
                    icon={<ColorImage color='burgundy' height={32} width={32} src={icons['users']} alt=""></ColorImage>}
                    text={t("logare")}
                >
                </IconButton>

                <IconButton
                    onClick={() => setOpenSignUpModal(true)}
                    icon={<ColorImage color='burgundy' height={32} width={32} src={icons['file-reg']} alt=""></ColorImage>}
                    text={t("inregistrare")}
                />

            </AuthButtonsContainer>
            <Modal
                visible={openLogInModal}
                setVisible={setOpenLogInModal}
            >
                <LogInModal
                    closeModal={() => setOpenLogInModal(false)}
                    openSignUpModal={() => setOpenSignUpModal(true)}
                />
            </Modal>
            <Modal
                visible={openSignUpModal}
                setVisible={setOpenSignUpModal}
            >
                <SignUpModal
                    closeModal={() => setOpenSignUpModal(false)}
                    openLogInModal={() => setOpenLogInModal(true)}
                />
            </Modal>
        </ContainerStyles>
    )
}

export default DesktopNav

