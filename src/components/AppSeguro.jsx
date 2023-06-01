import useCotizador from "../hooks/useCotizador"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"

export default function AppSeguro() {
    const { cargando } = useCotizador()
    //* importamos un state del hook useCotizador el cual no provee de datos del Provider , el cual nos avisa si terminamos de procesar la consulta

    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black"> Cotizador de Seguros de Auto</h1>
            </header>
            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto p-10 shadow rounded-lg">
                <Formulario />
                {cargando ? <Spinner /> : <Resultado />}

            </main>

        </>
    )
}

//* linea 17 :   si cargando es true , mostramos el Spinner , si es false el componente Resultado