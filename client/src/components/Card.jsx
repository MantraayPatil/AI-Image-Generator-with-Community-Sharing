import React from 'react';
import { download } from '../assets'; // Importing the download icon image
import { downloadImage } from '../utils'; // Importing the utility function to handle image downloads

/**
 * Card component displays a single post with its image, prompt, and author details.
 * It also provides functionality to download the image.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props._id - The unique identifier for the post.
 * @param {string} props.name - The name of the post's author.
 * @param {string} props.prompt - The description or prompt for the post's image.
 * @param {string} props.photo - The URL of the image to be displayed.
 */
const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      {/* Overlay container that becomes visible on hover */}
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-3 p-3 rounded-md opacity-80">
        {/* Displaying the prompt of the post */}
        <p className="text-white text-sm overflow-y-auto prompt">
          {prompt}
        </p>
        <div className="mt-5 flex justify-between items-center gap-2">
          {/* Author's initial and name */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-900 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm opacity-85">
              {name}
            </p>
          </div>
          {/* Button to trigger image download */}
          <button 
            className="outline-none bg-transparent border-none" 
            type="button" 
            onClick={() => downloadImage(_id, photo)}
          >
            <img 
              src={download} 
              alt="download" 
              className="w-6 h-6 object-contain invert" 
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;
