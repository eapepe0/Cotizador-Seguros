import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

export default function Formulario() {
    const { handleChangeDatos, datos, error, setError, CotizarSeguro } = useCotizador()
    //* extraemos del hook useCotizador el cual nos provee datos del Provider los estados y funciones


    //*  funcion que se dispara cuando hacemos submit en el form
    const handleSubmit = e => {
        e.preventDefault() //* prevenimos que se actualize la pagina

        if (Object.values(datos).includes('')) { //* se fija que en el objeto no haya ninguna string vacia
            setError('Todos los campos son obligatorios') //*  ponemos el estado error con un mensaje
            return //* salimos
        }
        setError('') //* si en datos esta todo lleno , ponemos error en vacio 
        //* TODO COTIZAR
        CotizarSeguro(); //* disparamos la funcion

    }

    return (
        <>
            {error ? <Error /> : null}
            <form onSubmit={handleSubmit}>
                {/* MARCA */}
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-black-400 uppercase">Marca</label>
                    <select name="marca" id="" className="w-full p-3 border border-gray-200" onChange={e => handleChangeDatos(e)} value={datos.marca}>
                        <option value="">-- Selecciona Marca--</option>
                        {MARCAS.map(marca => (
                            <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                        ))}
                    </select>
                </div>
                {/* AÑO */}
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold ext-black-400 uppercase">Año</label>
                    <select name="year" id="" className="w-full p-3 border border-gray-200" onChange={e => handleChangeDatos(e)} value={datos.year}>
                        <option value="">-- Selecciona el año --</option>
                        {YEARS.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                {/* PLANES */}
                <div className="my-5">
                    <label className="block mb-3 font-bold text-black-400 uppercase">
                        Elige un plan
                    </label>
                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>
                                <input type="radio" name="plan" value={plan.id} onChange={e => handleChangeDatos(e)} />
                            </Fragment>
                        ))}

                    </div>
                </div>
                <input type="submit" value="Cotizar" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" />
            </form>
        </>

    )
}

//* linea 27 : si Error tiene algo (mensaje de error) , mostramos el componente <Error/> de lo contrario no mostramos nada 

