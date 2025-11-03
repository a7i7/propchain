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
