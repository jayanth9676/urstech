# `URSTECH` Contact Management System

This project is a full-stack application for managing contacts, integrating with FreshSales CRM and a local database. It features a Node.js backend with Express and a Next.js frontend with Tailwind CSS.

`CODE`: https://github.com/jayanth9676/urstech_task2

CHECK OUT THE FRONTEND FOR `TASK 2`: https://drive.google.com/file/d/1RI7RRy2gOwcxT626xABrwp6qGsyhUeQ5/view?usp=sharing

## Project Structure

```
urstech/
├── backend/
│ └── src/
│ └── app.js
└── frontend/
├── pages/
│ ├── app.js
│ ├── app.tsx
│ ├── index.js
│ ├── index.tsx
│ └── contact.js
├── styles/
│ └── globals.css
├── tailwind.config.js
└── package.json
```

## Backend

The backend is built with Node.js and Express.js, providing API endpoints for contact management.

### Setup and Running

1. Navigate to the `backend` directory
2. Install dependencies: `npm install`
3. Create a `.env` file with necessary environment variables
4. Start the server: `npm start`

### API Endpoints

- `POST /api/createContact`: Create a new contact
- `GET /api/getContact`: Retrieve a contact
- `POST /api/updateContact`: Update a contact
- `POST /api/deleteContact`: Delete a contact

## Frontend

The frontend is developed using Next.js and styled with Tailwind CSS.

### Setup and Running

1. Navigate to the `frontend` directory
2. Install dependencies: `npm install`
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

### Key Files

- `pages/_app.js` & `pages/_app.tsx`: Main application component
- `pages/index.js` & `pages/index.tsx`: Home page
- `pages/contact.js`: Contact management page
- `styles/globals.css`: Global styles
- `tailwind.config.js`: Tailwind CSS configuration

## Technologies

- Backend: Node.js, Express.js
- Frontend: Next.js, React.js, Tailwind CSS
- Database: To be implemented (MongoDB or MySQL)
- External API: FreshSales CRM

## Features

- CRUD operations for contacts
- Integration with FreshSales CRM API
- Responsive UI design using Tailwind CSS

## Next Steps

1. Implement the backend API endpoints
2. Set up database connection (MongoDB or MySQL)
3. Complete FreshSales CRM API integration
4. Develop frontend components and pages
5. Implement error handling and data validation
6. Add user authentication and authorization
7. Create comprehensive tests

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
