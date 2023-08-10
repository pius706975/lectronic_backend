'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // these 2 users have the same password: User@7777
    await queryInterface.bulkInsert('users', [{
      name: 'Admin Gahol',
      email: 'admin@gmail.com',
      password: '$2b$10$sfkjVmyIr7xX.CFurjFBkuvc6KKTSFfPgSvGHzKiVuQb3miGS29yy',
      address: 'Ghost Cave Street',
      phone_number: '081244556678',
      date_of_birth: '17-02-1999',
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1690872849/lectronic/default_picture_friqcz.png',
      role: 'admin',
      is_verified: true
    }, {
      name: 'Visitor Tamvan',
      email: 'visitor@gmail.com',
      password: '$2b$10$qYCYLV6S5M9WzGGVmO5nhumdIZ7VKpeJ8pPTD.Em7sCL.vETJEqBO',
      address: 'Jump 21 Street',
      phone_number: '081232320099',
      date_of_birth: '17-02-1989',
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1690872849/lectronic/default_picture_friqcz.png',
      role: 'user',
      is_verified: true
    }], {})

    await queryInterface.bulkInsert('categories', [{
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      category_name: 'Headphone'
    }, {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      category_name: 'Addional Equipment'
    }, {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      category_name: 'Audio Mixer'
    }, {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      category_name: 'Audio Interface'
    }, {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      category_name: 'Speaker'
    }], {})

    // await queryInterface.bulkInsert('products', [{
    //   category_id: ,
    //   name:
    // }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
