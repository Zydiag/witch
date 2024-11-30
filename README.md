# Witch - Live Streaming Platform

A modern, feature-rich live streaming platform built with Next.js 14, React, and LiveKit. This project was inspired by and built following the excellent tutorial series by [Code With Antonio](https://www.youtube.com/@codewithantonio).

![image](https://github.com/user-attachments/assets/c4c74566-57f9-4285-b9c9-dfd59b6c8575)


## 🌟 Features

- **Live Streaming**

  - RTMP/WHIP Protocol Support
  - Low-latency streaming
  - Multi-quality streaming
  - Stream health monitoring

- **User Interaction**

  - Real-time chat
  - Follow system
  - Block capabilities
  - Customizable stream settings

- **Advanced Security**
  - Secure authentication with Clerk
  - Stream key management
  - Chat moderation tools
  - Rate limiting

## 🚀 Tech Stack

- **Frontend**

  - Next.js 14 (App Router)
  - React
  - TailwindCSS
  - TypeScript

- **Backend**

  - LiveKit (Streaming)
  - Prisma (ORM)
  - PostgreSQL
  - WebSocket

- **Authentication**
  - Clerk

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- PostgreSQL database
- LiveKit account and credentials
- Clerk account and credentials

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/witch.git
   cd witch
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Fill in your environment variables:

   ```env
   DATABASE_URL=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   LIVEKIT_API_KEY=
   LIVEKIT_API_SECRET=
   NEXT_PUBLIC_LIVEKIT_WS_URL=
   ```

4. **Initialize the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

This project can be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://witch-one.vercel.app/)

## 👏 Credits

This project was built following the excellent tutorial series by [Code With Antonio](https://www.youtube.com/@codewithantonio). Check out his YouTube channel for amazing web development content!

## 🤝 Contributing

Contributions are welcome!

## 📬 Contact

- Project Link: [https://github.com/zydiag/witch](https://github.com/zydiag/witch)

## 🙏 Acknowledgments

- [Code With Antonio](https://www.youtube.com/@codewithantonio) - For the excellent tutorial and inspiration
- [LiveKit](https://livekit.io) - For the amazing streaming infrastructure
- [Clerk](https://clerk.dev) - For authentication
- [Prisma](https://prisma.io) - For the ORM
- [Next.js](https://nextjs.org) - For the framework

---

Built with ❤️ using Next.js and LiveKit
