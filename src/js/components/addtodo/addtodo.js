import styles from './styles.module.scss'
//import makeElement from '../../utils/makeElement'

const button = function (title="uiButton", uiStyles) { //className='ui-button

    const element = `<button class="${styles.uiStyles || styles.baseButton}">${title}</button>`
    //const element = makeElement(template);
    return element
}

export default button
