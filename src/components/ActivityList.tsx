import { useMemo } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types"
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

type ActivityListProps = {
  activities: Activity[]
}

const ActivityList = ({ activities } : ActivityListProps) => {

  const categoryName = useMemo(
    () => (category : Activity["category"]) => categories.map(cat => cat.id === category ? cat.name : ""), [activities])

  return (
    <>
      <h2 className="font-bold text-4xl text-center">Comidas y Actividades</h2>
      {
        activities.map(activity => (
          <div
            key={activity.id}
            className="px-5 py-10 bg-white mt-5 flex justify-between"
          >
            <div className="space-y-2 relative">
              <p className={`absolute -top-8 -left-8 px-5 py-2 text-white uppercase font-bold ${activity.category === 1 ? `bg-lime-500` : `bg-orange-500`}`}>{categoryName(activity.category)}</p>
              <p className="text-3xl font-bold capitalize">{activity.name}</p>
              <p className="text-4xl font-black text-lime-500">{activity.calories} Calorías</p>
            </div>

            <div className="flex gap-5 items-center">
              <button>
                <PencilSquareIcon 
                  className="h-8 w-8 text-gray-800"
                />
              </button>
              <button>
                <TrashIcon 
                  className="h-8 w-8 text-gray-800"
                />
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ActivityList