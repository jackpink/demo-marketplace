import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Quotation from 'App/Models/Quotation';

export default class QuotationsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['price', 'comments', 'forJob', 'forMaker',])

    const quotation = new Quotation();
    quotation.price = data.price;
    quotation.commments = data.comments;
    quotation.forJob = data.forJob;
    quotation.forMaker = data.forMaker;

    await quotation.save()

    return response.json({ quotation })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
