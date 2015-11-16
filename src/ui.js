import {DOM, createFactory, createClass} from 'react';
import {partition, assign} from './util';
const {div, p, button} = DOM;

export default function(channel) {
  const tile = createFactory(createClass({
    render() {
      const {id, isRevealed, isMine, threatCount} = this.props;

      if (isRevealed) {
        return div({className: `tile${isMine ? ' mine' : ''}`},
                   threatCount > 0 ? threatCount : '');
      }
      return div({
        className: 'tile',
        onClick: function () {
          channel.emit('reveal', id);
        }
      }, div({className: 'lid'}, ''));
    }
  }))

  function row(tiles) {
    return div({className: 'row'}, ...tiles.map(tile));
  }

  function board({cols, tiles}) {
    return div({className: 'board'}, ...partition(cols, tiles).map(row));
  }

  function undoButton() {
    return p({}, button({
      className: 'button',
      onClick: channel.emit.bind(channel, 'undo')
    }, 'Undo'));
  }

  return createFactory(createClass({
    render() {
      return div({}, board(this.props), undoButton());
    }
  }));
}
