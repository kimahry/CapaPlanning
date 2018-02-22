defmodule CapaPlanning.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users, primary_key: true) do
      add :first_name, :string
      add :last_name, :string
      add :email, :string
      add :password, :string
      
      timestamps()
    end

  end
end
