import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()


  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        console.log('Channel Detail:', data)
        setChannelDetail(data?.items[0])
      })
      .catch((error) => {
        console.log('Channel Detail Error:', error)
      })

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        console.log('Videos:', data)
        setVideos(data?.items)
      })
      .catch((error) => {
        console.log('Videos Error:', error)
      })
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)',
          zIndex: 10,
          height: '300px'
        }} 
        />
          <ChannelCard channelDetail={channelDetail}
          marginTop='-110px' />
      </Box>
      <Box display='flex' p='2' >
        <Box sx={{ mr: { sm: '100px' }}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail