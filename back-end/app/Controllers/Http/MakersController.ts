import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Maker from 'App/Models/Maker';

export default class MakersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email'])

    const maker = new Maker();
    maker.name = data.name;
    maker.email = data.email;
   

    await maker.save()

    return response.json({ maker })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
