# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :capa_planning,
  ecto_repos: [CapaPlanning.Repo]

# Configures the endpoint
config :capa_planning, CapaPlanningWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "S6DVa5BIm2gyCuoJSUcGPeDlRFoWfJXCxslAJqdVEE5biGEX+XzGyz43scN6xBPY",
  render_errors: [view: CapaPlanningWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: CapaPlanning.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
