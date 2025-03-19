import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {
        // cuando tenga objetos, estan a puntando a valores de memoria diferente, los objetos se comparan en base a su ubicacion en memoria
        const testUser = {
            uid: "ABC123",
            username: "The_jonas1502",
        };
        // const testUser = tUser();
        const user = getUser();
        expect( testUser ).toEqual( user ); // por eso usar toEqual en lugar de toBe
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const name = 'Fernando'
        // const expectUser = {
        //     uid: "ABC567",
        //     username: name,
        // }
        // expect( expectUser ).toStrictEqual( nameUser )
        const nameUser = getUsuarioActivo(name)
        expect( nameUser ).toStrictEqual({
            uid: "ABC567",
            username: name,
        })
    })
})
