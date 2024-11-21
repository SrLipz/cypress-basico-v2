// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Central de Atendimento ao Cliente TAT', function() {
    const form = {}
    form.nome = ("Felipe")
    form.sobrenome = ("Lau")
    form.email = ("felipelaucs@gmail.com")
    form.desc = ("Nada não!")

    beforeEach(() => {
        cy.visit('./src/index.html')
    });
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
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
        cy.get('#phone-checkbox').click()
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
    it('seleciona um produto (YouTube) por seu texto', () => {
        cy.get('select').select('Youtube').should('have.value', 'youtube')
        
    });
    it('seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('select').select('mentoria').should('have.value', 'mentoria')
        
    });
    it.only('seleciona um produto (Blog) por seu índice', () => {
        cy.get('select').select(1).should('have.value', 'blog')
        
    });
  })
  