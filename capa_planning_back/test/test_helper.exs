ExUnit.start()

sandbox = Application.get_env(:capa_planning, CapaPlanning.Repo)[:pool]
sandbox.mode(CapaPlanning.Repo, :manual)

