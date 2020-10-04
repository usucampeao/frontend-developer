import { Ability } from './ability';
import { Type } from './type';

export class Pokemon {
  id: number;
    name: string;
    weight: number;
    types: Type;
    abilities: Ability;
    sprites: any;
}
