import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Endpoint to check connectivity
router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!');
});

// Endpoint to generate an image with DALL-E
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // Ensure prompt is provided
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Generate image using OpenAI's DALL-E
        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        // Extract and send image data
        const image = aiResponse.data[0].b64_json;
        res.status(200).json({ photo: image });
        console.log("fetching image issue");

    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

export default router;
