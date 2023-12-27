import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main'
import { useReducer} from "react"
import data from "./data.json"

function App() {

  const [state, dispatch] = useReducer(reducer, {data, toggleadd: false, formadd: {title: "", description: ""}})
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
            case 'addtask': {
              return {
                ...state,
                data: {...boards}
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
