defmodule CapaPlanning.Schema.GenericTypes do
  use Absinthe.Schema.Notation

  @desc "Paginator object"
  input_object :paginator do
    @desc "The row data offset"
    field(:offset, :integer, default_value: 0)
    @desc "The number of row to fetch"
    field(:limit, :integer, default_value: 50)
    @desc "The field wihch is sorted"
    field(:sort_field, non_null(:string))
    @desc "The direction of the sort"
    field(:sort_dir, :order_dir, default_value: :asc)
  end

  @desc "Standard object to display mutation error"
  object :error do
    @desc "The key in error"
    field(:key, :string)
    @desc "The error message"
    field(:msg, :string)
  end

  enum :order_dir do
    value(:asc)
    value(:desc)
  end
end