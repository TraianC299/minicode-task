import styled from 'styled-components'


const ModalStyles = styled.div`
display: flex;
width: 100%;
height: 100%;
position: fixed;
top: 0px;
left: 0px;
justify-content: center;
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

interface ModalProps{
  children: React.ReactNode,
  visible: boolean,
  setVisible: (visible: boolean) => void
}

const Modal = ({children, visible, setVisible}:ModalProps) => {
  return (
    
      <ModalStyles
      onClick={(e) => {
        if(e.target === e.currentTarget){
          setVisible(false)
        }
      } }
      className={`transition ${visible ? 'visible' : ''}`}
      >{children}</ModalStyles>
  )
}

export default Modal