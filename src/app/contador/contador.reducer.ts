import * as actionContador from "./contador.actions";

export function contadorReducer(state: number = 10, action: any): number {
    switch (action.type) {
        case actionContador.INCREMENTAR:
            return state + 1;
        case actionContador.DECREMENTAR:
            return state - 1;
        case actionContador.MULTIPLICAR:
            return state * action.payload;
        case actionContador.DIVIDIR:
            return state / action.payload;
        case actionContador.RESET:
            return 0;
        default:
            return state;
    }
}