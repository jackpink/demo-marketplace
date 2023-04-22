import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Photos extends BaseSchema {
  protected tableName = 'photos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string("key", 510).notNullable();
      table.integer('for_job').notNullable().references('id').inTable('jobs');
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
