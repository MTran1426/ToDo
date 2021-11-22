import logo from '../../components/icons/logo'
import header from '~/src/js/components/header/header'
import makeElement from '~/src/js/utils/makeElement'
import tagLine from '../../components/tagline/tagline'
import todos from '../../components/cards/todoList'
import plan from '../../components/cards/todoItem'
import {getStore} from '../../redux/store'
import button from '../../components/addtodo/addtodo'
import { Router } from '../../routes/router'

const toDoPage = function () {
    const planList = getStore()
    console.log(getStore())
    function onDeletePlan (e) {
        const planId = {id:e.currentTarget.dataset.key}
        Router('/delete', planId)
        console.log(planId)
    }
    function onEditPlan (e) {
        const planId = {id:e.currentTarget.dataset.key}
        Router('/edit', planId)
        console.log(planId)
    }
    function onAddPlan (e) {
        const planId = {id:e.currentTarget.dataset.key}
        Router('/add', planId)
        console.log(planId)
    }

    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
    pageHeader.appendChild(makeElement(tagLine('Plan your future plans here')))
    
    const container = todos()
    if(planList !== null){
        const ul = container.querySelector('ul')
        //const elements = [...new Set(planList.map(item=> plan(item)))]
        const elements = planList.map(item => plan(item))
        elements.forEach(element => {
            element.querySelector('#deletePlan').addEventListener('click', onDeletePlan)
            element.querySelector('#editPlan').addEventListener('click', onEditPlan)
            ul.append(element)
        })
        pageHeader.append(container)
    }


    pageHeader.appendChild(makeElement(button('Add Plan', 'baseButton'))).addEventListener('click', onAddPlan)
    
    
    return pageHeader

}

export default toDoPage
