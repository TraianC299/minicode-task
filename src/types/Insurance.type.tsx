interface InsuranceType  {
    id: string,
    title: string,
    active: boolean,
    info: {
        title: string,
        content: string,
        id: string
    }[]
}
export default InsuranceType