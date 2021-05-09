import IBoard from '../models/board/IBoard';
import IPiece from '../models/piece/IPiece';
import pieceSprite from '../images/pieces/pieces.png';
import EColor from '../models/color/EColor';
import IPoint from '../utils/geometry/IPoint';
import IRowCol from '../utils/matrix/IRowCol';
import Piece from '../models/piece/Piece';

class TileService {
    private board: IBoard;
    private drawingArea: HTMLCanvasElement;
    private drawingAreaCtx: CanvasRenderingContext2D;

    constructor(board: IBoard, drawingArea: HTMLCanvasElement) {
        this.board = board;
        this.drawingArea = drawingArea;
        if(this.drawingArea) {
            this.drawingAreaCtx = this.drawingArea.getContext('2d') as CanvasRenderingContext2D;
            if(!this.drawingAreaCtx) {
                throw Error('Unable to get context from given drawingArea: HTMLCanvasElement');
            }
        }
        else {
            throw Error('Given drawingArea: HTMLCanvasElement is not valid');
        }
    }
    
    drawPiece(piece: IPiece, pos: IRowCol) {
        const tilesMat = this.board.getTilesMat();
        tilesMat[pos.row][pos.col].setPiece(piece);
        const tileSize = this.board.getTileSize();
        const boardTopLeft = this.board.getBoardTopLeft();
        const image = new Image();
        image.src = pieceSprite;
        const sx = tileSize * piece.getName();
        const sy = piece.getColor() === EColor.DarkColor ? 0 : tileSize;
        const dx = (pos.col * tileSize) + boardTopLeft.x;
        const dy = pos.row * tileSize + boardTopLeft.y;
        const [sw, sh, dw, dh] = [tileSize, tileSize, tileSize, tileSize];
        image.onload = () => {
            this.drawingAreaCtx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        };
    }

    getClickPos(point: IPoint, piece: IPiece) {
        const tileSize = this.board.getTileSize();
        return {
            row: Math.floor(point.y / tileSize),
            col: Math.floor(point.x / tileSize)
        } as IRowCol;
    }
}

export default TileService;