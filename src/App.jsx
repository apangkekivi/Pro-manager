import React, { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Project from "./components/Project.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedProjectComponent from "./SelectedProject.jsx"; // Changed the name here

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  function handleAddTask(text){
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks:[newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectState(prevState => {
        return {
            ...prevState,
            tasks: prevState.tasks.filter((task) => task.id !== id),
        };
    });
}


  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleDeleteProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  const SelectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );

  let content = <SelectedProjectComponent project={SelectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}/>; // Changed the name here

  if (projectsState.selectedProjectId === null) {
    content = <Project onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;


