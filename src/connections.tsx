export const Modes = {
  WALKING: "Walking",
  BIKE: "Bike",
  CAR: "Car",
  TRAIN: "Train",
  BUS: "Bus",
  PLANE: "Plane",
  SHIP: "Ship",
} as const;

export type Mode = keyof typeof Modes;

export interface Connection {
  a: string;
  b: string;
  distance: number;
  price: number;
  duration_h: number;
  mode: Mode;
}

export const connKey = (connection: Connection) =>
  connection.a + connection.b + connection.mode;
