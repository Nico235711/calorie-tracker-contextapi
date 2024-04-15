import { useMemo } from "react"
import CaloriesResume from "./CaloriesResume"
import { useActivity } from "../hooks/useActivity"

const CalorieTracker = () => {

  const { state } = useActivity()

  // contadores
  const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [state.activities])
  const caloriesBurned = useMemo(() => state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [state.activities])
  const diffCalories = caloriesConsumed - caloriesBurned

  return (
    <>
      <h2 className="text-center text-white text-3xl font-black">Resumen de Calorías</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between  mt-4">
        <CaloriesResume 
          calories={caloriesConsumed}
          text="Calorías Consumidas"
        />
        <CaloriesResume 
          calories={caloriesBurned}
          text="Calorías Quemadas"
        />
        <CaloriesResume 
          calories={diffCalories}
          text="Diferencia"
        />
      </div>
    </>
  )
}

export default CalorieTracker