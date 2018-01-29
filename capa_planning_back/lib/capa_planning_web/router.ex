defmodule CapaPlanningWeb.Router do
  use CapaPlanningWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/" do
    # Use the default browser stack
    pipe_through(:api)

    forward(
      "/graphiql",
      Absinthe.Plug.GraphiQL,
      schema: CapaPlanningWeb.Schema,
      interface: :simple
    )

    forward(
      "/api",
      Absinthe.Plug,
      schema: CapaPlanningWeb.Schema
    )
  end

  # Other scopes may use custom stacks.
  # scope "/api", CapaPlanningWeb do
  #   pipe_through :api
  # end
end