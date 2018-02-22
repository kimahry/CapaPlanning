defmodule CapaPlanning.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias CapaPlanning.Accounts.User

  @primary_key {:id, :id, autogenerate: true}
  schema "users" do
    field(:email, :string)
    field(:first_name, :string)
    field(:last_name, :string)
    field(:password, :string)
    many_to_many(:user_working_days, CapaPlanning.Referentials.Day, join_through: "user_working_days", on_replace: :delete, on_delete: :delete_all)
    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:first_name, :last_name, :email, :password])
    |> validate_required([:first_name, :last_name, :email, :password])
    |> validate_format(:email, ~r/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    |> validate_format(:password, ~r/^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).{6,}$/)
  end
end