defmodule CapaPlanning.Referentials.ReferencialTypes do
  use Absinthe.Schema.Notation

  @desc "The object representing a day"
  object :day do
    @desc "The day's ID"
    field(:id, :id)
    @desc "The day's name"
    field(:name, :string)
  end
end