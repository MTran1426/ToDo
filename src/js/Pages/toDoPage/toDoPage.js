import logo from '../../components/icons/logo'
import header from '~/src/js/components/header/header'
import makeElement from '~/src/js/utils/makeElement'
import text from '~/src/js/components/text/text'

const toDoPage = function () {
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
    pageHeader.appendChild(makeElement(text('Plans')))
    return pageHeader

}

export default toDoPage