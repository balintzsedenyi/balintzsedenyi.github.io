import React from 'react';

export default function Button({ el, color, clckFnc }) {
    return <button onClick={clckFnc} style={{ all: 'unset', color: color }}>{el}</button>;
}
