import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => { 
    const title = "Hola Joe"
    const subtitle = "Soy un subtitulo"

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render(
            <FirstApp 
                title = { title }
            />
        )
        expect( container ).toMatchSnapshot()
    })

    test('Debe de mostrar el mensaje "Hola Joe"', () => { 
        render( <FirstApp  title={ title }/>)
        expect( screen.getByText( title )).toBeTruthy() // screen - limpiezas automaticas
        screen.debug()
    })
    
    test('Debe mostrar el titulo en un h1', () => { 
        render( <FirstApp title={ title }/>)
        expect( screen.getByRole("heading", { level: 1 }).innerHTML).toContain( title );
    })
    
    
    test('Debe de mostrar el subtitulo enviado por props', () => { 
        render(
            <FirstApp 
            title={ title }
            subtitle={ subtitle }
            />
        )
        expect( screen.getAllByText( subtitle ).length).toBe(2)
    })

})