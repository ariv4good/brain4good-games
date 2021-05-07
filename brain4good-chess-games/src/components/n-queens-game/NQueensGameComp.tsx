import React from 'react';
import Color from '../../models/color/Color';
import EColor from '../../models/color/EColor';
import EPieceName from '../../models/piece/EPieceName';
import Piece from '../../models/piece/Piece';
import BoardService from '../../services/BoardService';
import BoardComp from '../components/board/BoardComp';

function NQueensGameComp() {
    const onBoardDraw = (boardService: BoardService) => {
        const clr = new Color(EColor.LightColor);
        const piece1 = new Piece(EPieceName.Queen, clr);
        piece1.setPos( {row: 0, col: 1} );
        boardService.drawPieceOnBoard(piece1);
        const piece2 = new Piece(EPieceName.Queen, clr);
        piece2.setPos( {row: 1, col: 3} );
        boardService.drawPieceOnBoard(piece2);
        const piece3 = new Piece(EPieceName.Queen, clr);
        piece3.setPos( {row: 2, col: 0} );
        boardService.drawPieceOnBoard(piece3);
        const piece4 = new Piece(EPieceName.Queen, clr);
        piece4.setPos( {row: 3, col: 2} );
        boardService.drawPieceOnBoard(piece4);
    };
    return (
        <BoardComp onBoardDraw={onBoardDraw} />
    );
}

export default NQueensGameComp;