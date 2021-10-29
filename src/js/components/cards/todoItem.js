import makeElement from "../../utils/makeElement";

const plan = function ({id, category, title, isComplete, startDate, startTime, endDate, endTime}) {
  const template = `

  <li class="planCategories" data-key="${category}">
  
  <h3>${category} category</h3> <p>Completed:${isComplete}</p>
  

  <p class="controls"><button class="edit">edit</button><button class="delete">delete</button></p>
  
  </li>
  
  `;
  return makeElement(template)
};

export default plan;
