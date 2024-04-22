import React, { ReactNode } from 'react';
import Bg from '../assets/Bg.mp4'; // Import the background video asset

// Define the props expected by the Background component
interface BackgroundProps {
  children: ReactNode; // Accept children elements
}

// Define the Background component
const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    // Outer div to contain the background video and provide styling
    <div className=" flex justify-center items-center h-screen">
      {/* Nested div for the video element */}
      <div className=" relative inset-0 w-full h-full">
        {/* Video element to display the background video */}
        <video
      
          loop // Enable looping of the video
          controls={false} // Disable controls for the video
          muted // Mute the video
          autoPlay // Enable auto play of the video
          className="  w-full h-full object-cover" // Apply styling to the video element
        >
          {/* Specify the source of the video with the type attribute */}
          <source src={Bg} type="video/mp4" />
        </video>
        
      {/* Render children elements */}
      {children}
     
      </div>
    
      
    </div>
  );
}

export default Background;
