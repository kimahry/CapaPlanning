defmodule CapaPlanning.Referentials.Day do
  use Ecto.Schema
  import Ecto.Changeset
  alias CapaPlanning.Referentials.Day


  @primary_key {:id, :id, autogenerate: false}
  @foreign_key_type :id
  schema "days" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(%Day{} = day, attrs) do
    day
    |> cast(attrs, [:id, :name])
    |> validate_required([:id, :name])
  end
end
