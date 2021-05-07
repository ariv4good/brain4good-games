import IBoard from '../models/board/IBoard';

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
        const rowCnt = this.board.getRowCnt();
        const colCnt = this.board.getColCnt();
        const tileSize = this.board.getTileSize();
        const boardTopLeft = this.board.getBoardTopLeft();
        const lightColor = this.board.getLightColor();
        const darkColor = this.board.getDarkColor();
        for(let i = 0; i < rowCnt; i++) {
            for(let j = 0; j < colCnt; j++) {
                // draw each squares in chessboard
                this.drawingAreaContext.fillStyle = ( (i + j) % 2 === 0 ) ? lightColor : darkColor;
                this.drawingAreaContext.fillStyle = ( (i + j) % 2 === 0 ) ? lightColor : darkColor;
                let xOffset = boardTopLeft.x + j * tileSize;
                let yOffset = boardTopLeft.y + i * tileSize;
                this.drawingAreaContext.fillRect(xOffset, yOffset, tileSize, tileSize);
            }
        }
        // draw the border around the chessboard
        this.drawingAreaContext.strokeStyle = darkColor;
        this.drawingAreaContext.strokeRect(boardTopLeft.x, boardTopLeft.y, tileSize * rowCnt, tileSize * colCnt)
    }
}

export default BoardService;