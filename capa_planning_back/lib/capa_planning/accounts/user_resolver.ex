defmodule CapaPlanning.Accounts.UserResolver do
  alias CapaPlanning.Accounts
  alias CapaPlanning.Accounts.User

  def list_user(_, _, _) do
    {:ok, Accounts.list_users()}
  end

  def delete_user(_, args, _) do
    case Accounts.delete_user(%User{} |> Map.merge(args)) do
      {:ok, _} ->
        {:ok, "OK"}

      {:error, _} ->
        {:error, "Error"}
    end
  end

  def create_user(_, args, _) do
    case Accounts.create_user(args) do
      {:ok, user} ->
        {:ok, %{:user => user, :error => nil}}

      {:error, changeset} ->
        IO.inspect(changeset)
        {:ok, %{:user => nil, :error => errors_on(changeset)}}
    end
  end

  def errors_on(changeset) do
    Ecto.Changeset.traverse_errors(changeset, fn {message, opts} ->
      Enum.reduce(opts, message, fn {key, value}, acc ->
        String.replace(acc, "%{#{key}}", to_string(value))
      end)
    end)
  end
end