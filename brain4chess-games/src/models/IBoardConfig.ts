import IPoint from './geometry/IPoint';

interface IBoardConfig {
    squareSize: number, // size of each square in board
    boardTopLeft: IPoint, // position of board's top left
    lightColor: string, // color of light colored square in board
    darkColor: string // color of dark colored square in board
}

export default IBoardConfig;