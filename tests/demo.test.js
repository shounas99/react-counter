//Could add with the extension, just write: desc
describe("Pruebas en <DemoComponent/>", () => {

  test("This test can not fail", () => {
    //1. Inicializacion
    const message1 = "Hola Mundo";
    //2. Estimulo
    const message2 = message1.trim();

    //3. Observar el comportamiento... esperando
    expect(message1).toBe(message2);
  })

});
