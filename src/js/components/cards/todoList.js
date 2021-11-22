import makeElement from '../../utils/makeElement'

const todos = function (){
    const template = `
    <aside id="todos" class="todos">
    <header>
        <h2 class="plans">Plans</h2>
    </header>
    <ul id="plans" class="plans">
     
    </ul>
    </aside>
    `

    return makeElement(template)
}

export default todos
