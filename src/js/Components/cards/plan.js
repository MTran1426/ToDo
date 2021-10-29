import makeElement from "../../utils/makeElement";

const plan = function ({id,title,startDate,startTime,endDate,endTime}) {
  const template = `

  <li class="plan" data-key="${id}">
  
  <p>Title:${title}</p>
  
  <p>Start Date:${startDate} </p>
  
  <p>Start Time:${startTime}</p>
  
  <p>End Date:${endDate}</p>
  
  <p>End Time:${endTime}</p>

  <p class="controls"><button>edit</button><button>delete</button></p>
  
  </li>
  
  `;
  return makeElement(template)
};

export default plan;