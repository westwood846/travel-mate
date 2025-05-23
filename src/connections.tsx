import { v4 as uuid } from "uuid";

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

export const makeEmptyConnection = () => {
  return {
    id: uuid(),
    a: "",
    b: "",
    distance: 0,
    price: 0,
    duration_h: 0,
    mode: "WALKING",
  } as Connection;
};

export const isValidConnection = (connection: Connection) => {
  if (connection.a === "") return false;
  if (connection.b === "") return false;
  return true;
};
