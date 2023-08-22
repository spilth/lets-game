export interface Game {
  name: string;
  description: string;
  url: string;
  minimumPlayers: number;
  maximumPlayers?: number;
  freeToHost: boolean;
  freeToJoin: boolean;
}
