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
  I chose this package to easily display a success or failure message to give user quick and easy feedback on their result. 
  I think this package is easy to import and use, it also offers good choices for styling. This package does not interfere with any elements on the page so no extra styling is needed. 
How to use:
First visit: https://react-hot-toast.com/docs
Install the package in the terminal using npm install react-hot-toast
Import the following: import toast, { Toaster } from 'react-hot-toast';
You can then use the package. The website has extensive information on how to use the package and also the options for styling.

- Redux: to control the state of dark mode

- Framer Motion: for animating the intro page border
  I chose this package to quickly and easily integrate animation in my code. This package provides many option for animation and is easily to implement. 
  It lets you integrate the code in your jsx file instead of the css file in a eaily to read format. It also offers many options when importing components. I found it easy to use and implement.
How to use:
First visit: https://react-hot-toast.com/docs](https://www.framer.com/motion/introduction/
Install the package in the terminal using npm install framer-motion
Import the following: import { motion } from "framer-motion"; 
You can also import { animate} depending on how you use the package.
You can then use the package. The website has extensive information on how to use the package and also the options for styling.

## Running project

- Clone the repository.
- Navigate to the project directory.
- Install dependencies using npm install.
- Start the development server using npm run dev.
- Open server from console
