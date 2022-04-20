import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PageContainer from '../../components/PageContainer'
import InfoCard from '../../components/InfoCard'

const useStyles = makeStyles({
  header: {
    fontWeight: 'bold',
    fontSize: '36px',
    margin: '14px',
  },
  description: {
    fontSize: '18px',
    marginLeft: '14px',
    marginBottom: '8px',
  },
})

function Home() {
  const classes = useStyles()

  return (
    <PageContainer>
      <br />
      {/* <h2>Home</h2> */}
      <InfoCard>
        <Typography className={classes.header}>Crepeto</Typography>
        <Typography className={classes.description}>
          A Small Restaurant Management System
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>PostgreSQL</Typography>
        <Typography className={classes.description}>
          Using PostgreSQL would give us the opportunity to take everything we
          have learned in class CSC 3326, and apply it in a real-world situation
          with a small local restaurant in Ifrane. PostgreSQL is a relational
          database that stores our information in the form of tables, and
          information can be retrieved or modified from the database using SQL
          queries we learned in the LAB.
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>
          Design and Tech Stack
        </Typography>
        <Typography className={classes.description}>
          Crepeto was designed using the <b>PERN</b> stack:
          <br />- PostgreSQL
          <br />- Express
          <br />- React
          <br />- Node.js
        </Typography>
      </InfoCard>
    </PageContainer>
  )
}

export default Home
