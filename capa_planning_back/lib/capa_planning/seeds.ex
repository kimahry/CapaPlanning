defmodule CapaPlanning.Seeds do
  def run() do
    alias CapaPlanning.Accounts.User

    CapaPlanning.Repo.insert!(%User{
      :first_name => "Laurent",
      :last_name => "Meunier",
      :email => "laurentm@magelo.com"
    })

    CapaPlanning.Repo.insert!(%User{
      :first_name => "Kévin",
      :last_name => "Le Texier",
      :email => "kévin@gmail.com"
    })

    CapaPlanning.Repo.insert!(%User{
      :first_name => "Perrine",
      :last_name => "Dionisi",
      :email => "perrine.dionise@gmail.com"
    })

    CapaPlanning.Repo.insert!(%User{
      :first_name => "Nicolas",
      :last_name => "Thébaud",
      :email => "nthebaud@gmail.com"
    })

    :ok
  end
end