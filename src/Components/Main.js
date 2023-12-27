import data from "../data.json"

const Main = () => {

    return (<>
        {data.length < 0 ? <div className='bg-greywhite2 h-full flex items-center'>
            <div className='flex flex-col items-center text-center mx-4'>
                <h2 className='text-mediumgrey mb-6'>This board is empty. Create a new column to get started.</h2>
                <button className='bg-darkpurple py-3 px-4 rounded-3xl'><h3 className='text-white'>+ Add New Column</h3></button>
            </div>
        </div> :
        <div className="bg-greywhite2 flex min-w-full overflow-auto">
            <div className="">
                <div className="flex items-center gap-4 py-6 ml-4">
                    <div className="bg-turk w-4 h-4 rounded-full"></div>
                    <h4 className="text-mediumgrey">{data.boards[0].columns[0].name} ({data.boards[0].columns[0].tasks.length})</h4>
                </div>
                <div className="ml-4 pb-4">
                    {Object.values(data).map((todos) => {
                        const array = todos[0].columns[0].tasks;
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
            <div>
                <div className="flex items-center gap-4 py-6 ml-4">
                    <div className="bg-turk w-4 h-4 rounded-full"></div>
                    <h4 className="text-mediumgrey">{data.boards[0].columns[1].name} ({data.boards[0].columns[1].tasks.length})</h4>
                </div>
                <div className="ml-4 pb-4">
                    {Object.values(data).map((todos) => {
                        const array = todos[0].columns[1].tasks;
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
            <div>
                <div className="flex items-center gap-4 py-6 ml-4">
                    <div className="bg-turk w-4 h-4 rounded-full"></div>
                    <h4 className="text-mediumgrey">{data.boards[0].columns[2].name} ({data.boards[0].columns[2].tasks.length})</h4>
                </div>
                <div className="ml-4 mr-4 pb-4">
                    {Object.values(data).map((todos) => {
                        const array = todos[0].columns[2].tasks;
                        return(
                            array.map((array) => {
                            return (
                                <div className="px-4 py-6 bg-white mb-5 rounded-lg w-64">
                                    <h3>{array.title}</h3>
                                    <p className="pl text-mediumgrey">{array.subtasks.length} of {array.subtasks.length} substasks</p>
                                </div>
                                    )
                            }))
                        })}
                </div>
            </div>
        </div>
        }
    </>
)
}

export default Main