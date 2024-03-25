import { Activity } from "../types"

// acciones quee describen que esta pasando en la app
export type ActivityActions = 
  { type: "save-activity", payload: { newActivity: Activity } } |
  { type: "set-activeId", payload: { id: Activity["id"] } } 

export type ActivityState = {
  activities : Activity[],
  activeId: Activity["id"]
}

// state inicial
export const initialState : ActivityState = {
  activities: [],
  activeId: ""
}

// nuestro reducer
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
  ) => {
    if (action.type === "save-activity") {
      // este código maneja la lógica para actualizar el state

      // retorno del estado actualizado
      return {
        ...state,
        activities: [...state.activities, action.payload.newActivity]
      }
    }

    if (action.type === "set-activeId") {
      return {
        ...state,
        activeId: action.payload.id
      }
    }

    return state
}