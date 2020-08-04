import '@testing-library/jest-dom';

import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar Hola Iván', () => {

        const nombre = 'Iván';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    });

    // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre

    test('debe retornar Hola Carlos sin no hay argumento Nombre', () => {
        
        const nombre = undefined;

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola Carlos');
    });
});