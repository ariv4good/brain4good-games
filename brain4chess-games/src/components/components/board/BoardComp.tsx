import { useEffect } from 'react';
import Board from '../../../models/board/Board';
import BoardService from '../../../services/BoardService';

function BoardComp(props: { onBoardDraw: CallableFunction } ) {
    const board = new Board()
        .setBoardTopLeft( { x: 50, y: 50 } )
        .setRowCnt(4)
        .setColCnt(4);
    useEffect(() => {
        const canvas = document.getElementById('canvasChessboard') as HTMLCanvasElement;
        const boardService = new BoardService(board, canvas);
        props.onBoardDraw(boardService);
    }, []);
    return (
        <canvas id='canvasChessboard' width={`${board.getWidth()}px`} height={`${board.getHeight()}px`}></canvas>
    );
}

export default BoardComp;