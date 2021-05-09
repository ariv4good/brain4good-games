import IBoard from '../models/board/IBoard';
import EColor from '../models/color/EColor';
import ColorService from './ColorService';

class BoardService {
    private board: IBoard;
    private drawingArea: HTMLCanvasElement;
    private drawingAreaContext: CanvasRenderingContext2D;

    constructor(board: IBoard, drawingArea: HTMLCanvasElement) {
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

    getBoard() {
        return this.board;
    }

    getDrawingArea() {
        return this.drawingArea;
    }

    draw() {
        const size = this.board.getSize();
        const tilesMat = this.board.getTilesMat();
        const tileSize = this.board.getTileSize();
        const boardTopLeft = this.board.getBoardTopLeft();
        const colorService = new ColorService();
        for(let i = 0; i < size.row; i++) {
            for(let j = 0; j < size.col; j++) {
                // draw each squares in chessboard
                this.drawingAreaContext.fillStyle = colorService.getColorCode(tilesMat[i][j].getColor());
                let xOffset = boardTopLeft.x + j * tileSize;
                let yOffset = boardTopLeft.y + i * tileSize;
                this.drawingAreaContext.fillRect(xOffset, yOffset, tileSize, tileSize);
            }
        }
        // draw the border around the chessboard
        this.drawingAreaContext.strokeStyle = colorService.getColorCode(EColor.DarkColor);
        this.drawingAreaContext.strokeRect(boardTopLeft.x, boardTopLeft.y, tileSize * size.row, tileSize * size.col)
    }
}

export default BoardService;