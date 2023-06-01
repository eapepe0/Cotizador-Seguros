export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
    //* funcion que nos devuelve la diferencia del año actual y el año que pasamos por argumento
}

export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case "1":
            incremento = 1.30;
            break;
        case "2":
            incremento = 1.15;
            break
        case "3":
            incremento = 1.05;
            break;

        default:
            break;
    }

    return incremento

    //* nos devuelve un porcentaje depende de la marca que es , un 30% un 15% y un 5%
}

export function calcularPlan(plan) {
    return plan === "1" ? 1.2 : 1.5; //* si el plan es 1 nos devuelve un 20% o un 50%
}

export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('en-US', {
        style: "currency",
        currency: "USD",
    })
    //*  nos devuelve la moneda con el formato $ USD y con 2 decimales
}