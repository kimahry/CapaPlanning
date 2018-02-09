defmodule CapaPlanning.Schema.GenericTypes do
  use Absinthe.Schema.Notation

  @desc "Paginator object"
  input_object :paginator do
    @desc "The current page index"
    field(:page_index, :integer, default_value: 0)
    @desc "The current page size"
    field(:page_size, :integer, default_value: 50)
    @desc "The current total number of items being paged"
    field(:length, :integer)
  end

  @desc "Sort object"
  input_object :sort do  
    @desc "The field wihch is sorted"
    field(:active, non_null(:string))
    @desc "The direction of the sort"
    field(:direction, :order_dir, default_value: :asc)
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