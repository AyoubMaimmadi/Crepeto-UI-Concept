import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import PageContainer from '../../components/PageContainer'
import AppTable from '../../components/AppTable'
import { getResources, createResource } from '../../helpers'

const useStyles = makeStyles({
  textField: {
    maxWidth: 175,
    marginRight: '20px',
    marginBottom: '20px',
  },
  button: {
    margin: '0 20px',
  },
  divider: {
    margin: '30px',
  },
})

function Employees() {
  const classes = useStyles()
  const [formInput, setFormInput] = useState({})
  const [employees, setEmployees] = useState([])
  const [employeeId, setEmployeeId] = useState('')

  // Get all employees when the page is rendered
  useEffect(() => {
    getemployees()
  }, [])

  // Get all employees
  const getemployees = () => {
    getResources(`/employees`, setEmployees)
  }

  // Save the employeeId
  const getEmployeeId = (event) => {
    setEmployeeId(event.target.value)
  }
  // Get employee based on passed employeeId
  const getEmployee = () => {
    getResources(`/employees/${employeeId}`, setEmployees)
  }

  // Get all employees who have an active order
  const getActiveemployees = () => {
    getResources(`/employees/active-employees-info`, setEmployees)
  }

  // Get all employees who ordered something in October
  const getOctoberemployees = () => {
    getResources(`/employees/october-employees`, setEmployees)
  }

  // Save the form input
  const handleFormChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    })
  }
  // Create a new employee and update the table
  const createEmployee = (event) => {
    event.preventDefault()
    createResource(`/employees/add-employee`, formInput)
    getemployees()
  }

  return (
    <PageContainer>
      <h2>employees</h2>
      <AppTable tableData={employees} />
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <form onSubmit={createEmployee}>
          <TextField
            className={classes.textField}
            label="Name"
            name="name"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Phone"
            name="phone"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Email"
            name="email"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Address"
            name="address"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Salary"
            name="salary"
            required
            onChange={handleFormChange}
          />
          <Button variant="contained" size="medium" type="submit">
            Create new employee
          </Button>
        </form>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getemployees}
        >
          Get employees (Default View)
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getActiveemployees}
        >
          Get Active employees Info (View 8)
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getOctoberemployees}
        >
          Get October employees (View 9)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <TextField
          className={classes.textField}
          label="Employee ID"
          onChange={getEmployeeId}
        />
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getEmployee}
        >
          Search Employee
        </Button>
      </Grid>
      <Divider className={classes.divider} />
    </PageContainer>
  )
}
export default Employees