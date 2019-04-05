import {
  // combineReducers,
  createStore
} from "redux"

// ACTIONS -- actions.js
// Minimal representation of the change to the data
// Retrieve Tasks from Server Action
export const updateTasksList = (tasks) => ({
  type: "UPDATE_TASKS_LIST",
  tasks
})



export const createNewTab = () => ({
  type: "CREATE_NEW_TAB" // <-- action.type
})
export const createNewItem = () => ({
  type: "CREATE_NEW_ITEM" // <-- action.type
})
export const viewProfile = (id) => ({
  type: "VIEW_PROFILE",
  id
})
// export const deleteTask = (id) => ({
//   type: "DELETE_TASK", // <-- action.type
//   id // <-- action.idx
// })
export const updateNewTabValue = (value) => ({
  type: "UPDATE_NEW_TAB_VALUE",
  value
})
export const updateNewItemValue = (value) => ({
  type: "UPDATE_NEW_ITEM_VALUE",
  value
})
// export const resetNewTaskValue = () => ({
//   type: "RESET_NEW_TASK_VALUE"
// })
// export const toggleCompleteTask = (id) => ({
//   type: "TOGGLE_COMPLETE_TASK",
//   id
// })

// REDUCERS -- reducers.js
export const reducers = (state = initialState, action) => {
  switch (action.type) {


    case "UPDATE_TASKS_LIST":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_TASKS_LIST | state: ", state)
      console.log(" -- REDUCER -- UPDATE_TASKS_LIST | action", action)
      return {
        ...state,
        tasks: action.tasks
      }

    case "CREATE_NEW_TAB":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- CREATE_NEW_TAB | state: ", state)
      console.log(" -- REDUCER -- CREATE_NEW_TAB | action", action)
      id++
      return {
        ...state,
        tasks: [...state.tasks, { id, title: state.newTabValue, items:[] }],
        newTabValue: "" // reset "Add New Tab" input box
      }

    case "CREATE_NEW_ITEM":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- CREATE_NEW_ITEM | state: ", state)
      console.log(" -- REDUCER -- CREATE_NEW_ITEM | action", action)
      id++
      console.log("PRE-CHANGE, state: ", state);
      console.log("PRE-CHANGE, state.newItemValue: ", state.newItemValue);
      let updatedObject;
      return {
        ...state,
        tasks: [ ...state.tasks.map( (task) => {
          if ( task.id === state.profileToView.id){
            updatedObject = { ...task, items: [...task.items, state.newItemValue]};
            return { ...task, items: [...task.items, state.newItemValue]}
          }
          return task;
        })],
        newItemValue: "", // reset "Add New Item" input box
        profileToView: updatedObject

      }
      
      // return {
      //   ...state,
      //   tasks: [ ...state.tasks.map( (task) => {
      //     if ( task.id === state.profileToView.id){
      //       return { ...task, items: [...task.items, state.newItemValue]}
      //     }
      //     return task;
      //   })],
      //   newItemValue: "" // reset "Add New Item" input box
      // }

    case "VIEW_PROFILE":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- VIEW_PROFILE | state: ", state)
      console.log(" -- REDUCER -- VIEW_PROFILE | action", action)
      let profileIdx = state.tasks.findIndex((task) => {
        return task.id === action.id
      })
      return {
        ...state,
        profileToView: Object.assign({}, state.tasks[profileIdx])
      }

    // case "DELETE_TASK":
    //   console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
    //   console.log(" -- REDUCER -- DELETE_TASK | state: ", state)
    //   console.log(" -- REDUCER -- DELETE_TASK | action", action)
    //   let deleteIndex = state.tasks.findIndex((obj) => obj["id"] === action.id)
    //   return {
    //     ...state,
    //     tasks: [...state.tasks.slice(0, deleteIndex), ...state.tasks.slice(deleteIndex + 1)]
    //   }

    // case "RESET_NEW_TASK_VALUE":
    //   console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
    //   console.log(" -- REDUCER -- RESET_NEW_TASK_VALUE | state: ", state)
    //   console.log(" -- REDUCER -- RESET_NEW_TASK_VALUE | action", action)
    //   return { ...state, newTaskValue: "" }

    case "UPDATE_NEW_TAB_VALUE":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_NEW_TASK_VALUE | state: ", state)
      console.log(" -- REDUCER -- UPDATE_NEW_TASK_VALUE | action: ", action)
      console.log(" -- REDUCER -- UPDATE_NEW_TASK_VALUE | action.type: ", action.type)
      console.log(" -- REDUCER -- UPDATE_NEW_TASK_VALUE | action.value: ", action.value)
      return { ...state, newTabValue: action.value }

    case "UPDATE_NEW_ITEM_VALUE":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_NEW_ITEM_VALUE | state: ", state)
      console.log(" -- REDUCER -- UPDATE_NEW_ITEM_VALUE | action: ", action)
      console.log(" -- REDUCER -- UPDATE_NEW_ITEM_VALUE | action.type: ", action.type)
      console.log(" -- REDUCER -- UPDATE_NEW_ITEM_VALUE | action.value: ", action.value)
      return { ...state, newItemValue: action.value }

    // case "TOGGLE_COMPLETE_TASK":
    //   console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
    //   console.log(" -- REDUCER -- TOGGLE_COMPLETE_TASK | state: ", state)
    //   console.log(" -- REDUCER -- TOGGLE_COMPLETE_TASK | action", action)
    //   let toggleIndex = state.tasks.findIndex((obj) => obj["id"] === action.id)
    //   state.tasks[toggleIndex].completed = !state.tasks[toggleIndex].completed
    //   return {
    //     ...state,
    //     tasks: [...state.tasks]
    //   }

    default:
      return state
  }
}

// Initial State
// Minimal representation of the data in the app
let id = 3
const initialState = {
  tasks: [
    { id: 1, title: "Sally", items: ["Sally01", "Sally02"] },
    { id: 2, title: "Jim", items: ["Jim01", "Jim02"] },
    { id: 3, title: "Gemma", items: ["Gemma01", "Gemma02"] }
  ],
  newTabValue: "",
  newItemValue: "",
  profileToView: null
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
