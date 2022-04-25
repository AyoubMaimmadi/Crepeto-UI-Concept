import React, { useState, useEffect } from 'react'
import PageContainer from '../../components/PageContainer'
import AppTable from '../../components/AppTable'

function Billing() {
  const [billing, setBilling] = useState([])

  // Get all Employees when the page is rendered
  useEffect(() => {
    fetch('http://localhost:3090/billing')
      .then((response) => response.json())
      .then((data) => {
        setBilling(data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <PageContainer>
      <h2>Billing</h2>
      <AppTable tableData={billing} />
    </PageContainer>
  )
}
export default Billing
