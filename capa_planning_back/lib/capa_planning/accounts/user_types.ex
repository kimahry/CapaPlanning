defmodule CapaPlanning.Accounts.UserTypes do
  use Absinthe.Schema.Notation

  @desc "The user model"
  object :user do
    @desc "The ID of the user"
    field(:id, :id)
    @desc "The first name of the user"
    field(:first_name, :string)
    @desc "The last name of the user"
    field(:last_name, :string)
    @desc "The email of the user"
    field(:email, :string)
  end

  @desc "The input user model"
  input_object :user_input do
    @desc "The first name of the user"
    field(:first_name, non_null(:string))
    @desc "The last name of the user"
    field(:last_name, non_null(:string))
    @desc "The password of the user"
    field(:password, :string)
    @desc "The email of the user"
    field(:email, non_null(:string))
  end

  object :user_result do
    field(:user, :user)
    field(:errors, list_of(:error))
  end

  object :error do
    field(:key, :string)
    field(:msg, :string)
  end
end