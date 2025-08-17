# ShoppingCart 🛒

A clean, responsive shopping cart application built with React. Features a modern product grid, dynamic cart badge counter, and mobile-friendly navigation. Perfect for learning React components, state management, and responsive UI design.

![React](https://img.shields.io/badge/React-18.0+-blue.svg)
![CSS3](https://img.shields.io/badge/CSS3-Latest-orange.svg)

## 🚀 Demo

The application includes a hero section with background imagery, a product grid showcasing various items like sneakers, watches, backpacks, and electronics, all with add-to-cart functionality.

## 📦 Installation & Setup

Follow these steps to get the project up and running on your local machine:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Step-by-Step Installation

1. **Create the React Application**
   ```bash
   npx create-react-app shopping-cart
   ```

2. **Navigate to Project Directory**
   ```bash
   cd shopping-cart
   ```

3. **Install Dependencies**
   ```bash
   npm install react-router-dom
   ```

4. **Create Project Structure**
   Create the following folders and files:
   ```
   src/
   ├── components/
   │   ├── Navigation.jsx
   │   ├── Hero.jsx
   │   ├── Product.jsx
   │   └── Footer.jsx
   ```

5. **Update index.js**
   Replace the content of `src/index.js` with:
   ```jsx
   import React from 'react';
   import { createRoot } from 'react-dom/client';
   import App from './App';
   import './index.css';

   const container = document.getElementById('root');
   const root = createRoot(container);
   root.render(<App />);
   ```

6. **Update Global Styles**
   Replace the content of `src/index.css` with:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
   }

   body {
     background: #f5f5f5;
     color: #333;
   }

   a {
     text-decoration: none;
     color: inherit;
   }

   .container {
     max-width: 1200px;
     margin: 0 auto;
     padding: 20px;
   }

   .products-grid {
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
     gap: 24px;
   }

   button {
     transition: background 0.3s, transform 0.2s;
   }

   button:hover {
     transform: translateY(-2px);
   }

   nav {
     background: #fff;
     padding: 12px 24px;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
     display: flex;
     justify-content: space-between;
     align-items: center;
   }

   nav h1 {
     font-weight: 600;
     font-size: 1.5rem;
   }

   nav ul {
     list-style: none;
     display: flex;
     gap: 20px;
   }

   nav ul li a {
     padding: 6px 10px;
     border-radius: 4px;
   }

   nav ul li a:hover {
     background: #333;
     color: #fff;
   }

   @media(max-width: 768px) {
     nav ul {
       display: none;
     }

     nav .menu-toggle {
       display: block;
     }
   }
   ```

7. **Start Development Server**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`


## 🧩 Components Overview

### Navigation Component
- **Features**: Responsive navigation bar with mobile menu toggle
- **Props**: `count` - Number of items in cart for badge display
- **Functionality**: Toggle mobile menu, cart icon with dynamic counter

### Hero Component
- **Features**: Full-width hero section with background image
- **Styling**: Overlay text with shadow for readability
- **Responsive**: Adapts to different screen sizes

### Product Component
- **Features**: Individual product card with image, name, price, and add button
- **Props**: `product` (object), `onAdd` (function)
- **Styling**: Card layout with hover effects and rounded corners

### Footer Component
- **Features**: Simple footer with copyright information
- **Styling**: Dark background with centered text

### App Component (Main)
- **State Management**: Manages cart items using React useState hook
- **Functions**: `addToCart`, `removeFromCart` for cart operations
- **Data**: Sample product array with 8 different items

## 🎨 Styling Features

- **Typography**: Poppins font family for modern look
- **Color Scheme**: Minimalist design with #333 primary and #fff secondary colors
- **Animations**: Smooth hover transitions and transform effects
- **Responsive Design**: CSS Grid and Flexbox for flexible layouts

## 🛠️ Technologies Used

- **React 18+**: Latest React with functional components and hooks
- **CSS3**: Modern CSS with Grid, Flexbox, and animations
- **JavaScript ES6+**: Modern JavaScript features
- **Google Fonts**: Poppins font family
- **SVG Icons**: Inline SVG for menu and cart icons
