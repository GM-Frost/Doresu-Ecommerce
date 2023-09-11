# Doresu Fashion E-commerce Website

This project is an ecommerce clothing website named "Doresu Fashion." It utilizes React with TypeScript and Vite for the frontend, Java Spring Boot for the backend, and MongoDB as the database. Additionally, it integrates the Stripe Payment Gateway for secure payments.

## Features

### Responsive Design

```
   - Ensures a responsive design for optimal user experience across devices.
```

### Login & Auth

```
    - Provides user authentication and authorization to secure user-specific actions.
    - Utilizes JWT Tokens for user authentication.
```

### Shopping Cart Component

For the Shopping Cart, the features includes:

- Display Added Items :

```
    - Displays items added to the shopping cart.
    - Allows users to add or remove items from the cart and update quantities.
    - Calculates the subtotal, taxes, shipping fees, and final total.
    - Stores cart data in the backend, associating it with the user's session or account.
```

- Wishlist Functionality :

```
    - Enables users to save products for later in a wishlist.
    - Allows adding or removing products from the wishlist.
    - Implements a wishlist management system on the backend.
```

- Checkout Functionality :

```
    - Implements a step-by-step checkout process with form validation and user-friendly feedback.
    - Collects shipping and billing details through a customer information form.
    - Integrates payment gateway options (e.g., Stripe, PayPal) for secure payment processing.
    - Creates orders and associates them with user accounts or sessions.
    - Displays a confirmation page with the order summary and order tracking information.
```

### Category for Products

```
    - Implements a category system for products to enable efficient searching and filtering.
    - Assigns appropriate categories to each product during product creation.
    - Develops filtering options on the frontend for users to view products by category.
    - Creates a category listing page with featured products and popular categories.
```

## Backend (Java Spring Boot)

### User Registration

```
    - Provides APIs for user registration.
    - Generates JWT tokens for user authentication.
```

### Product Management System

```
    - Manages product information with CRUD functionality..
    - Implements categorization and filtering of products.
    - Offers an admin interface and API endpoints for managing products and categories.
    - Features image upload, product description, pricing, and stock management.
```

### Sales

```
    - Stores purchase and customer details.

```

### State Management

```
    - Uses Redux Mutation for user registration and login.
    - Utilizes Redux Toolkit for Cart Functionality, Wishlist, and state management.
```

Feel free to contribute to the development of this ecommerce website and help improve its functionality.

### License

This project is licensed under the Nayan Bastola for Free Use.
