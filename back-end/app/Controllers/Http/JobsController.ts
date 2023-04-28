import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Job from 'App/Models/Job';
import Consumer from 'App/Models/Consumer';

export default class JobsController {
  public async index({ response }: HttpContextContract) {
    const jobs = await Job.all();
    for (const job of jobs) {
      const consumer = await Consumer.FindOrFail(job.createdBy);
      job.consumer = consumer;
    };
    return response.json({ jobs });
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['type', 'description', 'budget', 'createdBy',])

    const job = new Job();
    job.type = data.type;
    job.description = data.description;
    job.budget = data.budget;
    job.createdBy = data.createdBy;

    await job.save()

    return response.json({ job })
  }

  public async show({response, params}: HttpContextContract) {
    const job = await Job.findOrFail(params.id);
    const consumer = await Consumer.FindOrFail(job.createdBy);
    job.consumer = consumer;
    return response.json({ job });
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
