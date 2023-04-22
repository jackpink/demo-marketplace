import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Makers extends BaseSchema {
  protected tableName = 'makers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string("name", 255).notNullable();
      table.string("email", 255).notNullable();
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
