import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

//Las pruebas deben ser faciles de leer, faciles de entender
describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1
        const hero = getHeroeById( id )
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'})
    })

    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 100
        const hero = getHeroeById( id )

        expect( hero ).toBeFalsy()
    })

    // homework
    // getHeroesByOwner
    // Debe de retornar un arreglo con los héroes de DC
    // length === 3, porque solo hay 3 heroes de DC
    // toEqual al arreglo filtrado
    test('getHeroesByOwner debe de retornar un areglo de tamaño 3 con solo heroes de DC', () => { 
        const owner = 'DC'
        const heroesDC = getHeroesByOwner( owner )
        expect( heroesDC.length ).toBe( 3 );
        expect( heroesDC ).toEqual([ 
            { id: 1,name: 'Batman', owner: 'DC' },
            { id: 3,name: 'Superman', owner: 'DC' },
            { id: 4,name: 'Flash', owner: 'DC' }
        ]);
        expect( heroesDC ).toEqual( heroesDC.filter( (heroe) => heroe))
    })
    
    // debe de retornar un arreglo con los héroes de Marvel
    // length === 2, porque solo hay 2 heroes de DC
    test('getHeroesByOwner debe de retornar un areglo de tamaño 2 con solo heroes de Marvel', () => { 
        const owner = 'Marvel'
        const herosMarvel = getHeroesByOwner( owner )

        expect( herosMarvel.length ).toBe( 2 );
        expect( herosMarvel ).toEqual( heroes.filter( ( hero ) => hero.owner === owner))
    })
    
})