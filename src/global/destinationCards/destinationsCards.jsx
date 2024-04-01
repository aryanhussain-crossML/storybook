import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

const DestinationsCards = ({ image, title, price, schedule, groupSize, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          from {price} &euro
        </Typography>
        <Box>
          <Box>{schedule}</Box>
          <Box>{groupSize}</Box>
        </Box>
        <Typography variant='caption' > 
          {description}
        </Typography>
      </CardContent>
      
    </Card>
  )
}

export default DestinationsCards