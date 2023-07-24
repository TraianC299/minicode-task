import React, {ReactNode, useContext, useState} from 'react'
import Snackbar from '../components/system/data-display/Snackbar'
import { useTranslation } from 'react-i18next'
import SNACKTYPES from '../constants/SNACKTYPES.constant'


interface SnackContextProps {
    loading: string | boolean,
    setLoading: (string:string | boolean)=>void,
    success: string,
    setSuccess: (string:string)=>void,
    error: string,
    setError: (string:string)=>void
}

const SnackContext = React.createContext<SnackContextProps | null>(null)


export const useSnack=()=>{
        return useContext(SnackContext) as SnackContextProps
    }



export const SnackProvider = ({children}: {children:ReactNode}) => {
    const {t} = useTranslation("common")
    const [loading, setLoading] = useState<string | boolean>("")
    const [success, setSuccess] = useState<string>("")
    const [error, setError] = useState<string>("")



    let value={
        loading, setLoading, success, setSuccess, error, setError
    }

    

    return (
        <SnackContext.Provider value={value}>
            {children}
    <Snackbar 

    message={loading ? t("loading"):''} 
    setMessage={setLoading} 
 ></Snackbar>

             <Snackbar 
                message={success} 
                setMessage={setSuccess} 
                type={SNACKTYPES.SUCCESS}
                autoHideDuration={3000}></Snackbar>
                
    <Snackbar 
    message={error} 
    setMessage={setError} 
    type={SNACKTYPES.ERROR}
    autoHideDuration={3000}
    ></Snackbar>
            
        </SnackContext.Provider>
    )
}