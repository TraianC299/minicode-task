import ColorImage from '../utils/ColorImage'
import { useContent } from '../../../contexts/ContentProvider.context'
import styled from 'styled-components'


const ColorImageStyles = styled(ColorImage)`
height: 20px;
width: 20px;`
const MoreInfo = () => {
    const {icons} = useContent()
  return (
    <ColorImageStyles color='burgundy' src={icons.question}></ColorImageStyles>
  )
}

export default MoreInfo