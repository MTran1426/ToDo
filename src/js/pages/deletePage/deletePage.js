 import logo from '../../components/icons/logo'
 import header from '../../components/header/header'
 import makeElement from '../../utils/makeElement'
 import button from '../../components/addtodo/addtodo'
 import link from '../../components/ui/link'
import { Router } from '../../routes/router'
import reducers from '../../redux/reducers'
import { getStore } from '../../redux/store'
import tagLine from '../../components/tagline/tagline'

const deletePage = function (props){
     
     const pageHeader = document.createElement('header')
     pageHeader.classList.add('page-header')
     pageHeader.appendChild(makeElement(logo()))
     pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
    pageHeader.appendChild(makeElement(tagLine('Plan your future plans here')))
     pageHeader.appendChild(makeElement(header('Delete Item')))
     const cancelButton = pageHeader.appendChild(makeElement(button('cancel', 'cancel')))
     const deleteButton = pageHeader.appendChild(makeElement(button('delete', 'delete')))
     
     function onDeletePlan (e) {
          const index = getStore().findIndex((plan)=>{
               return (plan.id === props.id)
          })
          const action = {
               type:"delete",
               payload:{index},
               cb:()=> Router('/todo')
          }

          reducers(action)
     }

     function onCancelDelete (e) {
          Router('/todo')
     }

     deleteButton.addEventListener('click', onDeletePlan)
     cancelButton.addEventListener('click', onCancelDelete)
     // const cancelButton = button('cancel')
     // const deleteButton = button('delete')
     // let headerTemplate = `
     //      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
     //      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
     //      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
     //      </svg>
     //      <h1 class="ui-header">Delete Item</h1>
     // `
     // const details = makeElement(headerTemplate)
     // details.querySelector('header').append(cancelButton, deleteButton)
     // pageHeader.append(details)
        

     return pageHeader

}

export default deletePage