import { DateTime } from 'luxon'
import { BaseModel, column, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Job from './Job'

export default class Consumer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public phoneNumber: string

  @column()
  public email: string

  @column()
  public address: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @HasMany(() => Job, {
    foreignKey: 'createdBy'
  })
  public jobs: HasMany<typeof Job>
}
