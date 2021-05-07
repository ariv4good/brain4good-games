import IPoint from '../../utils/geometry/IPoint';
import IBoard from './IBoard';

class Board implements IBoard {
    private rowCnt: number;
    private colCnt: number;
    private sqrSize: number;
    private boardTopLeft: IPoint;
    private lightColor: string;
    private darkColor: string;
    
    constructor() {
        this.rowCnt = 8;
        this.colCnt = 8;
        this.sqrSize = 100;
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
    
    getSqrSize(): number {
        return this.sqrSize;
    }
    setSqrSize(sqrSize: number) {
        this.sqrSize = sqrSize;
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
        return (this.colCnt * this.sqrSize) + 50;
    }
    
    getHeight(): number {
        return (this.rowCnt * this.sqrSize) + 50;
    }
}

export default Board;