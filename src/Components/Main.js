import data from "../data.json"
import AddTask from "./AddTask";
import Empty from "./Empty";
import Renderer from "./Renderer";

const Main =  ( {state, dispatch} ) => {

    return (<>
        {state.data.length < 0 ? <Empty /> :
        <div className="bg-greywhite2 flex min-w-full overflow-auto">
            <Renderer nr={0} state={state} />
            <Renderer nr={1} state={state} />
            <Renderer nr={2} state={state} />
            <AddTask state={state} dispatch={dispatch} />
        </div>
        }
    </>
)
}

export default Main