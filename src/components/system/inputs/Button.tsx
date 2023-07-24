import styled from "styled-components";
import COLORS from "../../../constants/COLORS.constant";

const ButtonStyles = styled.button`
display: flex;
height: 45px;
padding: 0px 30px;
justify-content: center;
align-items: center;
gap: 10px;
background: ${COLORS.BURGUNDY};
border-radius: 7px;
border:none;
color: ${COLORS.WHITE};
font-weight: 600;
cursor: pointer;
&:hover{
    background: ${COLORS.BURGUNDY_HOVER};
}
&.small{
height: 35px;
}
&.ghost{
    background: ${COLORS.WHITE};
    border: 1px solid ${COLORS.BURGUNDY};
    color: ${COLORS.BLACK};

}
&.text{
    background: transparent;
    color: ${COLORS.BURGUNDY};
}
>img{
        width: 20px;
        height: 20px;
    }
`
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}


const Button = ({children, ...props}:ButtonProps) => {
  return (
    <ButtonStyles {...props} className={
        `${props.className}`
    }>{children}</ButtonStyles>
  )
}

export default Button