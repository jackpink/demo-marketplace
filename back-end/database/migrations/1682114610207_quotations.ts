import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Quotations extends BaseSchema {
  protected tableName = 'quotations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.float("price", 8, 2).notNullable();
      table.text("comments", 'longtext').notNullable();
      table.integer('for_job').notNullable().references('id').inTable('jobs');
      table.integer('for_maker').notNullable().references('id').inTable('makers');
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
