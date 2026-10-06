import { calculadora } from '/app/calculadora.js';

describe ('Test de la funcion calculadora',()=> {

    test('Suma de 1 y 2', ()=> {
        expect (calculadora(1,2, 'suma')).toBe(3);
    });

    test('resta de 3 y 2', ()=> {
        expect (calculadora(3, 2, 'resta')).toBe(1);
    });
    test('Division de 10 y 2', ()=> {
        expect (calculadora(10, 2, 'division')).toBe(5);
    });

    test('operacion no valida', ()=> {
        expect (calculadora(3, 2, 'multiplicacion')).toBe('operacion no valida');
    })

    });
