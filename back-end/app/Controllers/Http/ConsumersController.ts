import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Consumer from 'App/Models/Consumer'

export default class ConsumersController {
  public async index({ response }: HttpContextContract) {
    const consumers = await Consumer.all();
    return response.json({ consumers });
  }

  public async create({}: HttpContextContract) {
    
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['firstName', 'lastName', 'phoneNumber', 'email', 'address'])

    const consumer = new Consumer();
    consumer.firstName = data.firstName;
    consumer.lastName = data.lastName;
    consumer.phoneNumber = data.phoneNumber;
    consumer.email = data.email;
    consumer.address = data. address;    

    await consumer.save()

    return response.json({ consumer })
  }

  public async show({response, params}: HttpContextContract) {
    const consumer = await Consumer.findOrFail(params.id);

    return response.json({ consumer });
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params}: HttpContextContract) {
    const data = request.only(['firstName', 'lastName', 'phoneNumber', 'email', 'address'])
    const consumer = await Consumer.findOrFail(params.id);
    consumer.merge(data)
  

    await consumer.save();

    return response.json( { consumer });
  }

  public async destroy({ response, params }: HttpContextContract) {
    const consumer = await Consumer.findOrFail(params.id);
    await consumer.delete();

    return response.json({ consumer });
  }
}
