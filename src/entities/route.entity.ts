export type LatLng = { lat: number, lng: number }

export type RouteProps = {
  title: string, 
  startPosition: LatLng, 
  endPosition: LatLng,
  points?: LatLng[]
}

export default class Route {
  props: Required<RouteProps>

  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || []
    }
  }

  set title(value: string) {
    this.props.title = value;
  }
}