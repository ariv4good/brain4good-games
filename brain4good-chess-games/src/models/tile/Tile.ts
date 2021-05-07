import EColor from '../color/EColor';
import ITile from './ITile';
import IPiece from '../piece/IPiece';

class Tile implements ITile {
    private color: EColor;
    private piece?: IPiece;

    constructor(color: EColor) {
        this.color = color;
    }

    setColor(color: EColor) {
        this.color = color;
        return this;
    }
    getColor() {
        return this.color;
    }

    setPiece(piece: IPiece) {
        this.piece = piece;
        return this;
    }
    getPiece() {
        return this.piece;
    }
}

export default Tile;