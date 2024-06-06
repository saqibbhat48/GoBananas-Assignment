import React from 'react';
import { TextField } from '@mui/material';

// SearchBar component renders a text field for filtering the list of posts.

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search posts"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ marginBottom: '20px' }}
      color="primary"
    />
  );
};

export default SearchBar;
