import EColor from "../color/EColor";
import IPiece from "../piece/IPiece";

interface ITile {
    getColor(): EColor,
    setPiece(piece: IPiece): ITile,
    getPiece(): IPiece | undefined
}

export default ITile;