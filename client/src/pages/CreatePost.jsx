import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

/**
 * CreatePost component for generating and sharing AI-generated images.
 * It includes form handling, image generation, and submission logic.
 */
const CreatePost = () => {
  const navigate = useNavigate();

  // State for handling form data
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  // State for tracking image generation and submission loading states
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * Function to generate an AI image based on the prompt.
   * It makes an API call to the backend and stores the generated image in the form state.
   */
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        
        if (response.ok) {
          const data = await response.json();
          // Update the form with the generated image
          setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
        } else {
          throw new Error('Failed to generate image');
        }
      } catch (error) {
        alert('Error generating image: ' + error.message);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt to generate an image.');
    }
  };

  /**
   * Function to handle form submission.
   * It submits the form data (including the generated image) to the backend API.
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          navigate('/'); // Redirect to the homepage after successful submission
        } else {
          throw new Error('Failed to share post');
        }
      } catch (error) {
        alert('Error sharing post: ' + error.message);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt and generate an image before sharing.');
    }
  };

  /**
   * Handles input changes for form fields.
   * @param {Event} e - The input change event.
   */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**
   * Function to generate a random prompt for the "Surprise Me" button.
   */
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create visually stunning images using DALL-E AI and make sure to share them with the community.
        </p>
      </div>

      {/* Form to create and share the AI-generated image */}
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Enter Here"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Enter a prompt here or use the 'Surprise Me' option"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Wow! What a wonderful image. Would you like to share it with the community?
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
