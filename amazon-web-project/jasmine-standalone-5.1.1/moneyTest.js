import formatCurrency from "../scripts/utilities/money.js";

//Creating a Suit
describe('test suite: formartCurrency', () => {
    
    //Naming the test
    it('converts cents into dollars', () => {
       expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds Off', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

    it('rounds off and rectifies', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });
});