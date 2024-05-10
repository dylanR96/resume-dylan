# Individuellt projekt react portfolio

## Introduction

Single-page application (SPA) features four views: Intro, About Me, Projects, and Contact.

### Intro Page

The Intro page greets users with an interactive dice roll. 
Roll a 3 or higher to enter, or simply use the Enter button to enter the page without rolling, however this switches the pages style to dark mode.
The button for entering without dark mode uses Redux to control state.
The page also features an animated border for the dice roll.

### About Me

The About Me page showcases a card with a picture of me and a fantasy inspired description of my gender, origin, and class. 
Users can navigate between my biography, stats, and skills using three buttons that utilize conditional rendering.

### Projects

The Projects page divides content into Main Quests, Side Quests, and Completed Quests. 
Main Quests present a fictional story of being hired as a frontend developer. 
Side Quests display current GitHub repositories in progress, while Completed Quests show finished repositories.

### Contact

The Contact page includes a simple contact form with fields for name, number, email, reason for contact, and a personal message textarea. 
Upon submission, a success message is displayed using the Toast package.

## Navigation

Each page features a navigation bar for navigation. Additionally, a button allows users to toggle dark mode, with their preference stored in local storage.
This button also uses redux control state.

## Packages Used

- Toast: for displaying success or failure messages
- Redux: to control the state of dark mode
- Framer Motion: for animating the intro page border

## Running project

- Clone the repository.
- Navigate to the project directory.
- Install dependencies using npm install.
- Start the development server using npm run dev.
- Open server from console
