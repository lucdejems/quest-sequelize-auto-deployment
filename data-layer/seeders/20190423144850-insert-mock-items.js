'use strict';

let items = [
  {
    id: 'HAMMER-1234',
    name: 'Hammer',
  },
  {
    id: 'NAILS-5678',
    name: 'Nails',
  },
];

if (process.env.MOCK_DATA_ITEMS_SEEDER){
  const itemsMock = [
    {
      id: 'MOCK-HAMMER-6752',
      name: 'Mock-Hammer',
    },
    {
      id: 'MOCK-NAILS-5678',
      name: 'Mock-Nails',
    },
  ];

  return items = {...items, itemsMock};
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map(item => item.id) },
      },
      {}
    );
  },
};

// npx sequelize db:seed:all