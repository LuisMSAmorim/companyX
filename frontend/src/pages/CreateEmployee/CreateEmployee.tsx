import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../@types/employee";
import { CreateEmployeeContainer } from "./styles";

const apiUrl = 'http://localhost:5000'

export function CreateEmployee() {
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm<Employee>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Employee> = (data) => {
    axios
      .post(`${apiUrl}/employees`, data)
      .then((res) => {
        navigate('/departments')
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setError('Este nome já está em uso...')
        } else {
          setError('Erro interno do servidor...')
        }
      })
  }
  
  return (
    <CreateEmployeeContainer>
      
    </CreateEmployeeContainer>
  )
}