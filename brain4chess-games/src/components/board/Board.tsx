import { useEffect } from 'react';
import IBoardConfig from '../../models/IBoardConfig';

function Board() {
    useEffect(() => {
        const config: IBoardConfig = {
            squareSize: 50,
            boardTopLeft: {
                x: 50,
                y: 50
            },
            lightColor: '#ffffff',
            darkColor: '#000000'
        };          
        drawChessboard(config);
    }, []);      

    return (
        <canvas id='canvasChessboard' width='800px' height='500px'></canvas>
    );
}

function drawChessboard(config: IBoardConfig) {
    const {squareSize, boardTopLeft, lightColor, darkColor} = config;
    const canvas = document.getElementById('canvasChessboard') as HTMLCanvasElement;
    if(canvas) {
        const context = canvas.getContext('2d');
        if(context) {
            for(let i = 0; i < 8; i++) {
                for(let j = 0; j < 8; j++) {
                    // draw each squares in chessboard
                    context.fillStyle = ( (i + j) % 2 === 0 ) ? lightColor : darkColor;
                    context.fillStyle = ( (i + j) % 2 === 0 ) ? lightColor : darkColor;
                    let xOffset = boardTopLeft.x + j * squareSize;
                    let yOffset = boardTopLeft.y + i * squareSize;
                    context.fillRect(xOffset, yOffset, squareSize, squareSize);
                }
            }
            // draw the border around the chessboard
            context.strokeStyle = darkColor;
            context.strokeRect(boardTopLeft.x, boardTopLeft.y, squareSize * 8, squareSize * 8)
        }
    }
}

export default Board;