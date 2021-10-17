import logo from './../Icons/logo';
import header from '../Components/Header/header'
import button from '../Components/Button/button'
import makeElement from '../Utils/makeElement';

const homePage = function (params){
    
    const pageHeader = document.createElement('header')
        pageHeader.classList.add('page-header')
        pageHeader.appendChild(makeElement(logo()))
        pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
        pageHeader.appendChild(makeElement(button('Calendar Planning')))

    return pageHeader

}

export default homePage