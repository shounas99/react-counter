//shortcut - rafc 
const newMessage = {
    title: 'Hi',
    message: 'Hola mundo',
}
const getResult = () => {
    return 1 + 1
}


export const FirstApp = ({ title = 'Title', subtitle2 = "second" }) => { /*can I either require a prop to be passed or provide a default value*/
    // we could add constants, variables, or functions within functional components. However, when 
    // a component re-renders, its memory space is re-initialized. Therefore, we need to avoid 
    // writing them directly inside the component's body, even if we need to handle button clicks,
    // execute functions, or manage state changes, all of which may require those constants, variables, or functions.



  return (
    <>
    <h1>{ title }</h1>
    <h1>{ subtitle2 }</h1>
    <h1> { getResult() }</h1>
        <code>{ JSON.stringify(newMessage)  }</code>
        <p>Im subtitle</p>
    </>
  )
}
