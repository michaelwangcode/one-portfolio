import React from "react";



// The About component in the app
const About = () => {

  // Return the About component
  return (

    /* ABOUT COMPONENT */
    /* The background is a gradient and text is white */
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white">
      
      {/* Title and Paragraph Container */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* About Header container*/}
        <div className="pb-8">

          {/* About Header */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* Paragraph 1 */}
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat imperdiet tellus ut facilisis. 
          Maecenas sit amet eleifend nisi, nec vulputate magna. In bibendum eleifend erat a convallis. Sed vulputate porttitor cursus.
          Nunc euismod dignissim nunc non iaculis. Vestibulum eu sem tellus. Curabitur interdum ullamcorper urna eu blandit. 
          Quisque vitae varius nunc. In et turpis facilisis, feugiat dui vel, venenatis ligula. Aenean dictum mollis orci, sit amet tempor ante venenatis nec.
        </p>

        <br />

        {/* Paragraph 2 */}
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat imperdiet tellus ut facilisis. 
          Maecenas sit amet eleifend nisi, nec vulputate magna. In bibendum eleifend erat a convallis. Sed vulputate porttitor cursus.
          Nunc euismod dignissim nunc non iaculis. Vestibulum eu sem tellus. Curabitur interdum ullamcorper urna eu blandit. 
          Quisque vitae varius nunc. In et turpis facilisis, feugiat dui vel, venenatis ligula. Aenean dictum mollis orci, sit amet tempor ante venenatis nec.
        </p>
      </div>
    </div>
  )
}



export default About;

