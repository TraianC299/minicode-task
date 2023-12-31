import styled from "styled-components";
import { useContent } from "../../../contexts/ContentProvider.context";
import { useTranslation } from "react-i18next";



const ContainerStyles = styled.div`
display: flex;
align-items: center;
gap: 20px;
align-self: stretch;
>img{
  width: 36px;
height: 36px;
}
`

interface FinalPriceProps {
    finalPrice: number
}
const FinalPrice = ({finalPrice}:FinalPriceProps) => {
    const {images} = useContent()
  const {t}=  useTranslation()
  return (
    <ContainerStyles>
        <div className="flex justify-center items-center">
            <p className="h2">{finalPrice}</p>
            <p className="h5">$</p>
        </div>
        <p className="h2">+</p>
        <img src={images["24h"]} alt="arrow right"/>
        <p className="h5">{t('livrare_gratuita')}</p>


    </ContainerStyles>
  )
}

export default FinalPrice