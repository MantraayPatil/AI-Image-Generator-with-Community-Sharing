/**
 * An array of example posts used to showcase the application's functionality.
 * These posts include pre-generated images and associated metadata.
 * 
 * Due to reaching a billing limit on the OpenAI account, the live image generation
 * feature is currently restricted. As a result, this array includes pre-made AI-generated
 * posts to demonstrate the application’s functionality.
 * 
 * Please note that if the image generation feature is limited or unavailable due to billing
 * constraints, you may encounter the following error message. An upgraded account may be
 * required to restore full functionality.
 * 
 * Error Message:
 * {
 *   "error": {
 *     "code": "billing_hard_limit_reached",
 *     "message": "Billing hard limit has been reached",
 *     "param": null,
 *     "type": "invalid_request_error"
 *   }
 * }
 */

const examplePosts = [
    {
      _id: '64e3e5d4b3a8e14b5fbb9b6f',
      name: 'Mantraay Patil',
      prompt: 'A high-resolution image of dice falling towards the camera',
      photo: 'https://res.cloudinary.com/dqsjyqnoz/image/upload/v1723563583/dice_pmwz6m.jpg',
    },
    {
      _id: '64e3e5d4b3a8e14b5fbb9b70',
      name: 'Mantraay Patil',
      prompt: 'Woman with sunglasses modelling, in Clipart',
      photo: 'https://res.cloudinary.com/dqsjyqnoz/image/upload/v1723747196/womanclipart_ruaiaq.jpg',
    },
    {
      _id: '64e3e5d4b3a8e14b5fbb9b71',
      name: 'Mantraay Patil',
      prompt: 'Water painting portrait of beautiful woman',
      photo: 'https://res.cloudinary.com/dqsjyqnoz/image/upload/v1723747856/woman-8937604_960_720_mcm5mq.webp',
    },
    {
      _id: '64e3e5d4b3a8e14b5fbb9b72',
      name: 'Mantraay Patil',
      prompt: 'A serene forest with sunlight streaming through the trees',
      photo: 'https://res.cloudinary.com/dqsjyqnoz/image/upload/v1723748661/A_scene_of_teddy_bears_shopping_for_groceries_in_a_traditional_Japanese_market_depicted_in_the_ukiyo-e_art_style._The_teddy_bears_are_wearing_kimonos_svnpyp.webp',
    },
    {
      _id: '64e3e5d4b3a8e14b5fbb9b73',
      name: 'Mantraay Patil',
      prompt: 'A sea otter with a pearl earring by Johannes Vermeer',
      photo: 'https://res.cloudinary.com/dqsjyqnoz/image/upload/v1723748751/A_painting_inspired_by_Johannes_Vermeer_s_Girl_with_a_Pearl_Earring_but_featuring_a_sea_otter_as_the_subject._fa2z2m.webp',
    },
    {
      _id: '64e3e5d4b3a8e14b5fbb9b74',
      name: 'Mantraay Patil',
      prompt: 'A calm ocean view with waves gently hitting the shore',
      photo: 'https://res.cloudinary.com/dqsjyqnoz/image/upload/v1723748842/A_peaceful_ocean_view_with_soft_waves_gently_rolling_onto_a_sandy_shore._The_sky_is_clear_with_a_subtle_warm_glow_from_the_setting_sun._z4g5l8.webp',
    },
    {
      _id: '64e3e5d4b3a8e14b5fbb9b75',
      name: 'Mantraay Patil',
      prompt: 'A photo of a Samoyed dog with its tongue out hugging a white Siamese cat',
      photo: 'https://res.cloudinary.com/dqsjyqnoz/image/upload/v1723748924/A_heartwarming_scene_of_a_fluffy_Samoyed_dog_with_a_playful_expression_and_its_tongue_out_gently_hugging_a_white_Siamese_cat._uxfdml.webp',
    },
    {
      _id: '64e3e5d4b3a8e14b5fbb9b76',
      name: 'Mantraay Patil',
      prompt: 'A lake in the morning with haze and fog',
      photo: 'https://res.cloudinary.com/dqsjyqnoz/image/upload/v1723749106/A_lake_in_the_morning_with_sunrise_and_haze_bgzove.webp',
    },
  ];
  
  export default examplePosts;
  