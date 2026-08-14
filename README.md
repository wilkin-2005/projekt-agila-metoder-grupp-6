# WebShop – Part 1 – Admin

An admin interface for a webshop where products can be viewed and managed. The project was built as part of the Agile Methods course and focuses on collaboration, planning, and a Scrum-based workflow.

## 📝 About the project

This application is an admin tool for managing a webshop product catalogue. The interface displays an overview of products and their stock status, together with a paginated product list.

The project is built with **Next.js** and retrieves product data from a local API powered by **JSON Server**. The data is based on products from [DummyJSON](https://dummyjson.com/docs/products), but has been adapted to fit the needs of this project.

## 📝 The assignment

The goal is to build the admin pages for a webshop based on the provided design sketch. The application should retrieve product data from an API and eventually provide CRUD functionality for the products.

### Technical requirements

1. **Architecture:** Use Server Components for data fetching and Client Components for interactivity.
2. **Forms:** Use forms for filters and for creating or editing data through the API.
3. **Data:** Products should be readable, creatable, updatable, and deletable through the API.
4. **URL State Management:** Search, filtering, and sorting should be handled through `searchParams`.

## ✨ Current functionality

- [x] Fetch product data from the local JSON Server API
- [x] Display an overview of the total number of products
- [x] Display an overview of products that are in stock, low in stock, and out of stock
- [x] Display product image, SKU, brand, category, stock status, and price in the product list
- [x] Paginate the product list
- [x] Use Server Components for data fetching
- [x] Use Client Components for table and pagination interactions
- [x] Generate an ID, SKU, and metadata when a product is created through the middleware
- [ ] Connect product search to the API
- [ ] Connect the category filter to the API
- [ ] Connect the stock status filter to the API
- [ ] Handle search, filtering, and sorting through `searchParams`
- [ ] Create new products through a form
- [ ] Edit existing products through a form
- [ ] Delete products
- [ ] Complete CRUD functionality for products

The filter form is present in the interface but is not yet connected to the product API request. The CRUD functionality is therefore still under development.

## 🛠️ Technologies

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [JSON Server](https://github.com/typicode/json-server/tree/v0.17.4)
- [Lucide React](https://lucide.dev/) for icons
- CSS and Tailwind CSS configuration

### Architecture

The project uses Server Components for data fetching and Client Components for interactivity. Product data is fetched in `app/page.tsx` through `app/lib/products.ts`, while the table and pagination use Client Components for browser-side interactions.

## 🚀 Getting started

### Prerequisites

You need to have the following installed:

- [Node.js](https://nodejs.org/) – version 20 or later is recommended
- npm

### Run the project

Start both the Next.js application and JSON Server with:

```bash
npm run dev:full
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

The local API runs at [http://localhost:4000](http://localhost:4000). Product data is available at:

```text
http://localhost:4000/products
```

You can also start the services separately:

```bash
npm run dev          # Starts Next.js
npm run mock-server  # Starts JSON Server
```

## 📁 Project structure

```text
app/
├── components/              # Reusable UI components
├── lib/products.ts          # Fetches product data from the API
├── page.tsx                 # Main application page
├── layout.tsx               # Shared layout and page header
├── types.ts                 # TypeScript types for products and categories
└── globals.css              # Global styles

server/
├── products.json            # Mock data for products and categories
└── middleware.js            # Pagination, validation, and SKU generation
```

## 🔄 Workflow

The project is developed using an agile workflow based on Scrum.

- **GitHub Projects:** Tasks are planned, divided into smaller parts, and tracked on the project board.
- **Branching:** Features are developed in feature branches and are not merged directly into `main`.
- **Commits:** Commit messages should be clear and describe the change.
- **Pull Requests:** Completed tasks are submitted as Pull Requests.
- **Code Reviews:** Every Pull Request must be reviewed and approved by at least one other group member before it is merged.

## 📅 Timeline

- **Course week 13:** Planning, setup, and the initial codebase. The list page was created without completed filtering, search, or pagination.
- **Course week 15:** Client Components and URL State Management are used for search, filters, and pagination.
- **Course week 16:** CRUD functionality and forms in Next.js are completed ahead of the final demonstration.

## 👩‍💻 Group members

- Georgij Li
- Leo Leksell
- Mervin Bratic
- Wilmer Kindstedt

## 🏞️ Design sketch

![Design sketch](/dev_notes/skiss.png)

## 📚 Related links

- [Project GitHub repository](https://github.com/Lexicon-Utbildning-Front-end-2026/Webshop-admin)
- [Starter code](https://github.com/Lexicon-Utbildning-Front-end-2026/projekt-agila-metoder-startkod)
- [DummyJSON Products API](https://dummyjson.com/docs/products)
