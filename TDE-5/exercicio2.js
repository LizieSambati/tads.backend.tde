// 2. usando a lib fakerjs (https://www.npmjs.com/package/@faker-js/faker) 
// crie uma função que retorna dados de uma pessoa falsa contendo nome, email e data de nascimento.

// ESM
import { faker } from '@faker-js/faker';

// CJS
const { faker } = require('@faker-js/faker');

export function createRandomUser() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate(),
  };
}