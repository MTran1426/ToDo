import logo from '../../components/icons/logo'
import header from '~/src/js/components/header/header'
import makeElement from '~/src/js/utils/makeElement'
import tagLine from '../../components/tagline/tagline'
import todos from '../../components/cards/todo'
import plan from '../../components/cards/plan'
import {getStore} from '../../redux/store'


const toDoPage = function () {
    const planList = getStore()
    console.log(getStore())

    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
    pageHeader.appendChild(makeElement(tagLine('Plan your future plans here')))
    
    const container = todos()
    
    if(planList !== null){
        const ul = container.querySelector('ul')
        const elements = planList.map(emp=> plan(emp))
        elements.forEach(element=> container.append(element))
        pageHeader.append(container)
    }
    
    return pageHeader

}

export default toDoPage