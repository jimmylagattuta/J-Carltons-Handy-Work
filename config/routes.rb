Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "api/v1/home#hello"
    namespace :api do
      namespace :v1 do
        post "/signup", to: "users#create"
        post "/login", to: "sessions#create"
        delete "/logout", to: "sessions#destroy"

      end

  end
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
