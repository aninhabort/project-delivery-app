import { expect } from 'chai';

import { describe } from 'pm2';

import sinon from 'sinon';

import UserController from '../../../controller/user.controller';
import { registerUser, validToken } from '../mocks/user.mock.test';

describe('At User Route should', function () {
  afterEach(function () { sinon.restore(); });

  it('01 - Generate token when register a new valid user', async function () {
    sinon.stub(UserController, 'post').resolves(validToken);
    const response = await UserController.registerUser(registerUser);
    expect(response).to.be.deep.equal(validToken);
  });

  it('02 - Gets error message when register an user that already exists', async function () {
    sinon.stub(UserController, 'post').resolves(invalidRegistryMessage);
    const response = await UserController.registerUser(invalidRegistry);
    expect(response.message).to.be.deep.equal(invalidRegistryMessage);
  });
  
});