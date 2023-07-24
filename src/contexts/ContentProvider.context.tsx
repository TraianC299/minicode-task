import React, { ReactNode, useContext, useEffect, useState} from 'react'
import CardType from '../types/Card.type'
import TestimonialType from '../types/Testimonial.type'
import InsuranceType from '../types/Insurance.type'
import ConsultationSectionType from '../types/ConsultationSection.type'
import Loading from '../components/system/utils/Loading'


const initialState = {
    icons: {},
    images: {},
    cards: [],
    insurance: [],
    testimonials: [],
    consultation: {
        title: '',
        subtitle: '',
        button: ''
    }
}


interface ContentState {
    icons: {[x:string]:string}
    images: {[x:string]:string}
    cards: CardType[]
    insurance: InsuranceType[],
    testimonials: TestimonialType[]
    consultation: ConsultationSectionType
}

interface ContentProviderProps {
    children: ReactNode
}



const ContentContext = React.createContext<ContentState>(initialState)
export const useContent=():ContentState=>{
        return useContext(ContentContext)
    }



export const ContentProvider = ({children}:ContentProviderProps) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [icons, setIcons] = useState<{[x:string]:string}>({})
    const [images, setImages] = useState<{[x:string]:string}>({})
    const [cards, setCards] = useState<CardType[]>([])
    const [insurance, setInsurance] = useState<InsuranceType[]>([])
    const [testimonials, setTestimonials] = useState<TestimonialType[]>([])
    const [consultation, setConsultation] = useState<ConsultationSectionType>({} as ConsultationSectionType)

    



    useEffect(() => {
        setLoading(true)
        const iconsRes = fetch("http://localhost:3030/icons")
        const cardsRes = fetch("http://localhost:3030/cards")
        const imagesRes = fetch("http://localhost:3030/images")
        const insuranceRes = fetch("http://localhost:3030/insurance")
        const testimonialsRes = fetch("http://localhost:3030/testimonials")
        const consultationRes = fetch("http://localhost:3030/consultation_section")

        Promise.all([iconsRes, cardsRes, imagesRes, insuranceRes, testimonialsRes,consultationRes])
            .then((responses) => Promise.all(responses.map((res) => res.json())))
            .then((data) => {
                setIcons(data[0])
                setCards(data[1])
                setImages(data[2])
                setInsurance(data[3])
                setTestimonials(data[4])
                setConsultation(data[5])
                setLoading(false)
            })
    }, [])


    
    let value={
        icons,
        cards,
        images,
        insurance,
        testimonials,
        consultation
    }


    







    
    return (
        <ContentContext.Provider value={value}>
            {loading?<Loading/>:children}
        </ContentContext.Provider>
    )
}

export default ContentProvider