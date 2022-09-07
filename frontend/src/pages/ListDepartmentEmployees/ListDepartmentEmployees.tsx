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

  
  useEffect(() => {
    axios.get(`${apiUrl}/departments/${id}/employees`).then((response) => {
      setEmployees(response.data)
    })
  }, [])
  
  function handleEmployeeDetails(employee: Employee, departmentName: string) {
    navigate(`/employees/${employee.id}`, { state: { employee, departmentName } })
  }

  function handleNewEmployee(departmentName: string) {
    navigate('/employees/new')
  }

  function handleBackToDepartments() {
    navigate('/departments/')
  }

  return (
    <ListDepartmentEmployeesContainer>
      <DepartmentsHeader
        title={state.departmentName}
        action={handleBackToDepartments}
        message="Voltar"
        haveSecondButton
        secondMessage='Novo Colaborador'
        secondAction={() => handleNewEmployee(state.departmentName)}
      />
      <ListDepartmentEmployeesBody>
        {employees.map((employee) => {
          return (
            <EmployeeCard onClick={() => handleEmployeeDetails(employee, state.departmentName)} isOnVacation={employee.is_on_vacation} key={employee.id}>
              <EmplooyeeCardHeader>
                <h1>{employee.name}</h1>
              </EmplooyeeCardHeader>
              <EmployeeCardBody>
                <p>{employee.email}</p>
                <p>{employee.role}</p>
                <p>{employee.is_on_vacation ? <span>Em férias!!</span> : null}</p>
              </EmployeeCardBody>
            </EmployeeCard>
          )
        })}
      </ListDepartmentEmployeesBody>
    </ListDepartmentEmployeesContainer>
  )
}
