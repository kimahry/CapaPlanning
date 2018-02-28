defmodule CapaPlanning.Seeds do
  def run() do
    alias CapaPlanning.Accounts
    alias CapaPlanning.Accounts.{UserWorkingDays}
    alias CapaPlanning.Referentials

    Referentials.create_day(%{:id => 1, :name => "Monday"})
    Referentials.create_day(%{:id => 2, :name => "Tuesday"})
    Referentials.create_day(%{:id => 3, :name => "Wednesday"})
    Referentials.create_day(%{:id => 4, :name => "Thursday"})
    Referentials.create_day(%{:id => 5, :name => "Friday"})
    Referentials.create_day(%{:id => 6, :name => "Saturday"})
    Referentials.create_day(%{:id => 7, :name => "Sunday"})

    Accounts.create_user(
      %{
        :first_name => "Laurent",
        :last_name => "Meunier",
        :email => "laurentm@magelo.com",
        :password => "Test123"
      },
      [
        %UserWorkingDays{:day_id => 1, :worked => true},
        %UserWorkingDays{:day_id => 2, :worked => true},
        %UserWorkingDays{:day_id => 3, :worked => true},
        %UserWorkingDays{:day_id => 4, :worked => true},
        %UserWorkingDays{:day_id => 5, :worked => true},
        %UserWorkingDays{:day_id => 6, :worked => false},
        %UserWorkingDays{:day_id => 7, :worked => false}
      ]
    )

    # post = Ecto.build_assoc(user, :posts, %{header: "Clickbait header", body: "No real content"}) A tester
    Accounts.create_user(
      %{
        :first_name => "Kévin",
        :last_name => "LE texier",
        :email => "kevin@gmail.com",
        :password => "Test123"
      },
      [
        %UserWorkingDays{:day_id => 1, :worked => true},
        %UserWorkingDays{:day_id => 2, :worked => true},
        %UserWorkingDays{:day_id => 3, :worked => true},
        %UserWorkingDays{:day_id => 4, :worked => true},
        %UserWorkingDays{:day_id => 5, :worked => false},
        %UserWorkingDays{:day_id => 6, :worked => false},
        %UserWorkingDays{:day_id => 7, :worked => false}
      ]
    )

    Accounts.create_user(
      %{
        :first_name => "Perrine",
        :last_name => "Dionisi",
        :email => "perrine.dionise@gmail.com",
        :password => "Test123"
      },
      [
        %UserWorkingDays{:day_id => 1, :worked => false},
        %UserWorkingDays{:day_id => 2, :worked => true},
        %UserWorkingDays{:day_id => 3, :worked => true},
        %UserWorkingDays{:day_id => 4, :worked => true},
        %UserWorkingDays{:day_id => 5, :worked => true},
        %UserWorkingDays{:day_id => 6, :worked => false},
        %UserWorkingDays{:day_id => 7, :worked => false}
      ]
    )

    Accounts.create_user(
      %{
        :first_name => "Nicolas",
        :last_name => "Thébaud",
        :email => "nthebaud@gmail.com",
        :password => "Test123"
      },
      [
        %UserWorkingDays{:day_id => 1, :worked => true},
        %UserWorkingDays{:day_id => 2, :worked => true},
        %UserWorkingDays{:day_id => 3, :worked => false},
        %UserWorkingDays{:day_id => 4, :worked => true},
        %UserWorkingDays{:day_id => 5, :worked => true},
        %UserWorkingDays{:day_id => 6, :worked => false},
        %UserWorkingDays{:day_id => 7, :worked => false}
      ]
    )

    :ok
  end
end