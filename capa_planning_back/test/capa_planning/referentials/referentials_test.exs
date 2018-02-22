defmodule CapaPlanning.ReferentialsTest do
  use CapaPlanning.DataCase

  alias CapaPlanning.Referentials

  describe "days" do
    alias CapaPlanning.Referentials.Day

    @valid_attrs %{id: 42, name: "some name"}
    @update_attrs %{id: 43, name: "some updated name"}
    @invalid_attrs %{id: nil, name: nil}

    def day_fixture(attrs \\ %{}) do
      {:ok, day} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Referentials.create_day()

      day
    end

    test "list_days/0 returns all days" do
      day = day_fixture()
      assert Referentials.list_days() == [day]
    end

    test "get_day!/1 returns the day with given id" do
      day = day_fixture()
      assert Referentials.get_day!(day.id) == day
    end

    test "create_day/1 with valid data creates a day" do
      assert {:ok, %Day{} = day} = Referentials.create_day(@valid_attrs)
      assert day.id == 42
      assert day.name == "some name"
    end

    test "create_day/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Referentials.create_day(@invalid_attrs)
    end

    test "update_day/2 with valid data updates the day" do
      day = day_fixture()
      assert {:ok, day} = Referentials.update_day(day, @update_attrs)
      assert %Day{} = day
      assert day.id == 43
      assert day.name == "some updated name"
    end

    test "update_day/2 with invalid data returns error changeset" do
      day = day_fixture()
      assert {:error, %Ecto.Changeset{}} = Referentials.update_day(day, @invalid_attrs)
      assert day == Referentials.get_day!(day.id)
    end

    test "delete_day/1 deletes the day" do
      day = day_fixture()
      assert {:ok, %Day{}} = Referentials.delete_day(day)
      assert_raise Ecto.NoResultsError, fn -> Referentials.get_day!(day.id) end
    end

    test "change_day/1 returns a day changeset" do
      day = day_fixture()
      assert %Ecto.Changeset{} = Referentials.change_day(day)
    end
  end
end
