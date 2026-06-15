<h1 align="center">📝 MERN Stack Note Taking App ✨</h1>

<p align="center">
  A beginner-friendly full-stack note-taking app — create, update, and delete notes with ease! 🎉
</p>

![Demo App](/frontend/public/screenshot-for-readme.png)

---

## 🌟 About the Website

- 🧱 **Full-Stack with MERN** — MongoDB, Express, React, and Node all in one project
- ✨ **Full CRUD** — Create, update, and delete notes with a title & description
- 🛠️ **REST API** — Build and test a fully functional backend from scratch
- ⚙️ **Rate Limiting** — Powered by Upstash Redis, explained in a beginner-friendly way
- 🚀 **Responsive UI** — Looks great on any screen size


---

## 🚀 Getting Started

### 1. 🧪 Set Up Your Environment Variables

Create a `.env` file inside the `/backend` folder and fill in your credentials:

```env
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```

> 💡 Don't have these yet? No worries — follow the setup guides below!

---

### 2. ⚙️ Set Up Upstash Redis (Free & Easy!)

Upstash Redis is used for rate limiting — it keeps your API safe from being overwhelmed with too many requests.

Here's how to get your free Redis instance:

1. 👉 Go to [https://console.upstash.com](https://console.upstash.com) and sign up for a **free account**
2. Click **"Create Database"**
3. Give it a name (e.g. `notes-app-redis`) and choose a region close to you
4. Once created, scroll down to the **"REST API"** section
5. Copy your **`UPSTASH_REDIS_REST_URL`** and **`UPSTASH_REDIS_REST_TOKEN`**
6. Paste them into your `.env` file — that's it! 🎉

> 🔒 Keep these values secret! Never commit your `.env` file to GitHub.

---

### 3. 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

Your API will be running at `http://localhost:5001` 🟢

---

### 4. 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Open your browser and visit `http://localhost:5173` to see the app in action! 🎨

---

## 🙌 You're All Set!

If you run into any issues, double-check your `.env` values and make sure both servers are running. Happy coding! 💪