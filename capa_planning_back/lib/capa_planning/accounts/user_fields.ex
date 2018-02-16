defmodule CapaPlanning.Accounts.UserFields do
  use Absinthe.Schema.Notation

  alias CapaPlanning.Accounts.UserResolver

  object :count_user do
    @desc "The current total users being paged"
    field :count_user, :integer do
      @desc "Pattern to filter first name, last name and email"
      arg(:pattern, :string)
      resolve(&UserResolver.count_user/3)
    end
  end

  object :get_user do
    @desc "Query a single user by ID"
    field :get_user, :user do
      @desc "The ID of the user"
      arg(:id, non_null(:id))
      resolve(&UserResolver.get_user_by_id/3)
    end
  end

  object :list_user do
    @desc "Query the users"
    field :list_user, list_of(:user) do
      @desc "Pattern to filter first name, last name and email"
      arg(:pattern, :string)
      @desc "The paginator"
      arg(:paginator, type: :paginator)
      @des "The sort"
      arg(:sort, type: :sort)
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