var expect = require('chai').expect;

describe.only('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // Una prueba
    it ('Los valores del array son iguales', () => {
        const result = [1, 2, 4, 6, 8];
        expect(String(array)).to.equal('1,2,4,6,8');
        expect(array).to.eql(result);
        expect(array).to.deep.equal(result);
        expect([1,2,3]).to.have.ordered.members([1,2,3]);
    });

    it('Contiene el valor "2" el array', () => {
        expect( String(array).indexOf('2,') > -1 ).to.equal(true);
        expect( array.includes(2) ).to.equal(true);
        expect(array).to.include(2);
        expect(array).to.be.an('array').that.includes(2);
    });

    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        // [1, 2, 4, 6, 8]
        expect(array).to.includes.members([1,1,1,4]);
    });

    it('Contiene los valores independientemente del orden', () => {
        expect(array).to.have.members([1, 2, 4, 6, 8]);
        expect(array).to.have.members([1, 4, 2, 6, 8]);
        expect(array).to.have.members([1, 6, 2, 8, 4]);
    });

    it('Tiene una longitud de 5 carácteres', () => {
        expect(array.length === 5).to.equal(true);
        expect(array).to.have.lengthOf(5);
        expect(array.length).to.equal(5);
    });
});
