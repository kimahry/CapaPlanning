defmodule CapaPlanning.Seeds do
  def run() do
    alias CapaPlanning.Accounts
    alias CapaPlanning.Referentials

    Referentials.create_day(%{:id => 1, :name => "Monday"})
    Referentials.create_day(%{:id => 2, :name => "Tuesday"})
    Referentials.create_day(%{:id => 3, :name => "Wednesday"})
    Referentials.create_day(%{:id => 4, :name => "Thursday"})
    Referentials.create_day(%{:id => 5, :name => "Friday"})
    Referentials.create_day(%{:id => 6, :name => "Saturday"})
    Referentials.create_day(%{:id => 7, :name => "Sunday"})

    days = Referentials.list_days()

    Accounts.create_user(
      %{
        :first_name => "Laurent",
        :last_name => "Meunier",
        :email => "laurentm@magelo.com",
        :password => "Test123"
      },
      Enum.drop(days, -2)
    )

    Accounts.create_user(
      %{
        :first_name => "Kévin",
        :last_name => "LE texier",
        :email => "kevin@gmail.com",
        :password => "Test123"
      },
      Enum.drop(days, -3)
    )

    Accounts.create_user(
      %{
        :first_name => "Perrine",
        :last_name => "Dionisi",
        :email => "perrine.dionise@gmail.com",
        :password => "Test123"
      },
      Enum.drop(days, 3)
    )

    Accounts.create_user(
      %{
        :first_name => "Nicolas",
        :last_name => "Thébaud",
        :email => "nthebaud@gmail.com",
        :password => "Test123"
      },
      Enum.drop(days, 2)
    )

    :ok
  end
end