import React from 'react';

export default function Tooltip({ el, sx, triangleSx }) {
    return (
        <div style={{ ...sx }}>
            <div
                style={{
                    content: ' ',
                    position: 'absolute',
                    marginLeft: '-5px',
                    borderWidth: '5px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                    borderBottomColor: 'rgba(0, 0, 0, 0.7)',
                    ...triangleSx,
                }}
            />
            {el}
        </div>
    );
}
