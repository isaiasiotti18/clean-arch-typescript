import Route, { RouteProps } from './route.entity';
describe('Route Tests', () => {
  test('constructor', () => {
    let routeProps: RouteProps = {
      title: "My Route",
      startPosition: { lat: 0, lng: 2 },
      endPosition: { lat: 2, lng: 4 }
    }
    let route = new Route(routeProps)
    expect(route.props).toStrictEqual({
      ...routeProps, points: []
    })

    routeProps = {
      title: "My Route",
      startPosition: { lat: 0, lng: 2 },
      endPosition: { lat: 2, lng: 4 },
      points: [
        { lat: 0, lng: 2 },
        { lat: 2, lng: 4 }
      ]
    }
    route = new Route(routeProps)
    expect(route.props).toStrictEqual({
      ...routeProps, points: [
        { lat: 0, lng: 2 },
        { lat: 2, lng: 4 }
      ]
    })
  })

  test('update title method', () => {
    const routeProps: RouteProps = {
      title: "My Route",
      startPosition: { lat: 0, lng: 2 },
      endPosition: { lat: 2, lng: 4 }
    }
    const route = new Route(routeProps)
    route.updateTitle('Route')
    expect(route.title).toBe('Route')
  })
})