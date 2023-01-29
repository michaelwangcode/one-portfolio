import React from "react";

// Import the GitHub, LinkedIn, Mail and Person icons from React Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";



// The SocialLinks component in the app
const SocialLinks = () => {

  // Links for the Social Media Bar
  // Each link has an ID, text, link, and style (optional)
  // The resume link downloads a resume to the user's computer
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://www.github.com",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:example@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];



  // Return the SocialLinks component
  return (

    /* SOCIAL MEDIA BAR */
    /* It is added to the left side of the screen and hidden on small screens */
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      
      {/* Unordered list of links */}
      <ul>

        {/* Display links in JSX using the links array */}
        {links.map(( {id, child, href, style, download} ) => (

          /* Set the id, link, style, download and text for each list item */
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " + style}>
            <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noopener noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
};



export default SocialLinks;
