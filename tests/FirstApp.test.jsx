import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => { 

    // test('Debe de hacer math con el snapshot', () => { 
    //     const title = 'Hi! Joe'
    //     const { container } = render( <FirstApp title={ title }/>)

    //     expect( container ).toMatchSnapshot() // el snapshot - es como si tomara una foto de mi prueba, lo que esta renderizando, y lo deja almacenado
    // })

    test('Debe mostrar el titulo en un h1', () => { 
        const title = 'Hola Joe'
        const { container, getByText, getByTestId } = render( <FirstApp title={title}/>)
        expect( getByText(title) ).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain( title )

        expect( getByTestId('test-title').innerHTML).toContain(title)
    })

    test('Debe de mostrar el subtitulo enviado por props', () => { 
        const title = "Hola Joe"
        const subtitle = "Soy un subtitulo"
        const { getAllByText } = render(
            <FirstApp 
                title = { title }
                subtitle= { subtitle }
            />
        )
        expect( getAllByText(subtitle).length).toBe(2)
    })

})