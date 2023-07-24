import BASE_URL from "../constants/BASE_URL";

const ApiService = {
    get: async(url: string, params: any) => {
        return fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    },
    post: async(url: string, params: any) => {
        return fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    }

};
export default ApiService;