import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main'
import { useReducer} from "react"
import data from "./data.json"

function App() {

  const [state, dispatch] = useReducer(reducer, {data, toggleadd: false, formadd: {title: "", description: "", subtask: ""}, addsubtaskarray: []})
  console.log(state)
    function reducer(state, action){
        switch(action.type) {
            case 'addtoggle': {
                return {
                  ...state, toggleadd: action.payload
                }
            }
            case 'addtitle': {
              return {
                ...state, formadd: {...state.formadd, title: action.payload}
              }
          }
            case 'adddescription': {
              return {
                ...state, formadd: {...state.formadd, description: action.payload}
              }
          }
          case 'addsubtaskbuilder1': {
            return {
              ...state,
              data: {...state.data, boards: {...state.data.boards, 0: {...state.data.boards[0], columns: {...state.data.boards[0].columns, [0]: {...data.boards[0].columns[0], tasks: [...data.boards[0].columns[0].tasks, {subtasks: [...data.boards[0].columns[0].tasks[0].subtasks, {title: action.payload}]}]}}}}}
            }
        }
        case 'addsubtaskbuilder2': {
          return {
            ...state, subtask2: action.payload
          }
      }
      case 'addsubtaskbuilder3': {
        return {
          ...state, subtask3: action.payload
        }
     }
          case 'addsubtaskfield': {
            return {
              ...state, addsubtaskarray: [...state.addsubtaskarray, {}]
            }
        }
            case 'addtask': {
              return {
                ...state,
                data: {...state.data, boards: {...state.data.boards, 0: {...state.data.boards[0], columns: {...state.data.boards[0].columns, [0]: {...data.boards[0].columns[0], tasks: [...data.boards[0].columns[0].tasks, {title: state.formadd.title, description: state.formadd.description, subtasks: state.addsubtaskarray}]}}}}}
              }
          }
        }
    }

  return (
    <>
    <Nav dispatch={dispatch} state={state} />
    <Main state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
