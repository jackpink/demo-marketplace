import { DateTime } from 'luxon'
import { BaseModel, column, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Quotation from './Quotation'

export default class Maker extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @HasMany(() => Quotation, {
    foreignKey: 'forMaker'
  })
  public makers: HasMany<typeof Maker>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
