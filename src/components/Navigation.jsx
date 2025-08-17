import React, { useState } from 'react';

export default function Navigation({ count }) {
    const [open, setOpen] = useState(false);

    const menuButton = (
        <button
            onClick={() => setOpen(!open)}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'block',
                padding: 0,
            }}
        >
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
        </button>
    );

    return (
        <nav style={{
            background: '#fff',
            padding: '12px 24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative'
        }}>
            <h1 style={{ fontWeight: 600, fontSize: '1.5rem' }}>CartX</h1>

            <div className="menu-toggle" style={{ display: 'none' }}>
                {menuButton}
            </div>

            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '20px',
                margin: 0,
                padding: 0,
                flexDirection: open ? 'column' : 'row',
                position: open ? 'absolute' : 'static',
                top: open ? '60px' : 'auto',
                left: open ? 0 : 'auto',
                right: open ? 0 : 'auto',
                background: open ? '#fff' : 'none',
            }}>
                <li><a href="#home" style={{ padding: '6px 10px', borderRadius: '4px' }}>Home</a></li>
                <li><a href="#Product" style={{ padding: '6px 10px', borderRadius: '4px' }}>Shop</a></li>
                <li><a href="#about" style={{ padding: '6px 10px', borderRadius: '4px' }}>About</a></li>
                <li><a href="#contact" style={{ padding: '6px 10px', borderRadius: '4px' }}>Contact</a></li>
            </ul>

            <button style={{
                background: 'none',
                border: 'none',
                position: 'relative',
                cursor: 'pointer'
            }}>
                <svg width="24" height="24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {count > 0 && (
                    <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-10px',
                        background: '#ff5050',
                        color: '#fff',
                        borderRadius: '50%',
                        padding: '2px 6px',
                        fontSize: '12px'
                    }}>{count}</span>
                )}
            </button>

            <style>
                {`
          @media (max-width: 768px) {
            .menu-toggle { display: block; }
            nav ul { display: ${open ? 'flex' : 'none'}; }
          }
        `}
            </style>
        </nav>
    );
}
