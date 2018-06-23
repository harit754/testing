const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  var user = {location: 'Philadelphia', age: 25};
  // var res = utils.setName(user, 'Harit Saini');
  var res=utils.setName(user,`Harit Saini`);

  expect(res).toInclude({
    firstName: 'Harit',
    lastName: 'Saini'
  });
});

// it('should expect some values', () => {
//   expect(12).toBe(12);
//   expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   expect([2,3,4]).toExclude(152);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   })
// });
