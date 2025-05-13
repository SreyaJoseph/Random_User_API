# Random User Directory

A simple web application built with **Next.js** that fetches and displays random user data from the [Random User API](https://randomuser.me/). Users can search and select from a dropdown list to view detailed information.

## Features

- Fetches 100 random users from the Random User API.
- Live search functionality by first name.
- Dropdown list of users with dynamic filtering.
- Displays selected user's profile, contact details, and location.
- Clean and responsive UI.

## Tech Stack

- **Next.js** (React Framework)
- **Axios** for API requests
- **CSS** for styling
- **Random User API** for user data

## Project Structure

random-user-directory/
├── components/
│ ├── Dropdown.js # Dropdown and search input
│ └── UserDetails.js # Selected user's details display
├── pages/
│ ├── index.js # Home page logic
│ └── _app.js # Global styles import
├── styles/
│ └── globals.css # CSS styles
├── public/
│ └── screenshot.png # (Optional) Screenshot for README
├── package.json
└── README.md


## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/random-user-directory.git
   cd random-user-directory

    Install dependencies
2. **Install dependencies**
   ```bash
    npm install

3. **Run the development server**
   ```bash
   npm run dev

4. **Open your browser and visit:** http://localhost:3000


## API Used

    https://randomuser.me/api/

## Dependencies

   - axios
   - react
   - next
     

## Customization

You can customize the project by:

    Filtering by last name, gender, or country.

    Adding pagination or infinite scroll.

    Including more details like birth date, address, etc.

