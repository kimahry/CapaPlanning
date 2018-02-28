defmodule CapaPlanning.Accounts.UserWorkingDays do
  use Ecto.Schema
  import Ecto.Changeset
  alias CapaPlanning.Accounts.UserWorkingDays
  alias CapaPlanning.Referentials.Day

  schema "user_working_days" do
    belongs_to(:day, Day)
    field(:user_id, :integer)
    field(:worked, :boolean, default: false)

    timestamps()
  end

  @doc false
  def changeset(%UserWorkingDays{} = user_working_days, attrs) do
    user_working_days
    |> cast(attrs, [:user_id, :day_id, :worked])
    |> validate_required([:user_id, :day_id, :worked])
  end
end