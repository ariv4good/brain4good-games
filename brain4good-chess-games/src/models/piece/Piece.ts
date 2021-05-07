import IRowCol from '../../utils/matrix/IRowCol';
import EPieceName from './EPieceName';
import EPieceStatus from './EPieceStatus';
import IPiece from './IPiece';
import EColor from '../color/EColor';

class Piece implements IPiece {
    private name: EPieceName;
    private color: EColor;
    private pos: IRowCol;
    private status: EPieceStatus;

    constructor(name: EPieceName, color: EColor) {
        this.name = name;
        this.color = color;
        this.pos = {row: 0, col: 0} as IRowCol;
        this.status = EPieceStatus.NotYetPlaced;
    }

    setName(name: EPieceName) {
        this.name = name;
        return this;
    }
    getName() {
        return this.name;
    }

    setColor(color: EColor) {
        this.color = color;
        return this;
    }
    getColor() {
        return this.color;
    }

    setPos(pos: IRowCol) {
        this.pos = pos;
        return this;
    }
    getPos() {
        return this.pos;
    }

    setStatus(status: EPieceStatus) {
        this.status = status;
        return this;
    }

    getStatus() {
        return this.status;
    }
}

export default Piece;