import {
  // combineReducers,
  createStore
} from "redux"

// ACTIONS -- actions.js
// Minimal representation of the change to the data
export const createTask = () => ({
  type: "CREATE_TASK" // <-- action.type
})

// REDUCERS -- reducers.js
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "RETRIEVE_TASKS":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- RETRIEVE_TASKS | state: ", state)
      console.log(" -- REDUCER -- RETRIEVE_TASKS | action", action)
      return state.tasks

    default:
      return state
  }
}

// Initial State
// Minimal representation of the data in the app
let id = 4
const initialState = {
  dossiers: [
    { id: 1, name: "Sally", items: ["a", "b"] },
    { id: 2, name: "Jim", items: ["c", "d"] },
    { id: 3, name: "Gemma", items: ["e", "f"] }
  ],
  newTaskValue: ""
}

// COMBINE ALL REDUCERS INTO 1 OBJECT
// export const reducers = combineReducers({
//     tasks
// });

// STORE -- store.js
export function configureStore(initialState = initialState) {
  // initialState = initialState | {}
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store
}

export const store = configureStore()
