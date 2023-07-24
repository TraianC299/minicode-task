import CarteaVerdeFormType from "./forms/CarteaVerdeForm.type"
import CascoFormType from "./forms/CascoForm.type"

interface InsuranceType  {
    id: string,
    title: string,
    active: boolean,
    steps: string[]
    form: CascoFormType | CarteaVerdeFormType | RCAFormType,
    validation_rules:{[key:string]:'empty'|'email'|'phone'|'number'|'date'|'checkbox'|'radio'|'multiple'|'file'}
    info: {
        title: string,
        content: string,
        id: string
    }[]
}
export default InsuranceType