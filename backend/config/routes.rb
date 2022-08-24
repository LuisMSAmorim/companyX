Rails.application.routes.draw do
  
  resources :departments do
    get :employees, on: :member
  end

  resources :employees
end
