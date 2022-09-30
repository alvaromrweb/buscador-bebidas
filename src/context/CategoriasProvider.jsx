import { createContext, useState, useEffect } from "react";
import axios from 'axios'

const CategoriasContext = createContext()

const CategoriasProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    
    
    useEffect(() => {
        const getCategorias = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/list.php?c=list`
                console.log(url)
                const {data} = await axios(url)
                setCategorias(data.drinks)
                
            } catch (error) {
                console.log(error)
            }
        }
        getCategorias()
    }, [])

    return (
        <CategoriasContext.Provider value={{
            categorias
        }}>
            {children}
        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvider
}

export default CategoriasContext