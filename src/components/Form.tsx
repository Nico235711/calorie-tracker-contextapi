import { categories } from "../data/categories"

const Form = () => {

  return (
    <form className="rounded-lg shadow space-y-5 bg-white p-10">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría:</label>
        <select
          name="category"
          id="category"
          className="border-2 border-slate-200 p-2 rounded-lg"
        >
          {
            categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </select>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>
        <input
          type="text"
          name="activity"
          id="activity" 
          className="border-2 border-slate-200 p-2 rounded-lg"
          placeholder="Ej: manzana, jugo de naranja, ensaldada, bicicleta"
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
        />
      </div>

      <input
        type="submit"
        value="Agregar" 
        className="bg-gray-800 w-full py-2 text-white uppercase text-lg font-bold cursor-pointer rounded-lg"
      />
    </form>
  )
}

export default Form