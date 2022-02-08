import * as aquariumService from '../service/aquarium';
import { Field, ObjectType, ID, InputType, Resolver, Query, Arg, Mutation, FieldResolver } from 'type-graphql';

@ObjectType()
export class Aquarium {
  constructor() {
    this.id = 0;
    this.description = "";
    this.size = "";
  }

  @Field(type => ID)
  id: number;

  @Field()
  description: string;

  @Field()
  size: string;
}

@InputType()
export class AquariumInput implements Partial<Aquarium> {
  constructor() {
    this.description = "";
    this.size = "";
  }

  @Field()
  description: string;

  @Field()
  size: string;
}

@ObjectType()
export class AquariumResponse {
  constructor() {
    this.messages = [];
    this.aquarium = undefined;
  }
  @Field(type => [String])
  messages: string[];

  @Field(type => Boolean)
  public get success() {
    return this.messages.length > 0;
  }
  public set success(value) {}

  @Field(type => Aquarium, { nullable: true })
  aquarium: Aquarium | undefined;
}

@Resolver(of => Aquarium)
export class AquariumResolver {

  @Query(returns => [Aquarium])
  async aquariums(): Promise<Aquarium[]> {
    return await aquariumService.getAquariums();
  }

  @Query(returns => Aquarium)
  async aquarium(@Arg("id") id: number): Promise<Aquarium | undefined> {
    return await aquariumService.getAquariumById(id);
  }

  @Mutation(returns => AquariumResponse)
  async addAquarium(@Arg("input") input: AquariumInput) : Promise<AquariumResponse> {
    return await aquariumService.createAquarium(input);
  }

  @Mutation(returns => AquariumResponse)
  async updateAquarium(@Arg("id") id: number, @Arg("input") input: AquariumInput) : Promise<AquariumResponse> {
    return await aquariumService.updateAquarium(id, input);
  }

  @Mutation(returns => AquariumResponse)
  async deleteAquarium(@Arg("id") id: number) : Promise<AquariumResponse> {
    return await aquariumService.deleteAquarium(id);
  }
}