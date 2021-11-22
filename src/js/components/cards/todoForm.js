import makeElement from "../../utils/makeElement";

const editedPlan = function () {
  
  const template = `
    <form class="edit-form">
    <label>ID:</label><br>
    <input type="text" id="id" /><br>
    <label>Category:</label><br>
    <input type="text" id="category"/><br>
    <label>Title:</label><br>
    <input type="text" id="title"/><br>
    <label>Task Status:</label><br>
    <input type="checkbox" id="isComplete"/><br>
    <label>Start Date:</label><br>
    <input type="text" id="startDate"/><br>
    <label>Start Time:</label><br>
    <input type="text" id="startTime"/><br>
    <label>End Date:</label><br>
    <input type="text" id="endDate"/><br>
    <label>End Time:</label><br>
    <input type="text" id="endTime"/><br>
    </form>
  `;
  return makeElement(template)
};

export default editedPlan;
