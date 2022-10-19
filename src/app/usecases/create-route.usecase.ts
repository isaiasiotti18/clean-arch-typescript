import { LatLng, Route } from "../../domain/entities/route.entity";
import { RouteRepositoryInterface } from "../../domain/repositories/route.repository";
//não services do Nest.js - casos de uso vão ser o service
//services do Nest.js usam os casos
export class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

type CreateRouteOutput = {
  id: string,
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};