import React from 'react';
import Board from '../../models/board/Board';
import EColor from '../../models/color/EColor';
import EPieceName from '../../models/piece/EPieceName';
import Piece from '../../models/piece/Piece';
import GameService from '../../services/GameService';
import TileService from '../../services/TileService';
import BoardComp from '../components/board/BoardComp';

function NQueensGameComp() {
    const onBoardDraw = (board: Board, drawingArea: HTMLCanvasElement) => {
        // const clr = EColor.LightColor;
        // const tileService = new TileService(board, drawingArea);
        // const piece1 = new Piece(EPieceName.Queen, clr);
        // piece1.setPos( {row: 0, col: 1} );
        // tileService.drawPiece(piece1);
    };
    const onTileClick = (event: MouseEvent, board: Board, drawingArea: HTMLCanvasElement) => {
        const boardTopLeft = board.getBoardTopLeft();
        const point = {
            x: event.pageX - boardTopLeft.x,
            y: event.pageY - boardTopLeft.y
        };
        const piece = new Piece(EPieceName.Queen, EColor.DarkColor);
        const tileService = new TileService(board, drawingArea);
        const pos = tileService.getClickPos(point, piece);
        const gameService = new GameService(board);
        if(gameService.isValidClick(pos)) {
            tileService.drawPiece(piece, pos);
        }
        else {
            alert('Game over')
        }
    };
    return (
        <BoardComp onBoardDraw={onBoardDraw} onTileClick={onTileClick} />
    );
}

export default NQueensGameComp;