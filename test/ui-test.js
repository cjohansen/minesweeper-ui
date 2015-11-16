import {create} from '../';
import {describe, it, beforeEach, assert} from './test-helper';
import {Simulate, renderIntoDocument,
        scryRenderedDOMComponentsWithClass as byClass} from 'react-addons-test-utils';

describe('Minesweeper UI', () => {
  const doc = document.createElement('div');
  let game;

  beforeEach(() => {
    game = create(doc, {cols: 16, rows: 16, mines: 48});
  });

  it('renders game', () => {
    game.render();

    assert.equals(doc.querySelectorAll('.tile').length, 256);
  });

  it('reveals tile', done => {
    game.render();
    const firstSafe = game.data.tiles.filter(t => !t.isMine)[0];
    const tree = renderIntoDocument(game.component(game.data));
    const tileLid = byClass(tree, 'lid')[firstSafe.id];

    Simulate.click(tileLid);

    setTimeout(() => {
      const revealed = doc.querySelectorAll('.tile')[firstSafe.id];
      assert.match(revealed.innerHTML, /^\d?$/);
      done();
    }, 10);
  });
});
