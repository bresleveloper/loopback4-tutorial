import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ShukiPerson} from '../models';
import {ShukiPersonRepository} from '../repositories';

export class ShukiPersonCtrlController {
  constructor(
    @repository(ShukiPersonRepository)
    public shukiPersonRepository : ShukiPersonRepository,
  ) {}

  @post('/shuki-personal', {
    responses: {
      '200': {
        description: 'ShukiPerson model instance',
        content: {'application/json': {schema: getModelSchemaRef(ShukiPerson)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShukiPerson, {
            title: 'NewShukiPerson',
            exclude: ['id'],
          }),
        },
      },
    })
    shukiPerson: Omit<ShukiPerson, 'id'>,
  ): Promise<ShukiPerson> {
    return this.shukiPersonRepository.create(shukiPerson);
  }

  @get('/shuki-personal/count', {
    responses: {
      '200': {
        description: 'ShukiPerson model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ShukiPerson)) where?: Where<ShukiPerson>,
  ): Promise<Count> {
    return this.shukiPersonRepository.count(where);
  }

  @get('/shuki-personal', {
    responses: {
      '200': {
        description: 'Array of ShukiPerson model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ShukiPerson, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ShukiPerson)) filter?: Filter<ShukiPerson>,
  ): Promise<ShukiPerson[]> {
    return this.shukiPersonRepository.find(filter);
  }

  @patch('/shuki-personal', {
    responses: {
      '200': {
        description: 'ShukiPerson PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShukiPerson, {partial: true}),
        },
      },
    })
    shukiPerson: ShukiPerson,
    @param.query.object('where', getWhereSchemaFor(ShukiPerson)) where?: Where<ShukiPerson>,
  ): Promise<Count> {
    return this.shukiPersonRepository.updateAll(shukiPerson, where);
  }

  @get('/shuki-personal/{id}', {
    responses: {
      '200': {
        description: 'ShukiPerson model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ShukiPerson, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(ShukiPerson)) filter?: Filter<ShukiPerson>
  ): Promise<ShukiPerson> {
    return this.shukiPersonRepository.findById(id, filter);
  }

  @patch('/shuki-personal/{id}', {
    responses: {
      '204': {
        description: 'ShukiPerson PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShukiPerson, {partial: true}),
        },
      },
    })
    shukiPerson: ShukiPerson,
  ): Promise<void> {
    await this.shukiPersonRepository.updateById(id, shukiPerson);
  }

  @put('/shuki-personal/{id}', {
    responses: {
      '204': {
        description: 'ShukiPerson PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() shukiPerson: ShukiPerson,
  ): Promise<void> {
    await this.shukiPersonRepository.replaceById(id, shukiPerson);
  }

  @del('/shuki-personal/{id}', {
    responses: {
      '204': {
        description: 'ShukiPerson DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.shukiPersonRepository.deleteById(id);
  }
}
