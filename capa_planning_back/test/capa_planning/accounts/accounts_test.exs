defmodule CapaPlanning.AccountsTest do
  use CapaPlanning.DataCase

  alias CapaPlanning.Accounts

  describe "users" do
    alias CapaPlanning.Accounts.User

    @valid_attrs %{email: "test@gmail.fr", first_name: "kévin", last_name: "lopert", password: "Test1234"}
    @update_attrs %{email: "testupdate@mail.fr", first_name: "patrick", last_name: "dupond", password: "Test2345"}
    @invalid_attrs %{email: "my-email.fr", first_name: "", last_name: "", password: "pasword"}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Accounts.create_user()

      user
    end

    test "Count the number of user" do
      user_fixture()
      assert Accounts.count_users(%{}) == [1]
    end

    test "list_users/0 returns all users" do
      user = user_fixture()
      assert Accounts.list_users(%{}) == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      assert Accounts.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Accounts.create_user(@valid_attrs)
      assert user.email == "test@gmail.fr"
      assert user.first_name == "kévin"
      assert user.last_name == "lopert"
      assert user.password == "Test1234"
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      assert {:ok, user} = Accounts.update_user(user, @update_attrs)
      assert %User{} = user
      assert user.email == "testupdate@mail.fr"
      assert user.first_name == "patrick"
      assert user.last_name == "dupond"
      assert user.password == "Test2345"
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
      assert user == Accounts.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Accounts.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Accounts.change_user(user)
    end
  end
end