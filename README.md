# Time Tracking App

## Overview
This is a simple time-tracking web application built using Next.js, React, and Tailwind CSS. It allows users to log daily tasks with fields for task ID, project, status, description, date, time spent, and developer. The application includes features for saving and managing tasks.

---

## Features

- **Daily Task Entry**: Input fields to log task details such as task ID, project, status, description, date, time spent, and developer.
- **Date Picker**: Seamlessly select dates using a React Date Picker.
- **Dynamic Validation**: Ensures required fields are filled before submission.
- **Responsive Design**: Built with Tailwind CSS for mobile-first, responsive UI.
- **Data Persistence**: Saves task details via API to the server.

---

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend**:
  - Node.js
  - API for saving tasks
- **Utilities**:
  - [React Date Picker](https://reactdatepicker.com/)
  - [Heroicons](https://heroicons.com/)

---

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo-url.git
   cd time-tracking-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_database_connection_string
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## Project Structure

```
.
├── public
│   ├── images
│   └── favicon.ico
├── src
│   ├── components
│   │   └── Sidebar.js
│   ├── pages
│   │   ├── api
│   │   │   └── saveTask.js
│   │   └── index.js
│   └── styles
│       └── globals.css
├── .env
├── next.config.js
├── package.json
└── README.md
```

---

## Usage

1. Open the app in your browser.
2. Fill out the task details form.
3. Click **Save Task** to save the details.
4. A confirmation message will appear if the task is saved successfully.

---

## Screenshots


## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Acknowledgments

- [Unsplash](https://unsplash.com/) for placeholder images.
- [Heroicons](https://heroicons.com/) for free icons.

