defmodule CapaPlanning.Accounts.UserResolver do
  alias CapaPlanning.Accounts
  alias CapaPlanning.Accounts.User

  def count_user(_, args, _) do
    {:ok, Accounts.count_users(args)}
  end

  def list_user(_, args, _) do
    {:ok, Accounts.list_users(args)}
  end

  def delete_user(_, args, _) do
    case Accounts.delete_user(%User{} |> Map.merge(args)) do
      {:ok, _} ->
        {:ok, "OK"}

      {:error, _} ->
        {:error, "Error"}
    end
  end

  def create_user(_, %{user: user}, _) do
    case Accounts.create_user(user) do
      {:ok, user} ->
        {:ok, %{:user => user, :error => nil}}

      {:error, changeset} ->
        errors = transform_errors(changeset)
        {:ok, %{:user => nil, :errors => errors}}
    end
  end

  defp transform_errors(changeset) do
    changeset
    |> Ecto.Changeset.traverse_errors(&format_error/1)
    |> Enum.map(fn {key, value} ->
      %{key: key, msg: value}
    end)
  end

  @spec format_error(Ecto.Changeset.error()) :: String.t()
  defp format_error({msg, opts}) do
    Enum.reduce(opts, msg, fn {key, value}, acc ->
      String.replace(acc, "%{#{key}}", to_string(value))
    end)
  end
end