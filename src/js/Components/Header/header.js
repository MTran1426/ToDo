import styles from "./styles.module.scss"

const header = function (title="uiHeader", className='ui-header', uiStyles) {

    const element = `<h1 class="${styles[uiStyles] || styles.headerWarning}|| }">${title}</h1>`
    
    return element
}

export default header