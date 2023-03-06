import { expect } from 'chai';

import { describe } from 'pm2';

import sinon from 'sinon';

import LoginController from '../../../controller/login.controller';

import { loginPost, loginResponse } from '../mocks/user.mock.test';

describe('At Login Route should', function () {
  afterEach(function () { sinon.restore(); });

  it('01 - Login user works', async function () {
    sinon.stub(UserController, 'findOne').resolves(loginResponse);
    const response = await LoginController.findUserByEmail(loginPost);
    expect(response).to.be.deep.equal(loginResponse);
  });

  it('02 - Login user does not work', async function () {
    sinon.stub(UserController, 'findOne').resolves(notFound);
    const response = await LoginController.findUserByEmail(loginPost.email);
    expect(response.message).to.be.deep.equal(notFound);
  });

});