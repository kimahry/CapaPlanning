defmodule CapaPlanning.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias CapaPlanning.Repo

  alias CapaPlanning.Accounts.User

  @doc """
  Count the number of users for the a search pattern

  """
  @spec count_users(:map) :: :integer
  def count_users(filter) do
    filter
    |> Enum.reduce(User, fn {:pattern, pattern}, query ->
      fitler_users(query, pattern)
    end)
    |> count_query()
    |> Repo.all()
  end

  defp count_query(query) do
    from(p in query, select: count(p.id))
  end

  @doc """
  Returns the list of users.

  The param fitler is a map that can contain the following element: pattern, paginator and sort

  """
  @spec list_users(:map) :: {:ok, User}
  def list_users(filter) do
    filter
    |> Enum.reduce(User, fn
      {:pattern, pattern}, query ->
        fitler_users(query, pattern)

      {:paginator, paginator}, query ->
        query |> paginator(paginator)

      {:sort, sort}, query ->
        query |> order_by({^sort.direction, ^convert_to_atom_snake_case(sort.active)})
    end)
    |> Repo.all()
    |> Repo.preload(:user_working_days)
  end

  @doc false
  defp convert_to_atom_snake_case(value) do
    value
    |> Macro.underscore()
    |> String.to_atom()
  end

  @doc """
  Added a paginator to the request
  """
  @spec paginator(Ecto.Query, %{page_size: integer, offset: integer}) :: Ecto.Query
  def paginator(query, paginator) do
    from(p in query, limit: ^paginator.page_size, offset: ^calcul_offset(paginator))
  end

  @doc false
  defp calcul_offset(paginator) do
    paginator.page_index * paginator.page_size
  end

  @doc """
  Filter the user on their first name, last name and email with the given pattern
  """
  @spec fitler_users(Ecto.Query, :string) :: Ecto.Query
  def fitler_users(query, pattern) when pattern != "" do
    from(
      q in query,
      where: ilike(q.first_name, ^"%#{pattern}%") or ilike(q.last_name, ^"%#{pattern}%") or ilike(q.email, ^"%#{pattern}%")
    )
  end

  @doc false
  def fitler_users(query, _pattern) do
    query
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get_user!(123)
      %User{}

      iex> get_user!(456)
      ** (Ecto.NoResultsError)

  """
  @spec get_user!(:integer) :: {:ok, User} | {:error, Ecto.Changeset}
  def get_user!(id), do: Repo.get!(User, id)

  @doc """
  Creates a user.

  ## Examples

      iex> create_user(%{field: value})
      {:ok, %User{}}

      iex> create_user(%{field: value}, [%Day{}])
      {:ok, %User{}}

      iex> create_user(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  @spec create_user(:map, list(Day) | []) :: {:ok, User} | {:error, Ecto.Changeset}
  def create_user(attrs \\ %{}, working_days \\ []) do
    %User{}
    |> User.changeset(attrs)
    |> Ecto.Changeset.put_assoc(:user_working_days, working_days)
    |> Repo.insert()
  end

  @doc """
  Updates a user.

  ## Examples

      iex> update_user(user, %{field: new_value})
      {:ok, %User{}}

      iex> update_user(user, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  @spec update_user(%User{}, map) :: {:ok, User} | {:error, Ecto.Changeset}
  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a User.

  ## Examples

      iex> delete_user(user)
      {:ok, %User{}}

      iex> delete_user(user)
      {:error, %Ecto.Changeset{}}

  """
  @spec delete_user(User) :: {:ok, User} | {:error, Ecto.Changeset}
  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.

  ## Examples

      iex> change_user(user)
      %Ecto.Changeset{source: %User{}}

  """
  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end
end