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
@media (min-width: 768px){
    display: none;
}
`


const AuthButtonsContainer = styled.div`
display: flex;
align-items: center;
gap: 15px;
align-self: stretch;
>div{
    width: 80px;
}
`





const MenuButtonStyles = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 80px;
margin-right: 20px;
>img{
    height: 32px;
    width: 32px;
}
`



const PhoneNav = () => {
    const {t} = useTranslation()
    const {icons} = useContent()
    const [openLogInModal, setOpenLogInModal] = useState(false)
    const [openSignUpModal, setOpenSignUpModal] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <ContainerStyles>
        <DektopSidebarMenu visible={openMenu} setVisible={setOpenMenu}/>
        <div className='flex justify-center items-center'>
            <MenuButtonStyles
            onClick={() => setOpenMenu(prev=>!prev)}
            >
                <img src={icons['menu1']} alt=""></img>
                
</MenuButtonStyles>
             <img height={20} src={icons.logo}></img>
        </div>
 
        <AuthButtonsContainer>
            <IconButton
            onClick={() => setOpenLogInModal(true)}
            icon={<ColorImage color='burgundy' height={32} width={32} src={icons['users']} alt=""></ColorImage>}
            text={t("inregistrare")}
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
                <LogInModal/>
            </Modal>
            <Modal
            visible={openSignUpModal}
            setVisible={setOpenSignUpModal}
            >
                <SignUpModal/>
            </Modal>
    </ContainerStyles>
  )
}

export default PhoneNav

