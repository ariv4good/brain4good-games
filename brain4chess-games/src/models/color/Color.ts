import EColor from './EColor';
import IColor from './IColor';

class Color implements IColor {
    private color: EColor;
    private colors: Map<EColor, string>;

    constructor(color: EColor) {
        this.color = color;
        this.colors = new Map();
        this.colors.set(EColor.LightColor, '#CDAA7D');
        this.colors.set(EColor.DarkColor, '#855E42');
    }

    getColor() {
        return this.color;
    }

    getColorCode() {
        return this.colors.get(this.color) as string;
    }
}

export default Color;