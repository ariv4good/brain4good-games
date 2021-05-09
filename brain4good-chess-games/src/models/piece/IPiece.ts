import EPieceName from './EPieceName';
import EColor from '../color/EColor';

interface IPiece {
    getName(): EPieceName,
    getColor(): EColor
}

export default IPiece;