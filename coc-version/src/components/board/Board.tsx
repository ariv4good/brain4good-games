import React from 'react';
import './Board.css';
import Tile from './components/tile/Tile';

function Board() {
    return (
        <div className="board">
            <Tile color={'bright-green'} top={0} left={0} />
            <Tile color={'dark-green'} top={10} left={-14} />
            <Tile color={'dark-green'} top={-10} left={-41} />
            <Tile color={'bright-green'} top={0} left={-56} />
            {/* <i className="buildings-sprite full-image"></i> */}
        </div>
    );
}

export default Board;