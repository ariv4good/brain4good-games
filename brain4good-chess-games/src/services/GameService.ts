import IBoard from "../models/board/IBoard";
import IRowCol from "../utils/matrix/IRowCol";

class GameService {
    private board: IBoard;

    constructor(board: IBoard) {
        this.board = board;
    }

    isValidClick(pos: IRowCol) {
        const size = this.board.getSize();
        const tilesMat = this.board.getTilesMat();
        // The tile itself is not free
        if(tilesMat[pos.row][pos.col].getPiece()) {
            return false;
        }
        // To bottom
        for(let i = pos.row + 1;i < size.row;i++) {
            if(tilesMat[i][pos.col].getPiece()) {
                return false;
            }
        }
        // To right
        for(let i = pos.col + 1;i < size.col;i++) {
            if(tilesMat[pos.row][i].getPiece()) {
                return false;
            }
        }
        // To top
        for(let i = pos.row - 1;i >= 0;i--) {
            if(tilesMat[i][pos.col].getPiece()) {
                return false;
            }
        }
        // To left
        for(let i = pos.col - 1;i >= 0;i--) {
            if(tilesMat[pos.row][i].getPiece()) {
                return false;
            }
        }
        // To bottom right
        for(let i = pos.row + 1, j = pos.col + 1;i < size.row && j < size.col;i++, j++) {
            if(tilesMat[i][j].getPiece()) {
                return false;
            }
        }
        // To bottom left
        for(let i = pos.row + 1, j = pos.col - 1;i < size.row && j >= 0;i++, j--) {
            if(tilesMat[i][j].getPiece()) {
                return false;
            }
        }
        // To top right
        for(let i = pos.row - 1, j = pos.col + 1;i > size.row && j < size.col;i--, j++) {
            if(tilesMat[i][j].getPiece()) {
                return false;
            }
        }
        // To top left
        for(let i = pos.row - 1, j = pos.col - 1;i >= 0 && j >= 0;i--, j--) {
            if(tilesMat[i][j].getPiece()) {
                return false;
            }
        }
        return true;
    }
}

export default GameService;