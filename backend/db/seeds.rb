# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  it_department = Department.create({ name: "TI" })
  
  Employee.create(first_name: "João", last_name: "Silva", birth_date: "01/01/1980", start_date: "10/12/2012", email: "joaosilva@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Gerente de Desenvolvimento", department_id: it_department.id)
  Employee.create(first_name: "Luís", last_name: "Ferreira", birth_date: "05/10/1977", start_date: "05/06/2018", email: "ferreiraluis@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Desenvolvedor JR", department_id: it_department.id)
  Employee.create(first_name: "Henrique", last_name: "Dias", birth_date: "07/10/1999", start_date: "16/03/2022", email: "diashenr@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "QA", department_id: it_department.id)
  Employee.create(first_name: "Maria", last_name: "Silveira", birth_date: "05/12/2000", start_date: "16/03/2022", email: "maria@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Desenvolvedora SR", department_id: it_department.id)
  
  hr_department = Department.create({ name: "RH" })

  Employee.create(first_name: "Julia", last_name: "Dos Passos", birth_date: "05/12/1971", start_date: "10/11/2010", email: "juliapassos@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Gerente de RH", department_id: hr_department.id)
  Employee.create(first_name: "Carlos", last_name: "Dos Anjos", birth_date: "06/03/1985", start_date: "03/11/2019", email: "carlosanjos@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Tech Recruiter", department_id: hr_department.id)

  financials_department = Department.create({ name: "Financeiro" })

  Employee.create(first_name: "Marcio", last_name: "Silva", birth_date: "01/01/1977", start_date: "10/12/2012", email: "marcopsilva@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Gerente de Finanças", department_id: financials_department.id)
  Employee.create(first_name: "João", last_name: "Mateus", birth_date: "01/01/1980", start_date: "10/12/2012", email: "joaomateus@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Contador", department_id: financials_department.id)

  marketing_department = Department.create({ name: "Marketing" })

  Employee.create(first_name: "Isadora", last_name: "Maria", birth_date: "12/12/1965", start_date: "10/12/2012", email: "isamaria@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Gerente de Marketing", department_id: marketing_department.id)
  Employee.create(first_name: "Pedro", last_name: "Da Silva", birth_date: "12/12/1965", start_date: "10/12/2012", email: "pedrodasilva@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Designer", department_id: marketing_department.id)

  sales_department = Department.create({ name: "Vendas" })

  Employee.create(first_name: "Julio", last_name: "Dos Passos", birth_date: "12/12/1965", start_date: "10/12/2012", email: "juliopassos@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Gerente de Vendas", department_id: sales_department.id)
  Employee.create(first_name: "Luis", last_name: "Do Teste", birth_date: "12/12/1965", start_date: "10/12/2012", email: "luisteste@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "SDR SR", department_id: sales_department.id)
  Employee.create(first_name: "Gabriel", last_name: "Miguel", birth_date: "12/12/1965", start_date: "10/12/2012", email: "gabrielmiguel@email.com", city: "São Paulo", country: "Brasil", street: "Rua 1", zipcode: "01234-567", number: "123", state: "SP", district: "Bairro", role: "Closer", department_id: sales_department.id)
