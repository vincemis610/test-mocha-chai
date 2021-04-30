
describe.only('Hooks', () => {
  
  before( () => console.log('before ALL - se ejecuta al INICIO una vez...!'));
  after( () => console.log('after ALL - se ejecuta al FINAL una vez...!'));

  beforeEach( () => console.log('before Each Ejecutando antes de todos los IT') );
  afterEach( () => console.log('after Each Ejecutando despues de todos los IT') );

  it( 'Test 1', () => console.log('TEST 1') );
  it( 'Test 2', () => console.log('TEST 2') );

});