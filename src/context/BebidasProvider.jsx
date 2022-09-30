import { createContext, useState, useEffect } from "react";
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

    const [bebidas, setBebidas] = useState([])
    const [bebida, setBebida] = useState({})
    const [modal, setModal] = useState(false)

    
    const getBebidas = async datos => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/filter.php?c=${datos.categoria}&i=${datos.nombre}`
            console.log(url)
            const {data} = await axios(url)
            console.log(data.drinks)
            setBebidas(data.drinks)
            
        } catch (error) {
            console.log(error)
        }
    }

    const getBebida = async id => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/lookup.php?i=${id}`
            console.log(url)
            const {data} = await axios(url)
            console.log(data.drinks)
            setBebida(data.drinks[0])
            
        } catch (error) {
            console.log(error)
        }
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <BebidasContext.Provider value={{
            bebidas,
            getBebidas,
            modal,
            toggleModal,
            getBebida,
            bebida
        }}>
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext