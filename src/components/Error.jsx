import useCotizador from "../hooks/useCotizador"

export default function Error() {
    const { error } = useCotizador()
    //* Extraemos del hook useCotizador , el cual nos provee de datos del Provider, el estado error, el cual se llena con un mensaje de error

    return (
        <div className="border text-center border-red-400 bg-rose-100 text-red-700 py-3">{error}</div>
    )
}