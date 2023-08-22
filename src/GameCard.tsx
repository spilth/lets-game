import React from "react";
import { Game } from "./types";
import { Card, Col } from "react-bootstrap";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => (
  <Col key={game.name}>
    <Card className="mb-4 shadow">
      <Card.Body>
        <Card.Title>
          <a href={game.url} className="text-decoration-none">
            {game.name}
          </a>{" "}
        </Card.Title>
        <Card.Subtitle className="text-muted mb-2">
          {game.maximumPlayers ? (
            <React.Fragment>
              {game.minimumPlayers} to {game.maximumPlayers} players
            </React.Fragment>
          ) : (
            <React.Fragment>{game.minimumPlayers}+ players</React.Fragment>
          )}
        </Card.Subtitle>
        <Card.Text>
          <p>{game.description}</p>
          <p>
            {game.freeToHost ? (
              <span className="badge rounded-pill text-bg-success">
                Free to Host
              </span>
            ) : (
              <span className="badge rounded-pill text-bg-warning">
                Pay to Host
              </span>
            )}
            {game.freeToJoin ? (
              <span className="badge rounded-pill text-bg-success">
                Free to Join
              </span>
            ) : (
              <span className="badge rounded-pill text-bg-warning">
                Pay to Join
              </span>
            )}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);
