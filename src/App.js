import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main'
import { useReducer} from "react"
import data from "./data.json"

function App() {

  const [state, dispatch] = useReducer(reducer, {data, toggleadd: false})
  console.log(state)
    function reducer(state, action){
        switch(action.type) {
            case 'addtoggle': {
                return {
                  ...data, toggleadd: action.payload
                }
            }
        }
    }

  return (
    <>
    <Nav dispatch={dispatch} state={state} />
    <Main state={state} />
    </>
  );
}

export default App;
