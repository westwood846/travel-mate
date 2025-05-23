import { v4 as uuid } from "uuid";
import type { Location } from "./locations";

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

export interface InputConnection {
  id: string;
  a: string;
  b: string;
  distance: string;
  price: string;
  duration_h: string;
  mode: string;
}

export const makeInputConnection = () => {
  return {
    id: uuid(),
    a: "",
    b: "",
    distance: "",
    price: "",
    duration_h: "",
    mode: "",
  } as InputConnection;
};

export const validateConnection = (
  input: InputConnection,
  locations: Location[]
) => {
  if (!locations.find((l) => l.id === input.a)) return null;
  if (!locations.find((l) => l.id === input.b)) return null;
  if (isNaN(Number(input.distance))) return null;
  if (isNaN(Number(input.price))) return null;
  if (isNaN(Number(input.duration_h))) return null;
  if (!Object.keys(modes).includes(input.mode)) return null;
  return {
    id: input.id,
    a: input.a,
    b: input.b,
    distance: Number(input.distance),
    price: Number(input.price),
    duration_h: Number(input.duration_h),
    mode: input.mode as Mode,
  } as Connection;
};
