import { useContext } from 'react'
import CotizadorContext from '../context/CotizadorProvider'

const useCotizador = () => {
    return useContext(CotizadorContext)
}

export default useCotizador

//* lo usamos importando primero donde lo vayamos a usar (lo usamos por que sino donde lo vayamos a usar tenemos que usar useContext que context es mas la importacion etc etc es tedioso mejor crear un hook):

//* import useCotizador from 'ruta del hook'

//* const { datos que vayamos a sacar del Provider } = useCotizador()