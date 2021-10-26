import logo from './../Icons/logo'
import header from '../Components/Header/header'
import makeElement from '../Utils/makeElement'
import tagLine from '../Components/Tagline/tagline'
import link from './../Components/UI/link'


const homePage = function(){
      
      const pageHeader = document.createElement('header')
      pageHeader.classList.add('page-header', 'ui-header')
      pageHeader.appendChild(makeElement(logo()))
      pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
      pageHeader.appendChild(makeElement(tagLine('Plan your future plans here')))
      pageHeader.append(link("Start Planning", "/toDoPage"))
      return pageHeader

      // const page = document.createElement('div')  
      // let headerTemplate = `
      //       <header class="page-header">
                  
      //       </header>
      // `
      // const pageHeader = makeElement(headerTemplate)
      // const pageLogo = logo()
      // const secondHeader = header('ToDo Calender Planner App')
      // const pageTagLine = tagLine('Plan your future plans here')
      // const toDoLink = link("Start Planning", "/toDoPage")

      // pageHeader.append(pageLogo, secondHeader, pageTagLine, toDoLink)

      // page.append(pageHeader)

      // return page 
}

export default homePage

