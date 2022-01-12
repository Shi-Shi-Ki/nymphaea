import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql.schema';

@Injectable()
export class CatsService {
  private readonly cats: Array<Cat & { ownerId?: number }> = [
    { id: 1, name: 'mike', age: 5, ownerId: 1 },
    { id: 2, name: 'kuro', age: 3, ownerId: 1 },
    { id: 3, name: 'maro', age: 8, ownerId: 2 },
    { id: 4, name: 'siro', age: 1, ownerId: 0 },
    { id: 5, name: 'saba', age: 6, ownerId: 0 },
  ];

  create(cat: Cat): Cat {
    cat.id = this.cats.length + 1;
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOneById(id: number): Cat {
    return this.cats.find(cat => cat.id === id);
  }

  findByIds(ids: number[]): Cat[] {
    return ids.map(id => this.cats.find(cat => cat.id === id))
  }
}
