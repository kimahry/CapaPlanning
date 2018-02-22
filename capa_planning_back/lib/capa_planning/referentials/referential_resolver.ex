defmodule CapaPlanning.Referentials.ReferentialResolver do
  alias CapaPlanning.Referentials

  def list_days(_, _, _) do
    {:ok, Referentials.list_days()}
  end
end