Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do
    namespace :v1 do

      resources :demo, only: %i[index]

      mount_devise_token_auth_for 'User', at: 'auth'

    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
