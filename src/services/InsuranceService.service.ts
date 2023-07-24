import ApiService from "./ApiService.service"

const InsuranceService = {
    createInsurance: async (data:any) => {
        return await ApiService.post("/forms", data)
    },

}


export default InsuranceService