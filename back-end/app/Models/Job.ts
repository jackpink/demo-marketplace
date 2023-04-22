import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, HasMany, belongsTo, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Consumer from './Consumer'
import Photo from './Photo'
import Quotation from './Quotation'

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public description: string

  @column()
  public budget?: number

  @column()
  public createdBy: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Consumer, {
    localKey: 'createdBy'
  })
  public consumer: BelongsTo<typeof Consumer>

  @hasMany(() => Photo, {
    foreignKey: 'forJob'
  })
  public photos: HasMany<typeof Photo>

  @hasMany(() => Quotation, {
    foreignKey: 'forJob'
  })
  public quotations: HasMany<typeof Quotation>

}
