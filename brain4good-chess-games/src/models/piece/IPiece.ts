import IRowCol from '../../utils/matrix/IRowCol';
import EPieceName from './EPieceName';
import EPieceStatus from './EPieceStatus';
import EPieceColor from '../color/IColor';

interface IPiece {
    getName(): EPieceName,
    getColor(): EPieceColor,
    getPos(): IRowCol, // position of piece in board
    getStatus(): EPieceStatus
}

export default IPiece;