# PayPro: Payment Management System

PayPro is a secure and scalable payment management system designed for smooth transactions, robust authentication, and real-time updates. The project uses Express.js for the backend and React.js for the frontend, with MongoDB as the database.

## Features
- Smooth and atomic transactions using Mongoose transactions.
- Secure authentication and session management with JWT and cookies.
- Protection against CSRF attacks using `SameSite` attributes and HTTP-only cookies.
- Centralized error handling for efficient debugging and error management.
- Real-time transaction updates and a user-friendly interface.

---

## Installation

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine.
- **MongoDB**: Install and set up a MongoDB instance.

### Steps to Set Up the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/paypro.git
   cd paypro
   ```

2. **Backend Setup:**
   ```bash
   cd api
   npm install
   ```

3. **Frontend Setup:**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Variables:**
   Set up `.env` files in the `api` folder. Example:

   **`api/.env`**:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   COOKIE_SECRET=your_cookie_secret
   ```

5. **Run the Backend Server:**
   ```bash
   cd ../api
   npm start
   ```

6. **Run the Frontend Development Server:**
   ```bash
   cd ../client
   npm start
   ```


## Scripts

### Backend
- **`npm start`**: Starts the Express.js server.
- **`npm run dev`**: Starts the server in development mode with nodemon.

### Frontend
- **`npm start`**: Starts the React development server.

---

## Future Enhancements
- Add real-time transaction tracking with WebSockets.
- Implement payment gateways for direct payment integration.
- Enhance the UI/UX with more animations and responsiveness.

---

## License
This project is licensed under the [MIT License](LICENSE).  

Happy coding! 🚀
