const Nota = require('../models/nota')
    
const testeNota = (materia, a1,a2,a3, classificacao) => {
   test('Teste, de '+classificacao, () => {
      expect(new Nota(materia,a1,a2,a3).mediaCA()).toBe(classificacao)
  })
}

describe('Testando mediaCA()', () => {
   testeNota("ADS",9,9,null,"SS")
   testeNota("ADS",9,7,null,"MS")
   testeNota("ADS",5,5,null,"MM")   
   testeNota("ADS",5,4,9,"MS")
   testeNota("ADS",5,4,null,"MI")
   testeNota("ADS",1,2,null,"II")
   testeNota("ADS",0,0,null,"SR")   
    
})