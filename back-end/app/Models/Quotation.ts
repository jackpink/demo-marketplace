import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Job from './Job'
import Maker from './Maker'

export default class Quotation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public price: number

  @column()
  public commments: string

  @column()
  public forJob: number

  @column()
  public forMaker: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @BelongsTo(() => Job, {
    localKey: 'forJob'
  })
  public job: BelongsTo<typeof Job>

  @BelongsTo(() => Maker, {
    localKey: 'forMaker'
  })
  public maker: BelongsTo<typeof Maker>
}
