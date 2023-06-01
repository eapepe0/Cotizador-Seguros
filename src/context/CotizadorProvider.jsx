import { useState, createContext } from 'react'
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from '../helpers'

const CotizadorContext = createContext()

// eslint-disable-next-line react/prop-types
const CotizadorProvider = ({ children }) => {
    const [error, setError] = useState('') //* estado donde guardamos el error
    const [resultado, setResultado] = useState(0) //* estado donde guardamos el resultado
    const [cargando, setCargando] = useState(false) //* estado que nos dice si estamos cargando

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    //* creamos en datos un objeto con la marca , año y plan vacios

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    //* seteamos datos con un objeto , donde guardamos los datos ya en el estado y le agregamos el nombre (marca | year | plan) y el valor 



    const CotizarSeguro = () => {
        console.log("cotizando")
        //* Una base
        let resultado = 2000;

        //* Obtener Diferencia de años
        let diferencia = obtenerDiferenciaYear(datos.year)

        //* Restar un 3% por cada año
        resultado -= ((diferencia * 3) * resultado / 100)

        //* Europeo 30%
        //* Americano 15%
        //* Asiatico 5%

        resultado *= calcularMarca(datos.marca)
        //* Basico 20%
        //* Completo 50%
        resultado *= calcularPlan(datos.plan)

        resultado = formatearDinero(resultado)
        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);

    }

    return (
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                CotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext