import ApiService from "./ApiService.service";

const AuthService = {
    // login: async (email, password) => {
    //     const response = await axios.post('/auth/login', {
    //         email,
    //         password
    //     });
    //     return response.data;
    // }
    login: async (email:string, password:string) => {
        try{
            const response = await ApiService.post("/auth/login", {
                email,
                password
            });
            return response;
        } catch (error) {
            console.error(error);
            return error
        }

    },
    register: async (email:string, password:string) => {
        try{
            const response = await ApiService.post("/auth/register", {
                email,
                password
            });
            return response;
        } catch (error) {
            console.error(error);
            return error
        }
    }
};

export default AuthService;
