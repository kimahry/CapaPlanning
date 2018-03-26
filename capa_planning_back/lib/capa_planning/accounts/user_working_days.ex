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

  def changeset(%UserWorkingDays{} = user_working_days, attrs) do
    user_working_days
    |> cast(attrs, [:user_id, :day_id, :worked])
    |> validate_required([:user_id, :day_id, :worked])
  end

  def createDefautWorkingDays() do
    Enum.reduce(1..7, [], fn day_id, acc -> insert_day(acc, day_id) end)
  end

  defp insert_day(acc, day_id) do
    List.insert_at(acc, -1, Map.new([{:day_id, day_id}, {:worked, if(day_id > 5, do: false, else: true)}]))
  end
end
