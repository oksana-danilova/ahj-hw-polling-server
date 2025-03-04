const { faker } = require('@faker-js/faker');
const uuid = require('uuid');

const usersMessages = [];

function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    from: faker.internet.email(),
    subject: `Hello from ${faker.internet.userName()}!`,
    body: "Long message body here",
    received: Date.now(),
  };
}

setInterval(() => {
    Array.from({ length: 1 }).forEach(() => {
        usersMessages.push(createRandomUser());
    });
}, 120000)


module.exports = usersMessages;