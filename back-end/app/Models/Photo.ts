import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Job from './Job'

export default class Photo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string

  @column()
  public forJob: number

  @BelongsTo(() => Job, {
    localKey: 'forJob'
  })
  public job: BelongsTo<typeof Job>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
