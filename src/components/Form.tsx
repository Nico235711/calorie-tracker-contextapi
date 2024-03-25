import { ChangeEvent, FormEvent, useState } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types"

const Form = () => {

  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0
  })

  const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

    const isNumberField = ["category", "calories"].includes(e.target.id)    

    // convert a specify field in number
    setActivity({
      ...activity,
      [e.target.id] : isNumberField ? +e.target.value : e.target.value
    })
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const isValidActivity = () => {  
    const { name, calories } = activity
    // trim() delete spaces at the begining and at the end
    return name.trim() !== "" && calories > 0
  }

  return (
    <form
      className="rounded-lg shadow space-y-5 bg-white p-10"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría:</label>
        <select
          name="category"
          id="category"
          className="border-2 border-slate-200 p-2 rounded-lg"
          value={activity.category}
          onChange={handleChange}
        >
          {
            categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </select>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input
          type="text"
          name="activity"
          id="name" 
          className="border-2 border-slate-200 p-2 rounded-lg"
          placeholder="Ej: manzana, jugo de naranja, ensaldada, bicicleta"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorías:</label>
        <input
          type="text"
          name="calories"
          id="calories" 
          className="border-2 border-slate-200 p-2 rounded-lg"
          placeholder="Ej: 350 o 500 calorías"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"} 
        className="bg-gray-800 w-full py-2 text-white uppercase text-lg font-bold cursor-pointer rounded-lg disabled:opacity-10"
        disabled={!isValidActivity()}
      />
    </form>
  )
}

export default Form