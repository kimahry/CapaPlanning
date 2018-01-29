# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     CapaPlanning.Repo.insert!(%CapaPlanning.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

CapaPlanning.Repo.insert!(%CapaPlanning.Accounts.User{
  :first_name => "Laurent",
  :last_name => "Meunier",
  :email => "laurentm@magelo.com"
})

CapaPlanning.Repo.insert!(%CapaPlanning.Accounts.User{
  :first_name => "Kévin",
  :last_name => "Le Texier",
  :email => "kévin@gmail.com"
})

CapaPlanning.Repo.insert!(%CapaPlanning.Accounts.User{
  :first_name => "Perrine",
  :last_name => "Dionisi",
  :email => "perrine.dionise@gmail.com"
})

CapaPlanning.Repo.insert!(%CapaPlanning.Accounts.User{
  :first_name => "Nicolas",
  :last_name => "Thébaud",
  :email => "nthebaud@gmail.com"
})