import data from "../data.json"
import Empty from "./Empty";
import Renderer from "./Renderer";

const Main = (state) => {

    return (<>
        {data.length < 0 ? <Empty /> :
        <div className="bg-greywhite2 flex min-w-full overflow-auto">
            <Renderer nr={0} />
            <Renderer nr={1} />
            <Renderer nr={2} />
        </div>
        }
    </>
)
}

export default Main