import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90v', flex: 2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
        Showing Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>
        <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed