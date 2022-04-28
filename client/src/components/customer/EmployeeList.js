import React, { Component } from 'react'
import AnchorTag from '../../components/Anchortag'
import InputFormGroup from '../../components/input/InputFormGroup'
import SelectFormGroup from '../../components/input/SelectFormGroup'
import Table from '../../components/table/Table'

class EmployeeList extends Component {
  constructor(props) {
    super(props)
    this.columnList = [
      'ID',
      'Name',
      'Email',
      'Role',
      'Status',
      'Joined At',
      'Action',
    ]
    this.tableData = [
      {
        id: 1,
        name: 'Ayoub Maimmadi',
        email: 'ayoubmaimmadi@gmail.com',
        role: 'Manager',
        status: 'Active',
        joined_at: '20th August, 2022',
      },
      {
        id: 2,
        name: 'Ayoub Maimmadi',
        email: 'ayoubmaimmadi@gmail.com',
        role: 'Waiter',
        status: 'Active',
        joined_at: '20th August, 2022',
      },
      {
        id: 3,
        name: 'Hiba Akhadar',
        email: 'HibaAkhada987@gmail.com',
        role: 'Chef',
        status: 'Active',
        joined_at: '30th August, 2021',
      },
    ]

    this.roleData = [
      { id: 1, name: 'Manager' },
      { id: 2, name: 'Waiter' },
      { id: 3, name: 'Chef' },
    ]
  }

  render() {
    return (
      <div className="admin-content mx-auto">
        <div className="w-100 mb-5">
          <AnchorTag
            link="/app/shop/employee/create"
            className="btn btn-sm btn-warning float-right"
            itemValue="Create Employee"
          ></AnchorTag>
          <h4>Employee List</h4>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <p>
              <b>Search Box</b>
            </p>
          </div>
          <div className="col-2">
            <InputFormGroup
              labelClassName="mb-2"
              label=""
              inputClassName="form-control form-control-sm"
              placeholder="Employee Email"
            />
          </div>
          <div className="col-2">
            <InputFormGroup
              labelClassName="mb-2"
              label=""
              inputClassName="form-control form-control-sm"
              placeholder="Employee Name"
            />
          </div>
          <div className="col-2">
            <SelectFormGroup
              selectClassName="custom-select custom-select-sm"
              selectData={this.roleData}
            />
          </div>

          <div className="col-2">
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-sm btn-success"
                value="Search"
              />
            </div>
          </div>
        </div>
        <Table
          className="table table-striped"
          columnList={this.columnList}
          tableData={this.tableData}
          actionLinkPrefix=""
        ></Table>
      </div>
    )
  }
}

export default EmployeeList
