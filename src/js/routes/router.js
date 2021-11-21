import homePage from "../pages/home";
import toDoPage from "../pages/toDoPage/toDoPage";
import notFound from "../pages/notFound/notFound";
import deletePage from "../pages/deletePage/deletePage";

const routes = {
    "/":homePage,
    "/todo":toDoPage,
    "/delete":deletePage
}

const Router = function (pathname) {
    
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
        app.appendChild(routes[window.location.pathname]())
    }
        
}

export { Router }