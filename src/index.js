import { Project } from "./project";
import "./style.css";
import { Todo } from "./todo";

console.log("Hi");

// let task1 = new Todo("Sleep", "Go to bed on time", "5th", "Top");
// console.log(task1);

const newProjectButton = document.querySelector(".new-project-button");
const newProjectArea = document.querySelector(".new-project-area");
const newProjectTitle = document.querySelector("#new-project-name");
const addProjectButton = document.querySelector(".add-button");
const cancelProjectButton = document.querySelector(".cancel-button");

[newProjectButton, addProjectButton, cancelProjectButton].forEach(
  (toggleButton) => {
    toggleButton.addEventListener("click", () => {
      newProjectButton.classList.toggle("hidden");
      newProjectArea.classList.toggle("hidden");
    });
  }
);

let projectList = [];
projectList.push(new Project("Demo Project"));

// When add button is pressed: push the new Project into the projectList array and load list
addProjectButton.addEventListener("click", () => {
  projectList.push(new Project(newProjectTitle.value));
  newProjectTitle.value = "";
  console.log(projectList);
  loadProjectList();
});

const projectListArea = document.querySelector(".project-list");

// Clears list then adds all projects to the list
function loadProjectList() {
  clearList();
  projectList.forEach((project) => {
    const projectListItem = document.createElement("li");
    projectListItem.setAttribute("class", "project");
    const projectListIcon = document.createElement("div");
    projectListIcon.classList.add("project-icon", "nav-icon");
    const projectListName = document.createElement("p");
    projectListItem.append(projectListIcon, projectListName);
    projectListName.textContent = project._title;
    projectListArea.appendChild(projectListItem);
  });
}

// Removes all elements in the list
function clearList() {
  while (projectListArea.lastChild)
    projectListArea.removeChild(projectListArea.lastChild);
}
