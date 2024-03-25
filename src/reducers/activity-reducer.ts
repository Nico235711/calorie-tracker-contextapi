import { Activity } from "../types"

// acciones quee describen que esta pasando en la app
export type ActivityActions = {
  type: "save-activity",
  payload: { newActivity : Activity }
}

type ActivityState = {
  activities : Activity[]
}

// state inicial
export const initialState : ActivityState = {
  activities: []
}

// nuestro reducer
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
  ) => {
    if (action.type === "save-activity") {
      // este código maneja la lógica para actualizar el state
      console.log("desde el type save-activity");
      
    }
}