import IPoint from '../../utils/geometry/IPoint';
import IRowCol from '../../utils/matrix/IRowCol';
import ITile from '../tile/ITile';

interface IBoard {
    getSize(): IRowCol
    getTilesMat(): ITile[][], // get tile of board at given position
    getTileSize(): number, // size of each square in board
    getBoardTopLeft(): IPoint, // position of board's top left
}

export default IBoard;