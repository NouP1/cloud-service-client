# 🧠 Cloud Service — SaaS облачное хранилище файлов

Этот проект — pet-проект, представляющий собой полноценный **SaaS сервис для облачного хранения файлов**, разработанный с использованием современных технологий **SSR** и аутентификации c PassportJS.


![Снимок экрана 2025-04-06 234755](https://github.com/user-attachments/assets/5f842358-5b2e-46e8-8f9a-d5b0f3e7c0f0)
![Снимок экрана 2025-04-06 234743](https://github.com/user-attachments/assets/7bca32af-1bae-42a3-8bec-4e65c5fbc8ca)
![Снимок экрана 2025-04-06 234726](https://github.com/user-attachments/assets/86152911-ccc6-4fbc-bbfb-4bf93c303192)
![Снимок экрана 2025-04-06 234714](https://github.com/user-attachments/assets/9c34655b-e109-429b-b0c0-f0c2d0111099)
![Снимок экрана 2025-04-06 234818](https://github.com/user-attachments/assets/37991793-53e8-45a4-94cd-f552e64912c1)

##  Архитектура
 - Dependency Injection
 - Модульная архитектура
 - Разделение ответственности в контексте многослойной архитектуры

## 📦 Особенности

- 🔐 Защищённые маршруты с использованием **JWT** и **Passport JS**
- ⬆️ Возможность загружать файлы с ограничением по размеру
- 🗂 Просмотр, выбор и мягкое удаление файлов (с сохранением в БД)
- 🌈 Приятный интерфейс с **Ant Design** и **SCSS-модулями**
- 🧠 SSR-рендеринг через **Next.js**
- ⚙️ Backend построен на **NestJS**
- 💾 Хранение данных в **PostgreSQL**, управление через **TypeORM**

---

## 🛠 Технологии

| Стек | Используемое решение |
|------|----------------------|
| Frontend | Next.js, React, Ant Design, SCSS Modules |
| Backend  | NestJS, TypeORM, PostgreSQL |
| Auth     | JWT + Passport JS |
| SSR      | ✅ Да |
| ORM      | TypeORM |
| БД       | PostgreSQL |




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
