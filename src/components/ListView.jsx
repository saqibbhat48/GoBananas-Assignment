import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api';
import { List, ListItem, ListItemText, CircularProgress, Paper, Typography } from '@mui/material';

const ListView = ({ searchQuery }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress color="secondary" />
      </div>
    );
  }
  // filter posts based on search query
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      {filteredPosts.length > 0 ? (
        <List>
          {filteredPosts.map((post) => (
            <ListItem key={post.id} divider>
              <ListItemText
                primary={<Typography variant="h6">{post.title}</Typography>}
                secondary={post.body}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No posts found</Typography>
      )}
    </Paper>
  );
};

export default ListView;
