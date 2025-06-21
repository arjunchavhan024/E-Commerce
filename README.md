# E-commerce Platform - Geer.in Inspired

A modern, high-performance e-commerce platform built with Next.js, featuring product management, responsive design, and a clean user interface.

## 📋 Project Overview

This project is an e-commerce platform inspired by [Geer.in](https://geer.in), developed as part of a Full Stack Developer internship assignment. The platform includes product listing, detailed product views, search functionality, and a complete backend API for product management.

## ✨ Features

### Frontend Features
- **Product Listing Page**: Display all products with images, names, and prices
- **Product Detail Page**: Individual product pages with detailed information
- **Search & Filter**: Real-time search and category filtering
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Modern UI**: Clean, professional design using shadcn/ui components
- **Performance Optimized**: Built with Next.js for optimal performance

### Backend Features
- **RESTful API**: Complete CRUD operations for products
- **Product Management**: Add, view, update, and delete products
- **Image Handling**: Support for product images
- **Data Validation**: Input validation and error handling
- **JSON Data Storage**: Persistent data storage using JSON files

## 🛠️ Tech Stack

### Frontend
- **Next.js 13.5** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form handling with validation

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Node.js** - JavaScript runtime
- **File System API** - JSON file-based data storage

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚦 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/geer-intern-assignment.git
   cd geer-intern-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔌 API Endpoints

### Products API

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| GET | `/api/products` | Get all products | - |
| POST | `/api/products` | Create new product | `{ name, price, description, imageUrl, category }` |
| GET | `/api/products/[id]` | Get product by ID | - |
| PUT | `/api/products/[id]` | Update product | `{ name, price, description, imageUrl, category }` |
| DELETE | `/api/products/[id]` | Delete product | - |

### Example API Usage

```javascript
// Get all products
const response = await fetch('/api/products');
const products = await response.json();

// Create a new product
const newProduct = {
  name: "Wireless Headphones",
  price: 99.99,
  description: "High-quality wireless headphones",
  imageUrl: "/images/headphones.jpg",
  category: "Electronics"
};

const response = await fetch('/api/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newProduct),
});
```

## 🎨 UI Components

The project uses shadcn/ui components for a consistent and modern design:

- **Card**: Product display cards
- **Button**: Interactive buttons with variants
- **Input**: Form input fields
- **Badge**: Category and status badges
- **Dialog**: Modal dialogs for forms
- **Toast**: Notification system
- **Skeleton**: Loading states

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 Search & Filter Features

- **Real-time Search**: Search products by name
- **Category Filter**: Filter products by category
- **Price Range**: Filter by price range
- **Sort Options**: Sort by price, name, or date added

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```
# Thank You !
