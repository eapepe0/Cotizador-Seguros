export const MARCAS = [
    {
        id: 1,
        nombre: "Europeo"
    },
    {
        id: 2,
        nombre: "Americano"
    },
    {
        id: 3,
        nombre: "Asiatico"
    },
]
//* constante de MARCAS

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index);
//* Nos genera un array de 20 valores entre el valor actual , y 20 atras

export const PLANES = [
    {
        id: 1,
        nombre: "Basico",
    },
    {
        id: 2,
        nombre: "Completo",
    }
]