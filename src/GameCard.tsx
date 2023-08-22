import React from "react";
import { Game } from "./types";
import { Card, Col } from "react-bootstrap";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => (
  <Col key={game.name}>
    <Card className="mb-4 shadow border-dark-subtle text-bg-light">
      {game.image && (
        <a href={game.url}>
          <Card.Img variant="top" src={`/images/${game.image}`} />
        </a>
      )}
      <Card.Body>
        <Card.Title>
          <a href={game.url} className="text-decoration-none">
            {game.name}
          </a>
        </Card.Title>
        <Card.Subtitle className="text-body-secondary mb-2">
          {game.maximumPlayers ? (
            <React.Fragment>
              {game.minimumPlayers} to {game.maximumPlayers} players
            </React.Fragment>
          ) : (
            <React.Fragment>{game.minimumPlayers}+ players</React.Fragment>
          )}
        </Card.Subtitle>
        <Card.Text>{game.description}</Card.Text>
        <Card.Text>
          {game.freeToHost ? (
            <span className="badge rounded-pill text-bg-success me-1">
              Free to Host
            </span>
          ) : (
            <span className="badge rounded-pill text-bg-warning me-1">
              Pay to Host
            </span>
          )}
          {game.freeToJoin ? (
            <span className="badge rounded-pill text-bg-success me-1">
              Free to Join
            </span>
          ) : (
            <span className="badge rounded-pill text-bg-warning me-1">
              Pay to Join
            </span>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {game.group ? (
          <React.Fragment>
            Part of{" "}
            <a href={game.group.url} className="text-decoration-none">
              {game.group.name}
            </a>
          </React.Fragment>
        ) : (
          <React.Fragment>Standalone Game</React.Fragment>
        )}
      </Card.Footer>
    </Card>
  </Col>
);
