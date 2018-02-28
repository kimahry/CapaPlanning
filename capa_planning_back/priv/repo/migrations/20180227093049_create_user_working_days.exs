defmodule CapaPlanning.Repo.Migrations.CreateUserWorkingDays do
  use Ecto.Migration

  def change do
    create table(:user_working_days) do
      add(:user_id, references("users", on_delete: :delete_all))
      add(:day_id, references("days"))
      add(:worked, :boolean, default: false, null: false)

      timestamps()
    end

    unique_index(:user_working_days, [:user_id, :day_id])
  end
end