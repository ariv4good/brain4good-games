import IPoint from '../../utils/geometry/IPoint';

interface IBoardConfig {
    getRowCnt(): number, // no. of squares in each row
    getColCnt(): number, // no. of squares in each column
    getSqrSize(): number, // size of each square in board
    getBoardTopLeft(): IPoint, // position of board's top left
    getLightColor(): string, // color of light colored square in board
    getDarkColor(): string // color of dark colored square in board
}

export default IBoardConfig;