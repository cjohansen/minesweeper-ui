import {createGame, revealTile, isGameOver} from 'your-minesweeper';
import createUI from './src/ui.js';
import {EventEmitter} from 'events';
import react from 'react-dom';

export function create(el, {cols, rows, mines}) {
  const channel = new EventEmitter();
  const renderGame = createUI(channel);
  const game = createGame({cols, rows, mines});
  const render = () => react.render(renderGame(game), el);

  channel.on('reveal', (tile) => {
    if (isGameOver(game)) {
      return;
    }

    revealTile(game, tile);
    render();

    if (isGameOver(game)) {
      // Wait for the final render to complete before alerting the user
      setTimeout(() => { alert('GAME OVER!'); }, 50);
    }
  });

  return {
    data: game,
    component: renderGame,
    render
  }
};
