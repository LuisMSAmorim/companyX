import { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'

import {
  EmployeeCard,
  ListDepartmentEmployeesBody,
  ListDepartmentEmployeesContainer,
  ListDepartmentEmployeesHeader,
} from './styles'
import { Employee } from '../../../@types/employee'
import axios from 'axios'

const apiUrl = 'http://localhost:5000'

interface StateProps {
  departmentName: string
}

export function ListDepartmentEmployees() {
  const params = useParams()

  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    axios
      .get(`${apiUrl}/departments/${params.id}/employees`)
      .then(({ data }) => setEmployees(data))
  }, [])

  const location = useLocation()

  const { departmentName } = location.state as StateProps

  return (
    <ListDepartmentEmployeesContainer>
      <ListDepartmentEmployeesHeader>
        <h1>{departmentName}</h1>
        <NavLink to="/employees/new">Novo Colaborador</NavLink>
      </ListDepartmentEmployeesHeader>

      <ListDepartmentEmployeesBody>
        {employees.map((employee: Employee) => {
          return (
            <EmployeeCard key={employee.id}>
              <h2>{`${employee.first_name} ${employee.last_name}`}</h2>
              <h3>{employee.role}</h3>
              <h4>{employee.email}</h4>
            </EmployeeCard>
          )
        })}
      </ListDepartmentEmployeesBody>
    </ListDepartmentEmployeesContainer>
  )
}
