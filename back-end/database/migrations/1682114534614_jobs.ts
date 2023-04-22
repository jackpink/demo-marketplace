import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Jobs extends BaseSchema {
  protected tableName = 'jobs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string("type", 255).notNullable();
      table.text("description",'longtext').notNullable();
      table.float("budget", 8, 2).Nullable();
      table.integer('created_by').notNullable().references('id').inTable('consumers');
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
