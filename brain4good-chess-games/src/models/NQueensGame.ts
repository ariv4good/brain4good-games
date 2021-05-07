import IBoardConfig from './board/IBoard';
import IPiece from './piece/IPiece';
import Piece from './piece/Piece';

class NQueensGame {
    board: IBoardConfig;
    constructor() {
        this.board = {} as IBoardConfig;
    }
    setBoard(board: IBoardConfig) {
        this.board = board;
        return this;
    }
    placePieceOnBoard(piece: IPiece) {
        (piece as Piece).setPos( {row: 0, col: 0} );
    }
}

export default NQueensGame;