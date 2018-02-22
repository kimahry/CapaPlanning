defmodule CapaPlanning.Referentials.ReferentialFields do
  use Absinthe.Schema.Notation
  alias CapaPlanning.Referentials.ReferentialResolver

  @desc "Query the days"
  object :list_day do
    field :list_day, list_of(:day) do
      resolve(&ReferentialResolver.list_days/3)
    end
  end
end