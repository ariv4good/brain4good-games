import EColor from "../color/EColor";
import IPiece from "../piece/IPiece";

interface ITile {
    getColor(): EColor,
    getPiece(): IPiece | undefined
}

export default ITile;