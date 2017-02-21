Rails.application.routes.draw do



  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index, :show]
    resources :groups, only: [:create, :destroy, :show, :index]
    resources :huddles, only: [:create, :show, :destroy]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"

end
