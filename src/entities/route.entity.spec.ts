import { LatLng, Route, RouteProps } from "./route.entity";

describe("Route Tests", () => {

  let routeProps: RouteProps
  let route: Route

  beforeAll(() => {
    routeProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    route = new Route(routeProps);
  })

  test("constructor", () => {
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 11 }],
    });
  });

  test("updateTitle method", () => {
    route.updateTitle("title updated");
    expect(route.title).toBe("title updated");
  });

  test("updatePosition method", () => {
    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 30, lng: 40 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test("updatePoints method", () => {
    const points: LatLng[] = [
        { lat: 10, lng: 20 }
    ];
    route.updatePoints(points);
    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(points)
  });
});