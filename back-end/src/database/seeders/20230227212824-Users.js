module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
    [{
      email: 'adm@deliveryapp.com',
      id: 1,
      name: 'Delivery App Admin',
      role: 'administrator',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
    },
    {
      email: 'fulana@deliveryapp.com',
      id: 2,
      name: 'Fulana Pereira',
      role: 'seller',
      password: '3c28d2b0881bf46457a853e0b07531c6',
    },
    {
      email: 'zebirita@email.com',
      id: 3,
      name: 'Cliente Zé Birita',
      role: 'customer',
      password: '1c37466c159755ce1fa181bd247cb925',
    },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
