defmodule CapaPlanning.Repo.Migrations.CreateDays do
  use Ecto.Migration

  def change do
    create table(:days, primary_key: true) do
      add :name, :string

      timestamps()
    end

  end
end
