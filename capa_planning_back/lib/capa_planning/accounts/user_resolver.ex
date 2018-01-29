defmodule CapaPlanning.Accounts.UserResolver do
  
  alias CapaPlanning.Accounts

  def list_user(_,_,_) do
    {:ok,  Accounts.list_users()}
  end
end