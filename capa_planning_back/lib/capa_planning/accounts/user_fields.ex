defmodule CapaPlanning.Accounts.UserFields do
  use Absinthe.Schema.Notation

  alias CapaPlanning.Accounts.UserResolver

  object :list_user do
    @desc "Query the users"
    field :list_user, list_of(:user) do
      arg(:pattern, :string)
      arg(:order, type: :user_order)
      resolve(&UserResolver.list_user/3)
    end
  end

  object :delete_user do
    @desc "Delete the given user"
    field :delete_user, :string do
      @desc "The id of the user"
      arg(:id, non_null(:id))
      resolve(&UserResolver.delete_user/3)
    end
  end

  object :create_user do
    @desc "Create a new user"
    field :create_user, :user_result do
      @desc "An user input"
      arg(:user, non_null(:user_input))
      resolve(&UserResolver.create_user/3)
    end
  end
end