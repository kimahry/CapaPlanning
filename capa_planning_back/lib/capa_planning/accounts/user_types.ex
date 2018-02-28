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
    @desc "The working days of the user"
    field(:user_working_days, list_of(:user_working_day))
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

  @desc "Result object of a user's mutation"
  object :user_result do
    @desc "The user"
    field(:user, :user)
    @desc "The list of errors"
    field(:errors, list_of(:error))
  end

  @desc "The object representing a day"
  object :user_working_day do
    @desc "The day's ID"
    field(:id, :id)
    @desc "The day's name"
    field(:day, :day)
    @desc "If the user work that day"
    field(:worked, :boolean)
  end

end