describe('Testando calculadora',()=>{
    const novoRequerimento = (disciplina,prova,argumentacao) =>{
        cy.get('#inputDisciplina').select(disciplina)
        cy.get('#inputProva').select(prova)
        cy.get('#inputArgumentacao').type(argumentacao)
        cy.get('.btn-danger').click()
    }
    it('Soma de dois números',()=>{
        cy.visit('http://127.0.0.1:3000/login')        
        cy.get('#inputMatricula').click()
        cy.get('#inputMatricula').type('2023100')
        cy.get('#inputSenha').click()
        cy.get('#inputSenha').type('senha123')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > .nav-link').click()
        cy.get('.btn').click()

        novoRequerimento("ADS032 - Construção de Frontend","A1","Realização da prova A1 ADS032 - Construção de Frontend ")
        cy.get('.btn').click()
        novoRequerimento("ADS032 - Construção de Frontend","A2","Realização da prova A2 ADS032 - Construção de Frontend ")
        cy.get('.btn').click()
        novoRequerimento("ADS032 - Construção de Frontend","A3","Realização da prova A3 ADS032 - Construção de Frontend ")
        cy.get('.btn').click()

        novoRequerimento("ADS030 - Manutenção de Software e DevOps","A1","Realização da prova A1 ADS030 - Manutenção de Software e DevOps ")
        cy.get('.btn').click()
        novoRequerimento("ADS030 - Manutenção de Software e DevOps","A2","Realização da prova A2 ADS030 - Manutenção de Software e DevOps ")
        cy.get('.btn').click()
        novoRequerimento("ADS030 - Manutenção de Software e DevOps","A3","Realização da prova A3 ADS030 - Manutenção de Software e DevOps ")
        cy.get('.btn').click()    
        
        novoRequerimento("ADS038 - Governança de TI","A1","Realização da prova A1ADS038 - Governança de TI ")
        cy.get('.btn').click()
        novoRequerimento("ADS038 - Governança de TI","A2","Realização da prova A2 ADS038 - Governança de TI ")
        cy.get('.btn').click()
        novoRequerimento("ADS038 - Governança de TI","A3","Realização da prova A3 ADS038 - Governança de TI ")
        cy.get('.btn').click()

        novoRequerimento("ADS040 - Business Intelligence e Data Warehousing","A1","Realização da prova A1 ADS040 - Business Intelligence e Data Warehousing ")
        cy.get('.btn').click()
        novoRequerimento("ADS040 - Business Intelligence e Data Warehousing","A2","Realização da prova A2ADS040 - Business Intelligence e Data Warehousing ")
        cy.get('.btn').click()
        novoRequerimento("ADS040 - Business Intelligence e Data Warehousing","A3","Realização da prova A3 ADS040 - Business Intelligence e Data Warehousing ")
             
        
    })
    
})