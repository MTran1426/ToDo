import logo from '../../components/icons/logo'
import header from '../../components/header/header'
import makeElement from '../../utils/makeElement'
import button from '../../components/addtodo/addtodo'
import link from '../../components/ui/link'
import { Router } from '../../routes/router'
import reducers from '../../redux/reducers'
import { getStore } from '../../redux/store'
import editedPlan from '../../components/cards/todoForm'
import tagLine from '../../components/tagline/tagline'

const addPage = function (props){
    
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
    pageHeader.appendChild(makeElement(tagLine('Plan your future plans here')))
    pageHeader.appendChild(makeElement(header('Add Item')))
     
    const container = editedPlan()
    pageHeader.appendChild(container)

    const cancelButton = pageHeader.appendChild(makeElement(button('cancel', 'cancel')))
    const addButton = pageHeader.appendChild(makeElement(button('add', 'baseButton')))
    
    function onAddPlan (e) {
         const index = getStore().findIndex((plan)=>{
              return (plan.id === props.id)
         })
         const action = {
              type:"add",
              payload:{index},
              cb:()=> Router('/todo')
         }

         reducers(action)
    }

    function onCancelAdd (e) {
         Router('/todo')
    }

    addButton.addEventListener('click', onAddPlan)
    cancelButton.addEventListener('click', onCancelAdd)
    
       

    return pageHeader

}

export default addPage