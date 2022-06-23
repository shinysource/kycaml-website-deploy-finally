import { Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent="center"
        columnSpacing={{ xs: 100, sm: 100, md: 3 }}
        pb={4}
        className="pt-2 text-center bg-blue"
      >
        <Grid item>
          <p className="fineprint-text">
            Copyright ©2022 Finally Fund Admin LLC. All Rights Reserved
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
