import EColor from "../models/color/EColor";

class ColorService {
    private colorsMap: Map<EColor, string>;

    constructor() {
        this.colorsMap = new Map();
        this.colorsMap.set(EColor.LightColor, '#CDAA7D');
        this.colorsMap.set(EColor.DarkColor, '#855E42');
    }

    getColorCode(color: EColor) {
        return this.colorsMap.get(color);
    }
}

export default ColorService;