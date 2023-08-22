import React from "react";
import { Game } from "./types";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => (
  <>
    <h2>
      <a href={game.url}>{game.name}</a>{" "}
      <small className="text-muted">
        {!game.maximumPlayers && <>{game.minimumPlayers}+ players</>}
        {game.maximumPlayers && (
          <>
            {game.minimumPlayers} to {game.maximumPlayers} players
          </>
        )}
      </small>
    </h2>

    <p>
      {game.freeToHost ? (
        <span className="badge-free">Free to Host</span>
      ) : (
        <span className="badge-pay">Pay to Host</span>
      )}
    </p>
    <p>{game.description}</p>
  </>
);
