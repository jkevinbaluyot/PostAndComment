Rails.application.routes.draw do
  resources :comments
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do

    resource :posts, only: [], defaults: {format: "json"} do
      member do
        get "/:id/comments" => "posts#comments", as: "comments"
      end
    end
  end
end
