import { Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        columnSpacing={{ xs: 100, sm: 100, md: 3 }}
        pb={7}
        className="fixed top-0 pt-2 text-center bg-blue"
      ></Grid>
    </Grid>
  )
}

export default Header
