# 🚀 Repo Push Event Tracker

A webhook-powered service to track and store Git/Bitbucket **push events** in a PostgreSQL database. Built using **Express.js**, **Sequelize**, and **PostgreSQL**.

---

## 📌 Features

- ✅ Webhook endpoint to receive push events (`POST /webhooks/push`)
- ✅ Token-based validation using `X-Webhook-Token`
- ✅ Push event parsing and storage:
  - Repository name
  - Actor (user who pushed)
  - Branch name
  - Commit hash & message
  - Timestamp
- ✅ REST API to view stored push events
- ✅ Filters by `branch`, `repo`, `actor`
- ✅ Pagination & stats endpoint

---

## 🧠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Security**: Helmet, CORS, Token-based webhook auth
- **Tools**: ngrok (for local webhook testing)

---
