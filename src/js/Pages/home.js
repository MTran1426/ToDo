import logo from '../components/icons/logo'
import header from '../components/header/header'
import makeElement from '../utils/makeElement'
import tagLine from '../components/tagline/tagline'
import link from '../components/ui/link'


const homePage = function(){
      
      const pageHeader = document.createElement('header')
      pageHeader.classList.add('page-header')
      pageHeader.appendChild(makeElement(logo()))
      pageHeader.appendChild(makeElement(header('ToDo Calender Planner App')))
      pageHeader.appendChild(makeElement(tagLine('Plan your future plans here')))
      pageHeader.append(link("Start Planning", "/todo"))
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

