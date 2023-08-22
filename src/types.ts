export interface Game {
  name: string;
  description: string;
  url: string;
  image?: string;
  minimumPlayers: number;
  maximumPlayers?: number;
  freeToHost: boolean;
  freeToJoin: boolean;
  group?: {
    name: string;
    url: string;
  };
}
