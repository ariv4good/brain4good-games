import IRowCol from '../../utils/matrix/IRowCol';
import EPieceName from './EPieceName';
import EPieceStatus from './EPieceStatus';
import EColor from '../color/EColor';

interface IPiece {
    getName(): EPieceName,
    getColor(): EColor,
    getPos(): IRowCol, // position of piece in board
    getStatus(): EPieceStatus
}

export default IPiece;