const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Fetch posts data from the API
export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
