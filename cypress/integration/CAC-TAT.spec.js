// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
    // AULA 1

describe('Central de Atendimento ao Cliente TAT', function() {
    const form = {}
    form.nome = ("Felipe")
    form.sobrenome = ("Lau")
    form.email = ("felipelaucs@gmail.com")
    form.desc = ("Nada não!")

    beforeEach(() => {
        cy.visit('./src/index.html')
    });
        // AULA 2

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
        // AULA 3

    it('preencher os campos e validar o envio', function() {
        cy.get('#firstName').type("Felipe")
        cy.get('#lastName').type("Lau")
        cy.get('#email').type("felipelaucs@gmail.com")
        cy.get('#open-text-area').type("Nada não!")
        cy.get('[type="submit"]').click()
        cy.get('.success').should('be.visible')
    });
    it('Digitar um testo longo e alterar o time', function() {
        cy.get('#firstName').type("Felipe lau chaves da silva" , {delay: 0})
    });
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type("Felipe")
        cy.get('#lastName').type("Lau")
        cy.get('#email').type("felipelaucsgmail.com")
        cy.get('#open-text-area').type("Nada não!")
        cy.get('[type="submit"]').click()
        cy.get('.error').should('be.visible')
    });
    it('Validando que o campo telefone aceita apenas numeros', function() {
        cy.get('#firstName').type("Felipe")
        cy.get('#lastName').type("Lau")
        cy.get('#email').type("felipelauc@sgmail.com")
        cy.get('#open-text-area').type("Nada não!")
        cy.get('#phone').type("Felipe").should('have.value', '');
        cy.get('[type="submit"]').click()

        cy.get('.success').should('be.visible')    });
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type("Felipe")
        cy.get('#lastName').type("Lau")
        cy.get('#email').type("felipelaucs@gmail.com")
        cy.get('#open-text-area').type("Nada não!")
        cy.get('#phone-checkbox').check()
        cy.get('[type="submit"]').click()
        cy.get('.error').should('be.visible')
        });
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName').type("Felipe").should('have.value', 'Felipe').clear().should('have.value', '');
        cy.get('#lastName').type("Lau").should('have.value', 'Lau').clear().should('have.value', '');
        cy.get('#email').type("felipelaucs@gmail.com").should('have.value', 'felipelaucs@gmail.com').clear().should('have.value', '');
        cy.get('#phone').type("99999999").should('have.value', '99999999').clear().should('have.value', '');
        cy.get('#open-text-area').type("Nada não!");
    });
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('[type="submit"]').click()
        cy.get('.error').should('be.visible')
        });
    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit(form)
    });
    it(' identificamos o botão para posterior clique, onde em vez de identificarmos tal elemento', function() {
        cy.contains('Enviar').click()
        cy.get('.error').should('be.visible')
        });

        // AULA 4
    it('seleciona um produto (YouTube) por seu texto', () => {
        cy.get('select').select('Youtube').should('have.value', 'youtube')
        
    });
    it('seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('select').select('mentoria').should('have.value', 'mentoria')
        
    });
    it('seleciona um produto (Blog) por seu índice', () => {
        cy.get('select').select(1).should('have.value', 'blog')
        
    });

        // AULA 5
    
    it('marca o tipo de atendimento "Feedback"', () => {
        cy.get('[value = "feedback"]').check().should('have.value', 'feedback')
    });
    it('marca cada tipo de atendimento"', () => {
        cy.get('[value = "feedback"]').check().should('be.checked')
        cy.get('[value = "elogio"]').check().should('be.checked')
        cy.get('[value = "ajuda"]').check().should('be.checked')
    });
    it('marca cada tipo de atendimento, Maneira correta', function() {
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    });

    // AULA 6
    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
        .should('have.length', 2)
        .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
        .last().uncheck().should('not.be.checked')
    });

    // AULA 7
    it('seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json')
        .then(input =>{
            expect(input[0].files[0].name).to.equal('example.json')
        })
    });
    it('seleciona um arquivo simulando um drag-and-drop', () => {
        cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
        .then(input =>{
            expect(input[0].files[0].name).to.equal('example.json')
        })
    });
    it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('example.json', {encoding: null}).as('example')
        cy.get('input[type="file"]')
        .selectFile('@example')
        .then(input =>{
            expect(input[0].files[0].name).to.equal('example.json')
        })
    });
    })
  