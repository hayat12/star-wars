import { createActionGroup, props } from "@ngrx/store";

export interface API{
  api: string | null,
  status: number
}
export interface AppState<T>{
  loading:boolean
  app: T | null
}
export interface Success extends API {
  message: string
}

export interface Error extends API {
  message: string
}

export const appActions = createActionGroup(
  {
    source: "film",
    events: {
      request : props<{api: string}>(),
      "app success" : props<{success: Success}>(),
      "app error": props<{error: Error}>()
    }
  })
