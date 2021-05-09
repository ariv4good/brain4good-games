import IPoint from '../../utils/geometry/IPoint';
import IRowCol from '../../utils/matrix/IRowCol';
import EColor from '../color/EColor';
import ITile from '../tile/ITile';
import Tile from '../tile/Tile';
import IBoard from './IBoard';

class Board implements IBoard {
    private size: IRowCol;
    private tileSize: number;
    private boardTopLeft: IPoint;
    private tilesMat: ITile[][];
    
    constructor(size: IRowCol) {
        this.size = size;
        this.tilesMat = new Array(this.size.row);
        for(let i = 0;i < this.size.row;i++) {
            this.tilesMat[i] = new Array(this.size.col).fill(undefined);
            for(let j = 0; j < this.size.col; j++) {
                const color = ( (i + j) % 2 === 0 ) ? EColor.LightColor : EColor.DarkColor;
                this.tilesMat[i][j] = new Tile(color);
            }
        }
        this.tileSize = 100;
        this.boardTopLeft = { x: 0, y: 0 };
    }

    getSize(): IRowCol {
        return this.size;
    }

    getTilesMat(): ITile[][] {
        return this.tilesMat;
    }
    
    getTileSize(): number {
        return this.tileSize;
    }
    setTileSize(tileSize: number) {
        this.tileSize = tileSize;
        return this;
    }
    
    getBoardTopLeft(): IPoint {
        return this.boardTopLeft;
    }
    setBoardTopLeft(boardTopLeft: IPoint) {
        this.boardTopLeft = boardTopLeft;
        return this;
    }
        
    getWidth(): number {
        return (this.size.col * this.tileSize) + 50;
    }
    
    getHeight(): number {
        return (this.size.row * this.tileSize) + 50;
    }
}

export default Board;