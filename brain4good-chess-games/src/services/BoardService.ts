import IBoard from '../models/board/IBoard';
import IPiece from '../models/piece/IPiece';
import pieceSprite from '../images/pieces/pieces.png';
import EColor from '../models/color/EColor';

class BoardService {
    private drawingArea: HTMLCanvasElement;
    private drawingAreaContext: CanvasRenderingContext2D;
    private board: IBoard;

    constructor (board: IBoard, drawingArea: HTMLCanvasElement) {
        this.board = board;
        this.drawingArea = drawingArea;
        if(this.drawingArea) {
            this.drawingAreaContext = this.drawingArea.getContext('2d') as CanvasRenderingContext2D;
            if(!this.drawingAreaContext) {
                throw Error('Unable to get context from given drawingArea: HTMLCanvasElement');
            }
        }
        else {
            throw Error('Given drawingArea: HTMLCanvasElement is not valid');
        }
        this.draw();
    }

    draw() {
        const rowCnt = this.board.getRowCnt();
        const colCnt = this.board.getColCnt();
        const sqrSize = this.board.getSqrSize();
        const boardTopLeft = this.board.getBoardTopLeft();
        const lightColor = this.board.getLightColor();
        const darkColor = this.board.getDarkColor();
        for(let i = 0; i < rowCnt; i++) {
            for(let j = 0; j < colCnt; j++) {
                // draw each squares in chessboard
                this.drawingAreaContext.fillStyle = ( (i + j) % 2 === 0 ) ? lightColor : darkColor;
                this.drawingAreaContext.fillStyle = ( (i + j) % 2 === 0 ) ? lightColor : darkColor;
                let xOffset = boardTopLeft.x + j * sqrSize;
                let yOffset = boardTopLeft.y + i * sqrSize;
                this.drawingAreaContext.fillRect(xOffset, yOffset, sqrSize, sqrSize);
            }
        }
        // draw the border around the chessboard
        this.drawingAreaContext.strokeStyle = darkColor;
        this.drawingAreaContext.strokeRect(boardTopLeft.x, boardTopLeft.y, sqrSize * rowCnt, sqrSize * colCnt)
    }

    drawPieceOnBoard(piece: IPiece) {
        const sqrSize = this.board.getSqrSize();
        const boardTopLeft = this.board.getBoardTopLeft();
        const image = new Image();
        image.src = pieceSprite;
        const sx = sqrSize * piece.getName();
        const sy = piece.getColor().getColor() === EColor.DarkColor ? 0 : sqrSize;
        const dx = (piece.getPos().col * sqrSize) + boardTopLeft.x;
        const dy = piece.getPos().row * sqrSize + boardTopLeft.y;
        const [sw, sh, dw, dh] = [sqrSize, sqrSize, sqrSize, sqrSize];
        image.onload = () => {
            this.drawingAreaContext.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        };
    }
}

export default BoardService;