import { useCallback, useMemo, useRef } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador"



export default function Resultado() {

    const { resultado, datos } = useCotizador() //* extraemos del hook , los valors provistos por el Provider
    const { marca, plan, year } = datos;    //* extraemos marca  , plan y año
    const yearRef = useRef(year) //* cuando estamos en la funcion resultado useRef guarda el valor ,y el componente no se vuelve a renderizar , si el evento onChange actualiza el estado , 
    //* no lo cambia , por que no lo renderiza , recien lo hace cuando se vuelve a disparar la funcion 
    //* para acceder a el valor , debemos usar yearRef.current

    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado]) //* entrega un array con un objeto dentro con el [nombre marca] entrega el objeto directamente {}

    const [planTipo] = useMemo(() => PLANES.filter(p => p.id === Number(plan)), [resultado])
    //* use memo es parecido a useCallback pero tiene que tener un funcion arrow

    if (resultado === 0) return null //* si el resultado es 0 , cuando esta inicializado no mostramos nada

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold">Marca : </span>
                {nombreMarca.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan : </span>
                {planTipo.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año del Automovil : </span>
                {yearRef.current}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotizacion : </span>
                {resultado}
            </p>

        </div>
    )
}


//* useCallback , cuando cambia el resultado , hace un re- render de las marcas
//* cuando cambiamos algun select (marca ,año , o el plan ) con el resultado en pantalla , el cambio del state , genera un re render , se muestra el cambio en el resultado