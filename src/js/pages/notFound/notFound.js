 import logo from '../../components/icons/logo'
 import header from '../../components/header/header'
 import makeElement from '../../utils/makeElement'
 import link from '../../components/ui/link'

const notFound = function (){
    
     const pageHeader = document.createElement('header')
     pageHeader.classList.add('page-header')
     pageHeader.appendChild(makeElement(logo()))
     pageHeader.appendChild(makeElement(header('Error 404, Page not found.')))
     pageHeader.append(makeElement(link("Home", "/")))

        

     return pageHeader

}

export default notFound
