import React, {useMemo, useState} from 'react';
import './App.css';
import games from "./games";

const App = () => {
    const [players, setPlayers] = useState<number>(2);
    const [showOnlyFreeToHost, setShowOnlyFreeToHost] = useState<boolean>(true);

    const filteredGames = useMemo(
        () =>
            games.filter((game) =>
                players >= game.minimumPlayers
                && (!game.maximumPlayers || players <= game.maximumPlayers)).filter((game) => showOnlyFreeToHost ? game.freeToHost : true).sort((a, b) => a.name > b.name ? 1 : -1),
        [players, showOnlyFreeToHost]
    );

    return (
        <div className="container">
            <h1>Let's Game!</h1>

            <p>A collection of games you can easily play online with others.</p>

            <fieldset>
                <legend>Filters:</legend>

                <p>
                    <label htmlFor="players"> Number of Players</label>
                    <input id="players" type="number" min="1" max="50" value={players}
                           onChange={(event) => setPlayers(Number.parseInt(event.target.value))}/>
                </p>

                <p>
                    <input id="freeToHost" type="checkbox" checked={showOnlyFreeToHost}
                           onClick={(event) => setShowOnlyFreeToHost(!showOnlyFreeToHost)}/>
                    <label htmlFor="freeToHost">Show Only Free to Host Games</label>
                </p>
            </fieldset>

            {filteredGames.map(game =>
                <>
                    <h2><a href={game.url}>{game.name}</a> <small className="text-muted">
                        {!game.maximumPlayers && <>{game.minimumPlayers}+ players</>}
                        {game.maximumPlayers && <>{game.minimumPlayers} to {game.maximumPlayers} players</>}
                        {game.freeToHost && <>, Free to Host</>}
                    </small></h2>
                    <p>{game.description}</p>
                </>)}
        </div>
    );
};

export default App;
