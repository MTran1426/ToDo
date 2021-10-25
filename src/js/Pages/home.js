import logo from './../Icons/logo'
import header from '../Components/Header/header'
import makeElement from '../Utils/makeElement'
import tagLine from '../Components/Tagline/tagline'
import link from './../Components/UI/link'


const homePage = function(){
    
      const pageHeader = document.createElement('header')
      pageHeader.classList.add('page-header')
      pageHeader.appendChild(makeElement(logo()))
      pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
      pageHeader.appendChild(makeElement(tagLine('Plan your future plans here')))
      pageHeader.append(link("Start Planning", "/toDoPage"))

      return pageHeader

}

export default homePage