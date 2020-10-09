import customers from '../tools/db.json';
test('customers data is correct', () => {
    expect(customers).toMatchSnapshot();
    expect(1).toEqual(1);
});
// test each item in the customers data has the correct properties
for(let i=0; i<customers.length; i++){
    test(`customer[$(i)] should have properties (id,firstName,lastName,birthDate,createdAt)`, () =>{
        expect(customer[i]).toHaveProperty('id');
        expect(customer[i]).toHaveProperty('firstName');
        expect(customer[i]).toHaveProperty('lastName');
        expect(customer[i]).toHaveProperty('birthDate');
        expect(customer[i]).toHaveProperty('createdAt');
    });
}
// default jest mock function
test('mock implementation of a basic function', () =>{
    const mock = jest.fn(() => 'I am a mock function');
    console.log(mock);
    expect(mock('Calling my mock function!')).toBe('I am a mock function');
    expect(mock).toHaveBeenCalledWith('Calling my mock function!');
});

// let's mock the return value and test calls
test('mock return value of a function one time', () => {
    const mock = jest.fn();
  
    // we can chain these!
    mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there!');
  
    mock(); // first call 'Hello'
    mock(); // second call 'there!'
  
    expect(mock).toHaveBeenCalledTimes(2); // we know it's been called two times
  
    mock('Hello', 'there', 'Steve'); // call it with 3 different arguments
    expect(mock).toHaveBeenCalledWith('Hello', 'there', 'Steve');
  
    mock('Steve'); // called with 1 argument
    expect(mock).toHaveBeenLastCalledWith('Steve');
  });

  // let's mock the return value
// difference between mockReturnValue & mockImplementation
test('mock implementation of a function', () => {
    const mock = jest.fn().mockImplementation(() => 'Australia');
    expect(mock('Location')).toBe('Australia');
    expect(mock).toHaveBeenCalledWith('Location');
  });


// async example, always return a promise (can switch out resolves with reject)
test('expect a promise to resolve', async () => {
    const user = {
      getFullName: jest.fn(() => Promise.resolve('Rahul Bhate')),
    };
    await expect(user.getFullName('Rahul Bhate')).resolves.toBe('Rahul Bhate');
  });
  
  test('expect a promise to reject', async () => {
    const user = {
      getFullName: jest.fn(() =>
        Promise.reject(new Error('Something went wrong'))
      ),
    };
    await expect(user.getFullName('Rahul Bhate')).rejects.toThrow(
      'Something went wrong'
    );
  });