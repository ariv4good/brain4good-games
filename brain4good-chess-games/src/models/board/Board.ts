import IPoint from '../../utils/geometry/IPoint';
import IRowCol from '../../utils/matrix/IRowCol';
import ITile from '../tile/ITile';
import IBoard from './IBoard';

class Board implements IBoard {
    private rowCnt: number;
    private colCnt: number;
    private tileSize: number;
    private boardTopLeft: IPoint;
    private lightColor: string;
    private darkColor: string;
    private tilesMat: ITile[][];
    
    constructor() {
        this.rowCnt = 8;
        this.colCnt = 8;
        this.tilesMat = new Array(this.rowCnt);
        for(let i = 0;i < this.colCnt;i++) {
            this.tilesMat[i] = new Array(this.colCnt).fill(undefined);
        }
        this.tileSize = 100;
        this.boardTopLeft = { x: 0, y: 0 };
        this.lightColor = '#CDAA7D';
        this.darkColor = '#855E42';
    }

    getRowCnt(): number {
        return this.rowCnt;
    }
    setRowCnt(rowCnt: number) {
        this.rowCnt = rowCnt;
        return this;
    }

    getColCnt(): number {
        return this.colCnt;
    }
    setColCnt(colCnt: number) {
        this.colCnt = colCnt;
        return this;
    }

    getTile(pos: IRowCol): ITile {
        return this.tilesMat[pos.row][pos.col];
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
    
    getLightColor(): string {
        return this.lightColor;
    }
    setLightColor(lightColor: string) {
        this.lightColor = lightColor;
        return this;
    }
    
    getDarkColor(): string {
        return this.darkColor;
    }
    setDarkColor(darkColor: string) {
        this.darkColor = darkColor;
        return this;
    }
    
    getWidth(): number {
        return (this.colCnt * this.tileSize) + 50;
    }
    
    getHeight(): number {
        return (this.rowCnt * this.tileSize) + 50;
    }
}

export default Board;