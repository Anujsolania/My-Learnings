export function Todos({todos}) {

    return <div>
        {todos.map(function(singletodo) {
            return <div>
            <h1>{ singletodo.title }</h1>
            <h2>{ singletodo.description} </h2>
            <button>{ singletodo.completed == true? "true" : "false" }</button>
            </div>
        })
        }
        </div>
}