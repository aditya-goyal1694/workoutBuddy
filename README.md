
# Workout Buddy

Workout Buddy is a web application developed using the MERN stack—MongoDB, Express.js, React, and Node.js. It allows users to manage their workouts by adding new entries through a user-friendly form and deleting workouts with a simple click on the trash icon.

## Features

- **Add New Workouts**: Easily add new workouts using a straightforward form.
- **Delete Workouts**: Remove workouts effortlessly by clicking the trash icon next to each entry.
- **Responsive Design**: Enjoy a seamless experience across various devices with a responsive layout.

## Technologies Used

- **MongoDB**: A NoSQL database for storing workout data.
- **Express.js**: A web application framework for Node.js to handle server-side logic.
- **React**: A JavaScript library for building interactive user interfaces on the frontend.
- **Node.js**: A JavaScript runtime for building the server-side application.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/workout-buddy.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd workout-buddy
   ```

3. **Install Backend Dependencies**:

   ```bash
   cd backend
   npm install
   ```

4. **Install Frontend Dependencies**:

   ```bash
   cd ../frontend
   npm install
   ```

## Setup

1. **Backend Setup**:

   - Navigate to the `backend` directory.
   - Create a `.env` file and add your MongoDB URI:

     ```
     MONGO_URI=your_mongodb_uri
     ```

   - Start the backend server:

     ```bash
     npm start
     ```

2. **Frontend Setup**:

   - Navigate to the `frontend` directory.
   - Start the frontend development server:

     ```bash
     npm start
     ```

   - The application will be accessible at `http://localhost:3000`.

## Usage

- **Adding a Workout**:
  - Fill out the workout details in the provided form.
  - Submit the form to add the workout to your list.

- **Deleting a Workout**:
  - Click the trash icon next to the workout to remove it.
