export function CustomEvent(){

    function handleClick(){
        alert(`nav clicked`)
    }
    function handleSearch(e){
        e.stopPropagation();
        alert(`search clicked`)
    }
    function handleSubmit(e){
        alert(`form clicked`)
        e.preventDefault();
    }

    return(
        <div className="container-fluid">
            <h2 style={ {backgroundColor : 'black', color : 'red'} } >Events</h2>
            <nav className="border border-2 border-secondary p-2"  onClick={handleClick}>
                <h3>Shopping</h3>
                <button onClick={handleSearch} className="bi bi-search p-4"></button>
            </nav>
            <form onSubmit={handleSubmit} style={ {backgroundColor: 'blue', border: '5px solid black'} } >
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="User" /></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}