# PropChain

Property management platform with React frontend and Node.js backend.

## Quick Start

### 1. Install Dependencies

```bash
npm run install:all
```

This installs both frontend and backend dependencies.

### 2. Configure Backend (Optional)

Create `server/.env` file:

```env
MYSQL_HOST=localhost
MYSQL_USERNAME=your_username
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=insurance
PORT=8000
```

**Note:** Server will start without database connection.

### 3. Run Project

```bash
npm start
```

This starts both:

- **Frontend** at `http://localhost:5173`
- **Backend API** at `http://localhost:8000`

## Available Scripts

- `npm run install:all` - Install all dependencies
- `npm start` - Run both frontend and backend

## Project Structure

```
propchain/
├── src/          # React frontend
├── server/       # Express backend
└── package.json  # Root package.json
```

---

**That's it! Happy coding! 🚀**

**WalletProvider Overview**

The WalletProvider is a React context provider that manages all wallet-related state and actions across the application. It serves as a centralized store for wallet connections, keeping track of the user’s connected wallets, the currently active wallet, and handling persistence via localStorage.

By exposing this shared context through useWallet(), components like the Dashboard and Navbar can easily access and modify wallet information without requiring prop drilling. It also includes logic to open and manage the WalletDialog component, allowing users to view, add, or switch wallets through a unified interface.

In short, WalletProvider acts as the single source of truth for wallet management — making wallet state reusable, consistent, and accessible across the app.
