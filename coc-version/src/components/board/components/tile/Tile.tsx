import React from 'react';
import './Tile.css';

function Tile(props: { color: string; top: number; left: number; }) {
    const style = { '--tile-top': `${props.top}px`, '--tile-left': `${props.left}px` } as React.CSSProperties;
    return (
        <i className={`buildings-sprite tile tile-${props.color}`} style={style}></i>
    );
}

export default Tile;