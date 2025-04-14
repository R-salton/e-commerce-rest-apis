# e-commerce-rest-apis
## Overview

This project provides a set of RESTful APIs for managing an e-commerce platform. These APIs allow users to perform various operations such as managing products, handling orders, and processing user accounts. The backend is built using PostgreSQL as the database and is designed to be scalable and efficient.

## Features

- **Product Management**: Add, update, delete, and retrieve product details.
- **Order Management**: Create, update, and track customer orders.
- **User Management**: Register, authenticate, and manage user accounts.
- **Search and Filter**: Search for products and filter them by categories, price, and other attributes.
- **Secure Authentication**: Token-based authentication for secure access.

## API Endpoints

### Products
- `GET /api/products`: Retrieve a list of all products.
- `GET /api/products/:id`: Retrieve details of a specific product.
- `POST /api/products`: Add a new product (Admin and seller only).
- `PUT /api/products/:id`: Update an existing product (Admin and Seller only).
- `DELETE /api/products/:id`: Delete a product (Admin only).

### Orders
- `GET /api/orders`: Retrieve all orders (Admin only).
- `GET /api/orders/:id`: Retrieve details of a specific order.
- `POST /api/orders`: Create a new order.
- `PUT /api/orders/:id`: Update an existing order.
- `DELETE /api/orders/:id`: Cancel an order.

### Users
- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Authenticate a user and return a token.
- `GET /api/users/profile`: Retrieve the profile of the logged-in user.
- `PUT /api/users/profile`: Update the profile of the logged-in user.

## Deployment

These APIs are deployed on [Render](https://render.com), a cloud platform for hosting web applications. Render provides a reliable and scalable environment for running our backend services.

### Accessing the APIs

The base URL for the APIs is:

```
https://ecommerce-apis.onrender.com
```

You can use tools like Postman or cURL to interact with the APIs. Make sure to include the required authentication token for endpoints that require authorization.

## Authentication

The APIs use token-based authentication. After logging in, users receive a JSON Web Token (JWT) that must be included in the `Authorization` header of subsequent requests:

```
Authorization: Bearer <your-token>
```

## Database

The backend uses PostgreSQL as the database. Ensure that the database is properly configured and running before starting the application. Migrations are handled using a migration tool to keep the database schema up to date.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/e-commerce-rest-apis.git
    ```
2. Install dependencies:
    ```bash
    cd e-commerce-rest-apis
    npm install
    ```
3. Set up environment variables:
    Create a `.env` file and configure the required variables (e.g., database connection, JWT secret).
4. Run migrations:
    ```bash
    npm run migrate
    ```
5. Start the server:
    ```bash
    npm start
    ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.