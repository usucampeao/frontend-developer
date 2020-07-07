export class Pokemon {
  constructor(
    public name: string,
    public id: number,
    public sprite: string,
    public types,
    public abilities,
    public height,
    public weight,
    public baseExperience,
    public forms,
    public heldItems,
    public gameIndices,
    public is_default,
    public location,
    public moves,
    public order,
    public stats,
    public species,
    public color
  ) {}
}
