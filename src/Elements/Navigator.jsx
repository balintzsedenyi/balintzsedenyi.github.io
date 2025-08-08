import { useEffect, useState } from 'react';
import { LuPanelLeftOpen, LuPanelRightOpen, LuCircleX } from 'react-icons/lu';
import Tooltip from './Tooltip';
import Button from './Button';

export default function Navigator() {
    const [isOpen, setIsOpen] = useState(true);
    const [tooltipSeen, setTooltipSeen] = useState(false);

    useEffect(() => {
        const menuEl = document.getElementById('side-menu');
        if (isOpen) {
            menuEl.classList.add('opened');
            menuEl.classList.remove('closed');
        } else {
            menuEl.classList.add('closed');
            menuEl.classList.remove('opened');
        }
    }, [isOpen]);

    return (
        <div id={'side-menu'} className={'glassy menu'}>
            <Tooltip
                el={
                    <div style={{ padding: '15px', textAlign: 'center' }}>
                        <LuCircleX size={15} style={{ position: 'absolute', top: '5', right: '5' }} />
                        {"If you don't find the menu, try clicking here"}
                    </div>
                }
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '35px',
                    borderRadius: '10px',
                    position: 'relative',
                    top: '43%',
                    left: '102%',
                }}
                triangleSx={{
                    bottom: '-15.5%',
                    left: '5%',
                    transform: 'rotate(180deg)',
                }}
            />
            <div className='glassy menu-opener flex-center clickable' onClick={() => setIsOpen((p) => !p)}>
                {isOpen ? <LuPanelRightOpen className='btn-content' size={20} /> : <LuPanelLeftOpen className='btn-content' size={20} />}
            </div>
        </div>
    );
}
