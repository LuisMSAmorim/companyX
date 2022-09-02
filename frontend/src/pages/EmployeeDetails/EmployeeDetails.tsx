import { useLocation } from "react-router-dom";
import { Employee } from "../../@types/employee";

import { EmployeeDetailsContainer } from "./styles";

export function EmployeeDetails() {
  const { state }: any = useLocation()
  const employee: Employee = state.employee
  const departmentName = state.departmentName

  return (
    <EmployeeDetailsContainer>
      <h1>{employee.name}</h1>
      <div>Departamento: {departmentName}</div>
      <div>Cargo: {employee.role}</div>
      <div>Departamento: {employee.email}</div>

      <h2>Endereço</h2>
      <div>Departamento: {employee.city}</div>
      <div>Departamento: {departmentName}</div>
      <div>Departamento: {departmentName}</div>
      <div>Departamento: {departmentName}</div>
      <div>Departamento: {departmentName}</div>
      <div>Departamento: {departmentName}</div>
      <div>Departamento: {departmentName}</div>
    </EmployeeDetailsContainer>
  )
}
