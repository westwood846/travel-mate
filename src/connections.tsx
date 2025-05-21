export const modes = {
  WALKING: "Walking",
  BIKE: "Bike",
  CAR: "Car",
  TRAIN: "Train",
  BUS: "Bus",
  PLANE: "Plane",
  SHIP: "Ship",
} as const;

export type Mode = keyof typeof modes;

export interface Connection {
  id: string;
  a: string;
  b: string;
  distance: number;
  price: number;
  duration_h: number;
  mode: Mode;
}
