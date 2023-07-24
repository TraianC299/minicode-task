import { HTMLAttributes } from "react"
import FILTERS from "../../../constants/FILTERS.constant"

const colorFilters = {
    burgundy: FILTERS.BURGUNDY,
    white: FILTERS.WHITE,
    orange: FILTERS.ORANGE,
    gray: FILTERS.GRAY,
    black: FILTERS.BLACK,
}

interface ColorImageProps extends HTMLAttributes<HTMLImageElement> {
    color?: keyof typeof colorFilters,
    [x: string]: any
}
const ColorImage = ({ color, ...props }: ColorImageProps) => {

    return (
        <img 
        {...props}
        style={{
            filter: color?colorFilters[color] : 'none'
        }}
        ></img>
    )
}

export default ColorImage