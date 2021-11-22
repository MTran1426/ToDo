import makeElement from "../../utils/makeElement";

var complete = null;

const plan = function ({id, category, title, isComplete, startDate, startTime, endDate, endTime}) {
  
  if(isComplete == false)
  {
    isComplete = "No"
  }
  else
  {
    isComplete = "Yes"
  }
  const template = `

  <li class="planCategories" data-key="${id}">

  <h2><b>${title}</b></h2>
  <h3>Category: ${category}</h3> <p>Task Completed: ${isComplete}</p>
  <h3>Task Start: ${startDate}, ${startTime}</h3>
  <h3>Task End: ${endDate}, ${endTime}</h3>
  
  <p class="controls" data-key="${id}"><button class="edit" id="editPlan" data-key="${id}">edit</button><button class="delete" id="deletePlan" data-key="${id}">delete</button></p>
  
  </li>
  
  `;
  return makeElement(template)
};

export default plan;
