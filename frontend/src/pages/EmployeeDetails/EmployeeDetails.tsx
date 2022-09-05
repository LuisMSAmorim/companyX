import { useLocation, useNavigate } from "react-router-dom";
import { Employee } from "../../@types/employee";
import { DepartmentsHeader } from "../../components/DepartmentHeader/DepartmentHeader";

import { EmployeeDetailsContainer } from "./styles";

export function EmployeeDetails() {
  const navigate = useNavigate()
  const { state }: any = useLocation()
  const employee: Employee = state.employee
  const departmentName = state.departmentName

  function handleBackToDepartment() {
    navigate(`/departments/${employee.department_id}/employees`, { state: { departmentName } })
  }

  return (
    <>
      <DepartmentsHeader action={handleBackToDepartment} message="Voltar" title="Detalhes" />
      <EmployeeDetailsContainer>
        <h1>{employee.name}</h1>
        <div>Departamento: {departmentName}</div>
        <div>Cargo: {employee.role}</div>
        <div>Departamento: {employee.email}</div>
        <div>{employee.is_on_vacation ? "Está de férias" : "Não está de férias"}</div>

        <h2>Endereço</h2>
        <div>País: {employee.country}</div>
        <div>Estado: {employee.state}</div>
        <div>CEP: {employee.zipcode}</div>
        <div>Cidade: {employee.city}</div>
        <div>Bairro: {employee.district}</div>
        <div>Rua: {employee.street}</div>
        <div>N°: {employee.number}</div>
      </EmployeeDetailsContainer>
    </>
  )
}
