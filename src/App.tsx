import React, { useMemo, useState } from "react";
import "./App.css";
import games from "./games";
import { GameCard } from "./GameCard";
import { Row } from "react-bootstrap";

const App = () => {
  const [players, setPlayers] = useState<number>(2);
  const [showOnlyFreeToHost, setShowOnlyFreeToHost] = useState<boolean>(true);

  const filteredGames = useMemo(
    () =>
      games
        .filter(
          (game) =>
            players >= game.minimumPlayers &&
            (!game.maximumPlayers || players <= game.maximumPlayers),
        )
        .filter((game) => (showOnlyFreeToHost ? game.freeToHost : true))
        .sort((a, b) => (a.name > b.name ? 1 : -1)),
    [players, showOnlyFreeToHost],
  );

  return (
    <div className="container">
      <h1 className="text-center">Let's Game!</h1>

      <p className="lead text-center">
        A collection of games you can easily play online with others.
      </p>

      <form className="mb-4">
        <div className="mb-3">
          <label htmlFor="players"> Number of Players: {players}</label>
          <input
            className="form-range"
            id="players"
            type="range"
            min="1"
            max="32"
            value={players}
            onChange={(event) =>
              setPlayers(Number.parseInt(event.target.value))
            }
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            id="freeToHost"
            type="checkbox"
            checked={showOnlyFreeToHost}
            onClick={() => setShowOnlyFreeToHost(!showOnlyFreeToHost)}
          />
          <label className="form-check-label" htmlFor="freeToHost">
            Only Show "Free to Host" Games
          </label>
        </div>
      </form>

      <h2 className="text-center mb-3">
        {filteredGames.length} games to play!
      </h2>

      <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3}>
        {filteredGames.map((game) => (
          <GameCard game={game} />
        ))}
      </Row>
    </div>
  );
};

export default App;
