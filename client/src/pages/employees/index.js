import React, { useState, useEffect } from 'react'
import PageContainer from '../../components/PageContainer'
import AppTable from '../../components/AppTable'

function Employees() {
  const [employees, setEmployees] = useState([])

  // Get all Employees when the page is rendered
  useEffect(() => {
    fetch('http://localhost:3090/customers/geographic-info')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <PageContainer>
      <h2>Employees</h2>
      <AppTable tableData={employees} />
    </PageContainer>
  )
}
export default Employees
