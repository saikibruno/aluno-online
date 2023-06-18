describe('Testando Novo requerimento', () => {
    const novoRequerimento = (disciplina, prova, argumentacao) => {
        cy.get('#inputDisciplina').select(disciplina)
        cy.get('#inputProva').select(prova)
        cy.get('#inputArgumentacao').type(argumentacao)
        cy.get('.btn-danger').click()
    }

    var disciplinaLista = ["ADS032 - Construção de Frontend", "ADS030 - Manutenção de Software e DevOps", "ADS038 - Governança de TI", "ADS040 - Business Intelligence e Data Warehousing"]
    var provaLista = ["A1", "A2", "A3"]

    it('Acessando o site e fazendo login e criando novo requerimento.', () => {
        cy.visit('http://127.0.0.1:3000/login')
        cy.get('#inputMatricula').click()
        cy.get('#inputMatricula').type('2023100')
        cy.get('#inputSenha').click()
        cy.get('#inputSenha').type('senha123')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > .nav-link').click()
        cy.get('.btn').click()

        for (let index1 = 0; index1 < disciplinaLista.length; index1++) {
            for (let index2 = 0; index2 < provaLista.length; index2++) {
                novoRequerimento(disciplinaLista[index1], provaLista[index2], "Realização da prova " + provaLista[index2] + " " + disciplinaLista[index1])
                cy.get('.btn').click()
            }
        }
        cy.get('.btn-light').click()        

    })

})