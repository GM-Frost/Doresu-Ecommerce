# Doresu Fashion E-commerce Website

This project is an ecommerce clothing website named "Doresu Fashion." It utilizes React with TypeScript and Vite for the frontend, Java Spring Boot for the backend, and MongoDB as the database. Additionally, it integrates the Stripe Payment Gateway for secure payments.

![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/e677b510-5941-4e10-a048-11e90dd8c505)


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
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/1a437843-8e26-4fb5-88e4-bb6cc8ade6ff)
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/9f7fd2bf-f6c3-4112-b46f-f1d18e47f5b5)

### Shopping Cart Component

![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/6ee1cb5f-a82b-4d33-a966-3483e8ff3954)

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
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/c37fb1d4-4ae4-481f-9475-7d129b81f16e)

- Checkout Functionality :



```
    - Implements a step-by-step checkout process with form validation and user-friendly feedback.
    - Collects shipping and billing details through a customer information form.
    - Integrates payment gateway options (e.g., Stripe, PayPal) for secure payment processing.
    - Creates orders and associates them with user accounts or sessions.
    - Displays a confirmation page with the order summary and order tracking information.
```
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/001452ee-8694-49ee-ac76-ebe3556e749e)
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/161a030b-4417-40b7-9692-f5e4453402b6)
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/a424a7cd-130d-4bc0-b130-684d844b4b11)

### Category for Products
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/7f110aa4-084f-4fc8-bb98-d7a1fffd9872)

![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/3e76304b-4b6d-458b-a324-0261407cbad7)

```
    - Implements a category system for products to enable efficient searching and filtering.
    - Assigns appropriate categories to each product during product creation.
    - Develops filtering options on the frontend for users to view products by category.
    - Creates a category listing page with featured products and popular categories.
```
### Admin Dashboard:
### Dashboard
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/1cd15fe3-33ea-4f6f-9814-cab079946e70)
### Register Admin
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/f34339fd-c21b-45cc-b84a-9b4808cf54e3)

###Products
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/50e64d5d-8088-40c5-b28f-a7a6f719f70d)
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/7ce3875c-3a42-4c85-92f2-1d24817f0da7)

### Orders
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/30c671d9-a9f3-4e49-a46d-cd72121ad56e)
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/2d8302bc-0e59-49aa-946c-690fd25f0190)


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
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/21cf14ca-8a93-43c5-a7fc-d2c160268bb3)
![Untitled](https://github.com/GM-Frost/Doresu-Ecommerce/assets/110303752/92c85fd7-5142-4c7a-8c9f-967181c1c376)

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
