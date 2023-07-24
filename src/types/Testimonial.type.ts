import DynamicTranslation from "./DynamicTranslation.type"

interface TestimonialType {
    name: string,
    id: string,
    content: DynamicTranslation,
    image: string,
    rating: number
}

export default TestimonialType