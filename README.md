# React JS Portfolio Website Using Tailwind CSS - Build & Deploy

This is code for [React JS Portfolio Website Using Tailwind CSS - Build & Deploy
](https://www.youtube.com/watch?v=LpZrAjU6Hhk) by Programming With Yash.

To run the project, type `npm start` in the terminal and view at: http://localhost:3000

&nbsp;



## Install Tailwind CSS, React Icons and Google Fonts

Tailwind CSS is the CSS framework used for this project.

[Follow the instuctions here](https://tailwindcss.com/docs/guides/create-react-app) to install Tailwind CSS using the terminal.

React Icons will be used as icons in this project.

[Follow the instructions here](https://react-icons.github.io/react-icons) to install them using the terminal.

The Raleway Font from Google Fonts will be used in this project.

[Go to Google Fonts](https://fonts.google.com/specimen/Raleway?query=raleway), select every style of Raleway and import all of the fonts to index.css.

Import the Great Vibes font and set it as the signature font.

&nbsp;



## Navigation Bar

First, create the top navigation bar.

Create a components folder in the src folder and add a NavBar.jsx file.

Import the NavBar into the App.js file.

Import the Hamburger Menu and Close (x) icons for the navigation bar, which will be used for the mobile view.

In NavBar.jsx, create an array of navigation bar links and style it using Tailwind CSS and the map function.

Use a media query to make the navigation bar links hidden when the page is viewed on mobile.

Create a dropdown menu that is displayed on mobile.

&nbsp;



## Home Page

Next, create the home page.

The home page consists of a title, bio, portfolio button and image.

Create a Home.jsx component and create a series of containers to hold the elements.

Center all of the elements on the page using flex boxes and Tailwind CSS.

Add a gradient to the website background and to the portfolio button.

Use media queries to reposition the image when the window is resized smaller.

&nbsp;



## Social Media Links

Next, create a social media bar that will appear on the left side of the page.

The bar has links to our LinkedIn, Github, Email and Resume.

When a link is hovered over, the text will be displayed.

The bar will be hidden on mobile versions of the site.

Create a SocialLinks.jsx component and add it to the App.js file.

&nbsp;



## About

Next, create the About section of the site.

The About section consists of a header and two paragraphs of text.

The text is padded and formatted with a flex layout.

Create an About.jsx component and add it to the App.js file.

&nbsp;


