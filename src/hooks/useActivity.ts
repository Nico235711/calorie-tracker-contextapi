import { useContext } from "react"
import { ActivityContext } from "../context/ActivityContext"

export const useActivity = () => {
  const context = useContext(ActivityContext)
  if (!context) {
    // tira un error si no hay un context
    throw new Error("useContext must be used within a BudgetProvider");
  }
  return context
}