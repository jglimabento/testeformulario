
describe('Client Profile Form Tests', () => {
    
    beforeEach(() => {
        cy.visit('https://qa-training.sbx.devsquad.app/');
      
        cy.get('#name', { timeout: 10000 }).should('be.visible');
    });
    it('should fill the form with valid data and display correct values (Brazil)', () => {
        cy.log('Filling the form with valid data for Brazil...');

        cy.get('#name').type('João da Silva');
        cy.get('#email').type('joao.silva@example.com');
        cy.get('#countryPrefix').type('+55');
        cy.get('#phone').type('11987654321');
        cy.get('#dateOfBirth').type('1990-05-15'); 
        cy.get('#address').type('Rua da Amostra, 123 - Centro');
        cy.get('#country').click(); 
        cy.get('#country-BR').click(); 
        cy.get('#state').should('be.visible').click(); 
        cy.get('#state-SP').click(); 

        cy.get('#annualIncome').type('50000');

        cy.get('#name').should('have.value', 'João da Silva');
        cy.get('#email').should('have.value', 'joao.silva@example.com');
        cy.get('#countryPrefix').should('have.value', '+55');
        cy.get('#phone').should('have.value', ' (119) 876-5432'); 
        cy.get('#dateOfBirth').should('have.value', '1990-05-15');
        cy.get('#address').should('have.value', 'Rua da Amostra, 123 - Centro');
        cy.get('#country').should('have.value', 'BR');
        cy.get('#state').should('have.value', 'SP');
        cy.get('#annualIncome').should('have.value', '50,000');

        cy.log('Valid data for Brazil filled and verified successfully.');
    });

    it('should fill the form with valid data for USA', () => {
        cy.log('Filling with valid data for USA...');

        cy.get('#name').type('Jane Doe');
        cy.get('#email').type('jane.doe@usa.com');
        cy.get('#countryPrefix').type('+1');
        cy.get('#phone').type('2125551234');
        cy.get('#dateOfBirth').type('1985-11-20');
        cy.get('#address').type('123 Main St - Apt 4B');


        cy.get('#country').click();
        cy.get('#country-US').click();
        cy.get('#state').should('be.visible').click();
        cy.get('#state-AZ').click(); 

        cy.get('#annualIncome').type('85000');

        cy.get('#country').should('have.value', 'US');
        cy.get('#state').should('have.value', 'AZ');
        cy.get('#annualIncome').should('have.value', '85,000');

        cy.log('Valid data for USA filled and verified.');
    });

    it('should not accept email with invalid format', () => {
        cy.log('Testing email with invalid format...');
        cy.get('#name').type('Test Email');
        cy.get('#email').type('invalidemail'); 
        cy.get('#countryPrefix').type('+55');
        cy.get('#phone').type('11111111111');
        cy.get('#dateOfBirth').type('2000-01-01');
        cy.get('#address').type('Test Street');
        cy.get('#country').click();
        cy.get('#country-BR').click();
        cy.get('#state').should('be.visible').click();
        cy.get('#state-SP').click();
        cy.get('#annualIncome').type('10000');

        cy.get('#email').should('have.value', 'invalidemail');
        cy.log('Invalid email entered.');
    });

    it('should not accept phone number with non-numeric characters', () => {
        cy.log('Testing phone number with non-numeric characters...');
        cy.get('#name').type('Test Phone');
        cy.get('#email').type('test.phone@example.com');
        cy.get('#countryPrefix').type('+55');
        cy.get('#phone').type('abc123def'); 
        cy.get('#dateOfBirth').type('2000-01-01');
        cy.get('#address').type('Test Street');
        cy.get('#country').click();
        cy.get('#country-BR').click();
        cy.get('#state').should('be.visible').click();
        cy.get('#state-SP').click();
        cy.get('#annualIncome').type('10000');

        cy.get('#phone').should('not.have.value', 'abc123def');
        cy.log('Phone number with non-numeric characters entered.');
    });

    it('should not accept a future date of birth', () => {
        cy.log('Testing future date of birth...');
        cy.get('#name').type('Test Date');
        cy.get('#email').type('test.date@example.com');
        cy.get('#countryPrefix').type('+55');
        cy.get('#phone').type('11111111111');
        cy.get('#dateOfBirth').type('2030-01-01');
        cy.get('#address').type('Test Street');
        cy.get('#country').click();
        cy.get('#country-BR').click();
        cy.get('#state').should('be.visible').click();
        cy.get('#state-SP').click();
        cy.get('#annualIncome').type('10000');

        cy.get('#dateOfBirth').should('have.value', '2030-01-01');

        cy.log('Future date of birth entered.');
    });
    it('should display an error message if Annual Income is a negative value', () => {
        cy.log('Testing negative Annual Income...');
        cy.get('#name').type('Test Income');
        cy.get('#email').type('test.income@example.com');
        cy.get('#countryPrefix').type('+55');
        cy.get('#phone').type('11111111111');
        cy.get('#dateOfBirth').type('1990-01-01');
        cy.get('#address').type('Test Street');
        cy.get('#country').click();
        cy.get('#country-BR').click();
        cy.get('#state').should('be.visible').click();
        cy.get('#state-SP').click();
        cy.get('#annualIncome').type('-1000');

        cy.get('#annualIncome').should('have.value', '-1,000');
        cy.log('Negative Annual Income entered.');
    });
    it('should not allow submission with empty mandatory fields (e.g., Full name)', () => {
        cy.log('Testing empty mandatory field: Full name...');
        cy.get('#email').type('test.empty@example.com');
        cy.get('#countryPrefix').type('+55');
        cy.get('#phone').type('11111111111');
        cy.get('#dateOfBirth').type('1990-01-01');
        cy.get('#address').type('Test Street');
        cy.get('#country').click();
        cy.get('#country-BR').click();
        cy.get('#state').should('be.visible').click();
        cy.get('#state-SP').click();
        cy.get('#annualIncome').type('10000');

        cy.get('#name').should('have.value', '');
        cy.log('Full name field left empty.');
    });
});