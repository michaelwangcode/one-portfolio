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

The Navigation Bar appears at the top of the page.

Create a components folder in the src folder and add a NavBar.jsx file.

Import the NavBar into the App.js file.

Import the Hamburger Menu and Close (x) icons for the navigation bar, which will be used for the mobile view.

In NavBar.jsx, create an array of navigation bar links and style it using Tailwind CSS and the map function.

Use a media query to make the navigation bar links hidden when the page is viewed on mobile.

Create a dropdown menu that is displayed on mobile.

&nbsp;



## Home Page

The home page consists of a title, bio, portfolio button and image.

Create a Home.jsx component and create a series of containers to hold the elements.

Center all of the elements on the page using flex boxes and Tailwind CSS.

Add a gradient to the website background and to the portfolio button.

Use media queries to adjust the image when the window is resized smaller.

&nbsp;



## Social Media Links

The social media bar will appear on the left side of the page.

The bar has links to our LinkedIn, Github, Email and Resume.

When a link is hovered over, the text will be displayed.

The bar will be hidden on mobile versions of the site.

Create a SocialLinks.jsx component and add it to the App.js file.

&nbsp;



## About

The About section consists of a header and two paragraphs of text.

The text is padded and formatted with a flex layout.

Create an About.jsx component and add it to the App.js file.

&nbsp;



## Portfolio

The Portfolio section is a grid of projects the person has completed.

Each project contains an image and text organized in a flex boxes.

Elements will pop out slightly when hovered over.

Use media queries to adjust the portfolio grid when the window is resized.

&nbsp;



## Experience

The Experience section is a grid of all the programming languages and technologies we have used.

Each technology is contains an image and text organized in a flex box.

Elements will pop out slightly when hovered over.

Use media queries to adjust the experience grid when the window is resized.

&nbsp;



## Contact

The Contact section allows visitors to provide their contact info and send you messages.

When a user clicks the submit button, their message is saved in GetForm.io.

GetForm.io is used to manage the contact form and it provides an interface where you can read all of your messages.

A reminder email is also sent whenever you receive a message.

Later, we can add error checking to the form.

&nbsp;



## Install React Scroll

The React Scroll library is used in the Navigation Bar to scroll down to each component of the website.

Type `npm i react-scroll` in the terminal to install React Scroll.

Create a custom `Link` element for React Scroll and use it in the Navigation Bar, Mobile Navigation Menu and Portfolio Button on the home page.

Use the smooth and duration properties to enable smooth scrolling.

Later, we can use the offset property to adjust the exact scroll location of each section.

&nbsp;



## Deploy Website using Netlify



&nbsp;

