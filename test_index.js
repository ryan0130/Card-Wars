let expect = chai.expect;

describe('MyFunction', () => {
    describe('Player Class', () => {
        it('It should return a number', () => {
            let testNumber = new Player(1, 10);
            expect(testNumber.player).to.equal(1);
        });
    });
});