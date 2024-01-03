export interface LoginData {
  username: string;
  password: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Polygons {
  puntos: Location[];
}
