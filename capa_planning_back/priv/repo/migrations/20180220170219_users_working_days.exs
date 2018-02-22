defmodule CapaPlanning.Repo.Migrations.UsersWorkingDays do
  use Ecto.Migration

  def change do
    create table(:user_working_days, primary_key: false) do
      add(:user_id, :id)
      add(:day_id, :id)
    end

    unique_index(:user_working_days, [:user_id, :day_id])
  end
end