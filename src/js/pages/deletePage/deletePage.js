 import logo from '../../components/icons/logo'
 import header from '../../components/header/header'
 import makeElement from '../../utils/makeElement'
 import button from '../../components/ui/button/button'
 import link from '../../components/ui/link'

const deletePage = function (){
     
     const pageHeader = document.createElement('header')
     pageHeader.classList.add('page-header')
     pageHeader.appendChild(makeElement(logo()))
     pageHeader.appendChild(makeElement(header('Delete Item')))
     pageHeader.appendChild(makeElement(button('cancel')))
     pageHeader.appendChild(makeElement(button('delete')))
        

     return pageHeader

}

export default deletePage