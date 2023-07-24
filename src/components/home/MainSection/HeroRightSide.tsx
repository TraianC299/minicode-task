import styled from "styled-components"
import { useContent } from "../../../contexts/ContentProvider.context"
import ColorImage from "../../system/utils/ColorImage"
import MEDIAQUERIES from "../../../constants/MEDIAQUERIES"
import { useInsurance } from "../../../contexts/InsuranceProvider.context"


const VerticalStepperContainerStyles = styled.div`
display: flex;
padding: 35px 0px;
align-items: center;
justify-content: space-between;
gap: 35px;
width: 100px;
height: 100%;
position: relative;
border-left: 1px solid var(--gray, #E7E5E4);
flex-direction: column;
@media ${MEDIAQUERIES.MOBILE}{
    display: none;
}
`


const PointStyles = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid;
background: var(--white);
min-width: 35px;
border-color: var(--black);
>img{
    height: 20px;
    width: 20px;
}
&.done{
    border-color: var(--success, #00834B);
    >.done{
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: var(--success, #00834B);
    }
}

&.current{
    border:none;
    background: var(--success, #00834B);
}


`

const LineStyles = styled.div`
flex: 1;
width: 2px;
background: var(--gray);
`


const VerticalStepper = () => {
    const {currentInstance, step} = useInsurance()
    const {icons} = useContent()
    const stepsNr = currentInstance?.steps.length || 0

    return (
        <VerticalStepperContainerStyles>
      

        {new Array(stepsNr).fill(0).map((_, index) => {
            return (
                <>
                <PointStyles className={index < step ? "done" : index === step ? "current" : ""}>
                    {index < step ? <span className="done"></span> : index === step ? <ColorImage color="white" src={icons.check} alt=""></ColorImage> : index}
                </PointStyles>
                {index < stepsNr - 1 && <LineStyles></LineStyles>}
                </>
            )
        }
        )}
    </VerticalStepperContainerStyles>
  )
}

export default VerticalStepper