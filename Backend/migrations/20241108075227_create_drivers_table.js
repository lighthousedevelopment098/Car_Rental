/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    await knex.schema.createTable('drivers', (table) => {
      table.increments('id').primary();
      table.integer('booking_id').unsigned().references('id').inTable('bookings').onDelete('CASCADE');
      table.string('name').notNullable();
      table.string('license').notNullable();
      table.string('identity_card');
    });
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
    await knex.schema.dropTableIfExists('drivers');
  };