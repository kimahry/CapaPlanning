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

  @desc "Result object of a user's mutation"
  object :user_result do
    @desc "The user"
    field(:user, :user)
    @desc "The list of errors"
    field(:errors, list_of(:error))
  end

  @desc "Standard object to display mutation error"
  object :error do
    @desc "The key in error"
    field(:key, :string)
    @desc "The error message"
    field(:msg, :string)
  end

  enum :order_dir do
    value(:asc)
    value(:desc)
  end

  enum :order_fields do
    value(:first_name)
    value(:last_name)
    value(:email)
  end

  @desc "Order object to order User"
  input_object :user_order do
    @desc "The field from the user to order by"
    field(:field, :order_fields, default_value: :first_name)
    @desc "The direction of the sort"
    field(:dir, :order_dir, default_value: :asc)
  end
end