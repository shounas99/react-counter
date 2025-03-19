import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-prmesas', () => { 
    
    test('getHeroeByIdAsync debe de retornar un heroes', (done) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                // expect( true ).toBe( false )
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done(); // instruccion que llama jest - indicandole que ya termine, lo mando llamar hasta que termine todo el proceso
            })
    })

    test('getHeroeByIdAsync debe obtener un error si heroe no existe', ( done ) => {
        const id = 100;

        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toBeFalsy();
                done()
            })
            .catch( error => {
                // console.log(error);
                expect(error).toBe(`No se pudo encontrar el héroe`)
                done(); // instruccion que llama jest - indicandole que ya termine, lo mando llamar hasta que termine todo el proceso
            })
    })

 })