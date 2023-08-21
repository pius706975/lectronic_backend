'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS users (
        user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        password VARCHAR NOT NULL,
        address TEXT,
        phone_number VARCHAR,
        date_of_birth VARCHAR,
        gender VARCHAR,
        image VARCHAR,
        role VARCHAR DEFAULT 'user',
        refresh_token VARCHAR,
        token_verify VARCHAR,
        token_expire TIMESTAMP,
        is_verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS categories (
        category_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        category_name VARCHAR NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS products (
        product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        category_id UUID NOT NULL,
        name VARCHAR NOT NULL,
        price INT NOT NULL,
        stock INT DEFAULT 0,
        sold INT DEFAULT 0,
        image VARCHAR,
        rating NUMERIC(2, 1),
        description TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT fk_categories
          FOREIGN KEY(category_id)
            REFERENCES categories(category_id)
            ON DELETE CASCADE
      )
    `)

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        review_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        product_id UUID NOT NULL,
        comment TEXT,
        rating NUMERIC(2, 1),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT fk_users
          FOREIGN KEY(user_id)
            REFERENCES users(user_id)
            ON DELETE CASCADE,
        CONSTRAINT fk_products
          FOREIGN KEY(product_id)
            REFERENCES products(product_id)
            ON DELETE CASCADE
      )
    `)

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS cart (
        cart_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        product_id UUID NOT NULL,
        qty INT,
        item_prices BIGSERIAL, 
        discount INT,
        total BIGSERIAL,
        status VARCHAR DEFAULT 'Ready to pay',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT fk_users
          FOREIGN KEY(user_id)
            REFERENCES users(user_id)
            ON DELETE CASCADE,
        CONSTRAINT fk_products
          FOREIGN KEY(product_id)
            REFERENCES products(product_id)
            ON DELETE CASCADE
      )
    `)

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS payment (
        payment_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id UUID,
        cart_id UUID,
        delivery_address TEXT,
        qty INT,
        discount INT,
        total INT,
        is_paid BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT fk_products
          FOREIGN KEY(product_id)
            REFERENCES products(product_id)
            ON DELETE CASCADE,
        CONSTRAINT fk_cart
          FOREIGN KEY(cart_id)
            REFERENCES cart(cart_id)
            ON DELETE CASCADE
      )
    `)

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS blacklist_token (
        blacklist_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        blacklist_token VARCHAR,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS payment`)
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS cart`)
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS reviews`)
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS users`)
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS products`)
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS categories`)
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS blacklist_token`)
  }
};
