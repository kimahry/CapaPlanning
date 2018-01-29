defmodule CapaPlanning.Accounts.UserFields do
  use Absinthe.Schema.Notation

  alias CapaPlanning.Accounts.UserResolver

  object :list_user do
    @desc "Query the users"
    field :list_user, list_of(:user) do
      resolve(&UserResolver.list_user/3)
    end
  end
end