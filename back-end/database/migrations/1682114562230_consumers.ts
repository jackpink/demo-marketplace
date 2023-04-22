import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Consumers extends BaseSchema {
  protected tableName = 'consumers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string("first_name", 255).notNullable();
      table.string("last_name", 255).notNullable();
      table.string("phone_number", 255).notNullable();
      table.string("email", 255).notNullable();
      table.text("address", 'longtext').notNullable();
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
