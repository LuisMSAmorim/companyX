Rails.application.routes.draw do
  resources :departments do
    get :employees, on: :member
  end

  resources :employees do
    patch :update_vacation_status, on: :member
  end

  resources :users
  post '/auth/login', to: 'authentication#login'
end
