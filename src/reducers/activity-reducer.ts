import { Activity } from "../types"

// acciones quee describen que esta pasando en la app
export type ActivityActions = {

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
    
}