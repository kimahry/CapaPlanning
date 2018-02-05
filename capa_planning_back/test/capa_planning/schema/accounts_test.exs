defmodule CapaPlanning.Schema.Account do
  use CapaPlanningWeb.ConnCase, async: true
  alias CapaPlanning.Accounts

  setup do
    CapaPlanning.Seeds.run()
  end

  @query """
  query {
    listUser{
      id
      firstName
      LastName
      email
    }
  }
  """

  test "Query listUser return all the users" do
    conn = get(build_conn(), "/api", query: @query)
    assert %{"data" => %{"listUser" => results}} = json_response(conn, 200)
    assert length(results) > 0
  end

  @query """
  mutation ($input: UserInput!) {
    createUser(user: $input) {
      errors {
        key
        msg
      }
      user {
        id
        firstName
        lastName
        email
      }
   
    }
  }
  """

  test "Mutation createUser create the user" do
    new_user = %{
      email: "test@test.fr",
      first_name: "Patrick",
      last_name: "Dupont",
      password: "password"
    }

    conn = post(build_conn(), "/api", query: @query, variables: %{"input" => new_user})
    %{"data" => %{"createUser" => res}} = json_response(conn, 200)
    assert(res["errors"] == nil)
    user = res["user"]
    assert(user["email"] == "test@test.fr")
    assert(user["firstName"] == "Patrick")
    assert(user["lastName"] == "Dupont")
  end

  test "Mutation createUser create the user fail" do
    new_user = %{
      email: "",
      first_name: "Patrick",
      last_name: "Dupont",
      password: "password"
    }

    conn = post(build_conn(), "/api", query: @query, variables: %{"input" => new_user})
    %{"data" => %{"createUser" => res}} = json_response(conn, 200)
    assert res["errors"] == [%{"key" => "email", "msg" => "can't be blank"}]
    assert res["user"] == nil

  end

  @query """
  mutation ($input: ID!) {
    deleteUser(id: $input)
  }
  """

  test "Mutation deleteUser delete the user" do
    %{id: id} = Accounts.list_users() |> Enum.at(0)
    conn = post(build_conn(), "/api", query: @query, variables: %{"input" => id})
    assert json_response(conn, 200) == %{"data" => %{"deleteUser" => "OK"}}
  end
end