Rails.application.routes.draw do
  get 'contact/index'
  get 'skills/index'
  get 'home/index'
  root 'home#index'
end
