import { useMemo } from "react"
import { Activity } from "../types"

type CalorieTrackerProps = {
  activities: Activity[]
}

const CalorieTracker = ({ activities } : CalorieTrackerProps) => {

  // contadores
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])

  return (
    <>
      <h2 className="text-center text-white text-3xl font-bold">Resumen de Calorías</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between mt-4">
        <p className="text-white grid grid-cols-1 gap-2 text-center">
          <span className="text-4xl font-bold">{caloriesConsumed}</span>
          Consumidas
        </p>
      </div>
    </>
  )
}

export default CalorieTracker