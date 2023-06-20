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
        cy.get('#inputMatricula').should('have.value', '2023100')
        cy.get('#inputSenha').click()
        cy.get('#inputSenha').type('senha123')

        cy.contains('Entrar')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > .nav-link').should('have.attr', 'href').and('equal', '/requerimentos')
        cy.get(':nth-child(5) > .nav-link').click()
        cy.get('.btn').click()

        cy.get('#inputDisciplina > option').should(($options) => {
            expect($options).to.have.length(5)
            expect($options.eq(0)).to.contain('Selecione uma disciplina')
            expect($options.eq(1)).to.contain('ADS030 - Manutenção de Software e DevOps')
            expect($options.eq(2)).to.contain('ADS032 - Construção de Frontend')
            expect($options.eq(3)).to.contain('ADS038 - Governança de TI')
            expect($options.eq(4)).to.contain('ADS040 - Business Intelligence e Data Warehousing')
        })

        cy.get('#inputProva > option').should(($options) => {
            expect($options).to.have.length(4)
            expect($options.eq(0)).to.contain('Selecione uma prova')
            expect($options.eq(1)).to.contain('A1')
            expect($options.eq(2)).to.contain('A2')
            expect($options.eq(3)).to.contain('A3')            
        })

        cy.get('#inputArgumentacao').type('abacsamkm')
        cy.get('#inputArgumentacao').should('have.value', 'abacsamkm')
        
        // for (let index1 = 0; index1 < disciplinaLista.length; index1++) {
        //     for (let index2 = 0; index2 < provaLista.length; index2++) {
        //         novoRequerimento(disciplinaLista[index1], provaLista[index2], "Realização da prova " + provaLista[index2] + " " + disciplinaLista[index1])
        //         cy.get('.btn').click()
        //     }
        // }
        // cy.get('.btn-light').click()        

    })

})