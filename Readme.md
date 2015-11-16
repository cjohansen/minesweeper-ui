# Minesweeper UI

UI code for the classic game of Minesweeper. All that's missing is an
implementation of the actual game rules.

To make this project do anything useful, implement the Minesweeper game, and
hook it in by first installing it as a dependency:

```sh
npm install --save my-minesweeper-core
```

Then edit `index.js`. Fix the first line by importing from the correct module
(e.g. fill in the name of your module):

```js
import {createGame, revealTile, isGameOver} from 'your-minesweeper';
```

Then bask in the glory of a fully functional game of Minesweeer, courtesy of
you:

```sh
npm start
```

Visit [http://localhost:9965](http://localhost:9965)

You can even verify with the (moderately comprehensive) test suite:

```sh
npm test
```
