for n <- 1..200 do
  CapaPlanning.Repo.insert!(%User{:first_name => "User#{n}", :last_name => "User#{n}", :email => "user#{n}@gmail.com", :password => "user#{n}"})
end