const Empty = () => {
    return (
         <div className='bg-greywhite2 h-full flex items-center'>
            <div className='flex flex-col items-center text-center mx-4'>
                <h2 className='text-mediumgrey mb-6'>This board is empty. Create a new column to get started.</h2>
                <button className='bg-darkpurple py-3 px-4 rounded-3xl'><h3 className='text-white'>+ Add New Column</h3></button>
            </div>
        </div>
    )
}

export default Empty