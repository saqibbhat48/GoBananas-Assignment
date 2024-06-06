import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ListView from './components/ListView';
import SearchBar from './components/SearchBar';
import './App.css';

/*
 * App component is the main component of the application.
 * It contains the search bar and the list view of posts.
*/

function App() {
  // State to hold the current search query
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom align="center" className="title">
        Post List
      </Typography>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ListView searchQuery={searchQuery} />
    </Container>
  );
}

export default App;
