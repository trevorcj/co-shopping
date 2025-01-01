# Co-Shopping

#### Video Demo: [Click here](https://youtu.be/of3IxiPz0YQ?si=od7ooKMoUR1NAApQ)

**Co-Shopping** is a collaborative shopping list web application built with HTML, CSS, JavaScript, and Firebase Realtime Database. It allows users to create, share, and manage shopping lists in real-time. The web app features seamless synchronization, enabling users to see updates instantly as items are added or removed from the list.

## Features

- **Add Items:** Users can input items and update the shared list.
- **Real-Time Updates:** Changes are reflected instantly for all users.
- **Remove Items:** Clicking on an item removes it from the list.
- **Responsive Design:** Clean and user-friendly interface optimized for all devices.

## Technologies Used

- **HTML, CSS, JavaScript:** For the frontend.
- **Firebase Realtime Database:** Provides backend functionality for real-time synchronization.

## Choices

Initially, I considered using LocalStorage to manage the shopping list. However, LocalStorage only stores data locally on a user’s device, which meant no updates could be shared between users in real-time. This limitation made it unsuitable for a collaborative app like Co-Shopping."

To overcome this, I implemented Firebase Realtime Database. Unlike LocalStorage, Firebase provides a centralized cloud-based solution that allows multiple users to access and update the same data in real-time. I was able to ensure that any changes made by one user are immediately visible to all other users, creating a seamless collaborative experience.

## Files

- `index.html`: Main structure of the app.
- `index.css`: Styling for the app's user interface.
- `index.js`: JavaScript logic, including Firebase integration.
- `site.webmanifest`: Web manifest for progressive web app functionality.

## Usage

1. Open the app in your browser. [Click to open](https://trevorcj.github.io/co-shopping/)
2. Enter an item into the input field and click "Add to cart" to update the list.
3. View and manage the shopping list in real-time.
4. Click on any item to remove it from the list.

## Setup

### Prerequisites

- A Firebase account.
- Web browser to run the application.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/trevorcj/co-shopping.git
   ```
2. Navigate to the project directory:

   ```bash
   cd co-shopping
   ```

3. Open the index.html file in your browser to start the app.

### Firebase setup

1. Create a Firebase project at [Firebase Console](console.firebase.google.com) (the name is up to you).

2. Set up Firebase Realtime Database and copy the database URL.

3. Replace the databaseURL in index.js with your Firebase database URL from step 2:

   ```javascript
   const appSettings = {
     databaseURL: "your-database-url",
   };
   ```

## Live Demo

[Co-Shopping Live Demo](https://trevorcj.github.io/co-shopping/)

---

If you have any questions, feedback, or would like to connect, feel free to reach out:

- **Email**: [trevorcjustus@gmail.com](mailto:trevorcjustus@gmail.com)
- **LinkedIn**: [Connect on LinkedIn](https://ng.linkedin.com/in/trevorcjustus)

I’m always open to constructive feedback and opportunities to improve. Let’s collaborate and build something amazing together.

---

### Acknowledgments

This project was developed as part of CS50x, and I’m grateful for the learning experience and resources provided by the course team.
