# ---
# Excerpted from "Craft GraphQL APIs in Elixir with Absinthe",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/wwgraphql for more book information.
# ---
defmodule CapaPlanningWeb.Schema do
  use Absinthe.Schema

  import_types(CapaPlanning.Accounts.UserTypes)
  import_types(CapaPlanning.Accounts.UserFields)

  import_types(CapaPlanning.Schema.GenericTypes)

  @desc "Queries"
  query do
    import_fields(:list_user)
    import_fields(:count_user)
    import_fields(:get_user)
  end

  @desc "Mutations"
  mutation do
    import_fields(:delete_user)
    import_fields(:create_user)
  end
end