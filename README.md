# My Image Gallery App

My Image Gallery is a web application that allows users to manage and organize their image collections. It provides features for sorting and searching for images based on tags.

![App Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Built With](#built-with)

## Features

- **Sorting:** Images can be sorted using drag-and-drop functionality.
- **Search:** Users can search for images by entering tags, and the app will display matching results.
- **Authentication:** Secure user authentication using Firebase.

## Getting Started

Follow these instructions to set up and run the app on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/my-image-gallery.git
   ```

2. Navigate to the project directory:

   ```shell
   cd my-image-gallery
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the development server:

   ```shell
   npm start
   ```

   The app will be available at http://localhost:3000 by default.

2. Open your web browser and navigate to http://localhost:3000 to access the app.

3. Sign up if you do not already have an account or log in to start using the image gallery features.

4. Drag and drop images.

## Authentication

My Image Gallery uses Firebase for user authentication using email and password. Firebase provides a secure and reliable authentication system. Users can sign up for an account or log in with their existing credentials.

## Built With

React - A JavaScript library for building user interfaces.
Firebase - A platform for building web and mobile applications, including authentication and hosting.
Tailwind CSS - A utility-first CSS framework for quickly designing custom user interfaces.
Dnd Kit - for the drg and drop feature.
