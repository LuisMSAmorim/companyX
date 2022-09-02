import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { Employee } from '../../@types/employee'
import { DepartmentsHeader } from '../../components/DepartmentHeader/DepartmentHeader'
import {
  EmplooyeeCardHeader,
  EmployeeCard,
  EmployeeCardBody,
  ListDepartmentEmployeesBody,
  ListDepartmentEmployeesContainer,
} from './styles'

const apiUrl = 'http://localhost:5000'

export function ListDepartmentEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const navigate = useNavigate()
  const { id } = useParams()
  const { state }: any = useLocation()

  function handleBackToDepartments() {
    navigate('/departments/')
  }

  useEffect(() => {
    axios.get(`${apiUrl}/departments/${id}/employees`).then((response) => {
      setEmployees(response.data)
    })
  }, [])

  return (
    <ListDepartmentEmployeesContainer>
      <DepartmentsHeader
        title={state.departmentName}
        action={handleBackToDepartments}
        message="Voltar"
      />
      <ListDepartmentEmployeesBody>
        {employees.map((employee) => {
          return (
            <EmployeeCard key={employee.id}>
              <EmplooyeeCardHeader>
                <h1>{employee.name}</h1>
              </EmplooyeeCardHeader>
              <EmployeeCardBody>
                <p>{employee.email}</p>
                <p>{employee.role}</p>
              </EmployeeCardBody>
            </EmployeeCard>
          )
        })}
      </ListDepartmentEmployeesBody>
    </ListDepartmentEmployeesContainer>
  )
}
