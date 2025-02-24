describe('Provider page testing', () => {
    it('Functional testing for provider page', () => {
cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login') //url
cy.get('.mat-form-field.ng-tns-c170-1 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('testuser@gmail.com') //Username(valli@gmail.com)
cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('user123')  //password(sri)
//cy.wait(4000)
cy.get('.mat-button-wrapper').click()   //login
cy.get('.button-container > .mat-focus-indicator').click() //Creat recommenation button
cy.get('.form-field-container-col2 > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('chhabi@gmail.com') //Email
cy.get('.form-field-container-col2 > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click() //health profile
//cy.get('#mat-option-4 > .mat-option-text').click()   //Best health
//cy.get('#mat-option-5 > .mat-option-text').click() //Good health
//cy.get('#mat-option-6 > .mat-option-text').click()  //Moderate health
//cy.get('#mat-option-7 > .mat-option-text').click() //poor health
cy.get('#mat-option-8 > .mat-option-text').click()   // Sick
cy.wait(4000)

cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('XYZ') //Recommendation name
cy.get('#mat-input-5').clear().type(85)  //Life expectancy
cy.get(':nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click() //date of birth
cy.get(':nth-child(5) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click() //Gender
cy.get('#mat-option-9 > .mat-option-text').click()  //Gender male
//cy.get('#mat-option-10 > .mat-option-text').click() ////Gender female

//cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click() //Tabacco status no
cy.get('#mat-radio-7 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click() //Tabacco status yes
cy.get(':nth-child(7) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('Castle') //Street name
cy.get('#mat-radio-8 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click()  //Tax filing status jointly
//cy.get('#mat-radio-9 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click() //Tax filing status individual
//cy.wait(4000)

cy.get('#mat-input-8').click().type(80108)  //Zipcode
cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() //Zipcode search button
cy.get('.mat-field.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()  //Magi tier
//cy.get('#mat-option-11 > .mat-option-text').click()  
//cy.get('#mat-option-12 > .mat-option-text').click()
cy.get('#mat-option-13 > .mat-option-text').click()
//cy.get('#mat-option-14 > .mat-option-text').click()
//cy.get('#mat-option-15 > .mat-option-text').click()
//cy.get('#mat-option-16 > .mat-option-text').click()
//cy.wait(4000)

//cy.get(':nth-child(11) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click() //County,state
cy.get(':nth-child(11) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click() //City
cy.get('#mat-option-18 > .mat-option-text').click() //City option 1
//cy.get('#mat-option-19 > .mat-option-text').click() //City option 2
//cy.wait(4000)

//cy.get(':nth-child(13) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('abc@gmail.com')  //Communication email
cy.get(':nth-child(15) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('0113456789') //Contact number
cy.wait(6000)
//cy.get('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper').click()
//cy.wait(6000)
cy.get('.form-wrapper > .mat-raised-button').click()  //Next button(home page)

/cy.get('#mat-radio-11 > .mat-radio-label').click()  //Search preference yes
//cy.get('#mat-radio-12 > .mat-radio-label').click()    //Search preference No
cy.get('.preference-wrapper > .button-wrapper > .mat-focus-indicator').click() //Next button in the search preference page

//cy.get('.ng-tns-c108-28 > .ant-select-selection-search > .ant-select-selection-search-input').click().type('Ozem')
//cy.get('.ant-select-item-option-content').click() //Drug ozempic
//cy.get('.marginLeft20pxImp > .ng-star-inserted').click()  //Branded
//cy.get('.primary-btn > .ng-star-inserted').click()  //Generic
//cy.get('[title="90 Days"] > .ant-select-item-option-content').click()
//cy.get('[title="60 Days"] > .ant-select-item-option-content').click()
//cy.get('.floatRight > u').click()   //Clear search

//cy.get('[style="margin-top: 1em;"] > .marginTop2Percent').click() //Add to drug
//cy.get('.ng-star-inserted > .mat-focus-indicator').click() //Done adding drug
//cy.get('.ant-checkbox-input').click() //Save drug list check mark
//cy.get('.textAlignLeft').click().type('M')
//cy.get('.ng-star-inserted > .mat-focus-indicator').click() //Done adding drug
//cy.get('[style="bottom: -10px; position: relative;"] > :nth-child(1) > u') //Edit drug not working
//cy.get('.floatRight > a > u').click() //Remove drug
//cy.get('.floatLeft').click()  //Add another drug


cy.get(':nth-child(1) > .login-form-forgot > u').click()   //Browse drug
cy.get('.ant-drawer-body > :nth-child(13)').click() //acanya
cy.get('.ant-drawer-footer > div.ng-star-inserted > :nth-child(2)').click()  //Add drug
cy.get('.primary-btn > .ng-star-inserted').click()  //Generic clindamycin 
cy.get('[style="margin-top: 1em;"] > .marginTop2Percent').click() //Add to drug
cy.get('.ng-star-inserted > .mat-focus-indicator').click() //Done adding drug
//cy.get('label > div > .login-form-forgot > u').click() //Switch to brand drug



//cy.get('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper').click()           //Back button
//cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container').click()                //Prescription list radio button
//cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click()   //Recommendation cy.contains radio button
//cy.get('.search-container > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('chhabi@gmail.com')  //Filter by email
//cy.get('tbody > :nth-child(1) > .cdk-column-email').click()                   //select email
//cy.get(':nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon').click() //Edit button
//cy.get('#mat-input-16').clear().type(80)  //edited life expectany
//cy.get('#mat-input-18').clear().type('mn@gmail.com')                          //Edited communication email
//cy.get('#mat-input-19').clear().type('0123456788')                            //Edited contact number

//cy.get(':nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(3) > .mat-button-wrapper > .mat-icon').click()  //delete plan
//cy.get('.button-container > .button-wrapper > .mat-focus-indicator').click()
//cy.get('.button-container > .button-wrapper > .mat-focus-indicator > .mat-button-wrapper').click() //back button is not working for preference page.







    })
})