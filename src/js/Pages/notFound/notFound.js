 import logo from '../../Icons/logo'
 import header from '../../Components/Header/header'
 import makeElement from '../../Utils/makeElement'
 import link from '../../Components/UI/link'

const notFound = function (){
    
     const pageHeader = document.createElement('header')
     pageHeader.classList.add('page-header')
     pageHeader.appendChild(makeElement(logo()))
     pageHeader.appendChild(makeElement(header('Error 404, Page not found.')))
    
     pageHeader.append(makeElement(link("Home", "/")))

        

     return pageHeader

}

export default notFound