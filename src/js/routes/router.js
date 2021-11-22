import homePage from "../pages/home";
import toDoPage from "../pages/toDoPage/toDoPage";
import notFound from "../pages/notFound/notFound";
import deletePage from "../pages/deletePage/deletePage";
import editPage from "../pages/editPage/editPage";
import addPage from "../pages/addPage/addPage";

const routes = {
    "/":homePage,
    "/todo":toDoPage,
    "/delete":deletePage,
    "/edit":editPage,
    "/add":addPage
}

const Router = function (pathname, params=null) {
    
    const isValidRoute = Object.keys(routes).find(key => key===pathname)
    
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if(isValidRoute === undefined)
    {
        app.appendChild(notFound())
    }else{
        app.appendChild(routes[window.location.pathname](params))
    }
        
}

export { Router }