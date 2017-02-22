Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index, :show]
    resources :groups, only: [:create, :destroy, :show, :index]
    resources :groups_users, only: [:create, :destroy]
    resources :huddles, only: [:create, :show, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"

end
