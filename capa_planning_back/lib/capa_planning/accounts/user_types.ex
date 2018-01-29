defmodule CapaPlanning.Accounts.UserTypes do
  use Absinthe.Schema.Notation

  @desc "The user model"
  object :user do
    @desc "The first name of the user"
    field(:first_name, :string)
    @desc "The last name of the user"
    field(:last_name, :string)
    @desc "The email of the user"
    field(:email, :string)
  end

end