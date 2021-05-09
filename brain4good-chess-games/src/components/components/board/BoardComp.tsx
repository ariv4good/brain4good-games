import { useEffect } from 'react';
import Board from '../../../models/board/Board';
import BoardService from '../../../services/BoardService';

function BoardComp(props: { onBoardDraw: CallableFunction, onTileClick: CallableFunction } ) {
    const board = new Board( {row: 4, col: 4} )
        .setBoardTopLeft( { x: 50, y: 50 } );
    useEffect(() => {
        const canvas = document.getElementById('canvasChessboard') as HTMLCanvasElement;
        const boardService = new BoardService(board, canvas);
        const drawingArea = boardService.getDrawingArea();
        props.onBoardDraw(board, drawingArea);
        canvas.addEventListener('click', (event: MouseEvent) => {
            props.onTileClick(event, board, drawingArea);
        });
    }, []);
    return (
        <canvas id='canvasChessboard' width={`${board.getWidth()}px`} height={`${board.getHeight()}px`}></canvas>
    );
}

export default BoardComp;