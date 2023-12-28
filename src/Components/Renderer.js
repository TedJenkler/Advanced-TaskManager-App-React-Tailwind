import data from "../data.json"

const Renderer = ( {nr, state} ) => {
    return (
            <div className="">
                <div className="flex items-center gap-4 py-6 ml-4">
                    <div className="bg-turk w-4 h-4 rounded-full"></div>
                    <h4 className="text-mediumgrey">{state.data.boards[0].columns[nr].name} ({data.boards[0].columns[nr].tasks.length})</h4>
                </div>
                <div className="ml-4 pb-4">
                    {Object.values(state.data).map((todos) => {
                        const array = todos[0].columns[nr].tasks;
                        return(
                            array.map((array) => {
                            return (
                                <div className="px-4 py-6 bg-white mb-5 rounded-lg w-64">
                                    <h3>{array.title}</h3>
                                    <p className="pl text-mediumgrey">0 of {array.subtasks.length} substasks</p>
                                </div>
                                    )
                            }))
                        })}
                </div>
            </div>
    )
}

export default Renderer
