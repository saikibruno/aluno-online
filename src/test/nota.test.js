const Nota = require('../models/nota')
    
describe('Testando mediaCA()', () => {
    test('Teste, de SS', () => {
        expect(new Nota("ADS",9,9,null).mediaCA()).toBe("SS")
    })
    test('Teste, de MS', () => {
        expect(new Nota("ADS",9,7,null).mediaCA()).toBe("MS")
     })
     test('Teste, de MM', () => {
        expect(new Nota("ADS",5,5,null).mediaCA()).toBe("MM")
     })
     test('Teste, de MI', () => {
        expect(new Nota("ADS",5,4,null).mediaCA()).toBe("MI")
     })
     test('Teste, de II', () => {
        expect(new Nota("ADS",1,2,null).mediaCA()).toBe("II")
     })
     test('Teste, de SR', () => {
        expect(new Nota("ADS",0,0,null).mediaCA()).toBe("SR")
     })
    
})