import EPieceName from './EPieceName';
import IPiece from './IPiece';
import EColor from '../color/EColor';

class Piece implements IPiece {
    private name: EPieceName;
    private color: EColor;

    constructor(name: EPieceName, color: EColor) {
        this.name = name;
        this.color = color;
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
}

export default Piece;