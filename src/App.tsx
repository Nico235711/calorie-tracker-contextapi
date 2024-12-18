import { useEffect, useMemo } from "react"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import { useActivity } from "./hooks/useActivity"

function App() {
  
  const { state, dispatch } = useActivity()

  // Almacenando las actividades en LocalStorage
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities))
  }, [state.activities]);

  const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities])


  return (
    <>
      <header className="bg-lime-600 py-5">
        <div className="max-w-4xl mx-auto flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between items-center">
          <h1 className="text-center font-bold text-3xl uppercase text-white">Contador de Calorias</h1>

          <button
            className="bg-gray-800 p-3 text-white rounded-lg text-lg hover:bg-gray-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer uppercase"
            disabled={!canRestartApp}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Resetear App
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-3">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList />
      </section>
    </> 
  )
}

export default App
