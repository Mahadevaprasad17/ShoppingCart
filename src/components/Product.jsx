import React from 'react';

export default function Product({ product, onAdd }) {
    return (
        <div style={{
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '15px',
            textAlign: 'center',
            flex: '1 1 200px'
        }}>
            <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '4px' }} />
            <h3 style={{ margin: '10px 0', fontWeight: 400 }}>{product.name}</h3>
            <p style={{ fontWeight: 600 }}>${product.price}</p>
            <button onClick={() => onAdd(product)} style={{
                marginTop: '10px',
                padding: '8px 12px',
                background: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>Add to Cart</button>
        </div>
    );
}
