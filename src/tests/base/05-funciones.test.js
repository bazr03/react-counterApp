import '@testing-library/jest-dom';

import {getUser, getUsuarioActivo} from '../../base/05-funciones';


describe('Pruebas en 05 funciones', () => {

    test('Debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    });

    test('debe retorna un objeto', () => {

        const name = 'Ivan';

        const activeUserDemo = {
            uid: 'ABC567',
            username: name
        }

        const activeUser = getUsuarioActivo(name);

        expect(activeUser).toEqual(activeUserDemo);

    });
});