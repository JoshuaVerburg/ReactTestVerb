import React, { Component } from 'react';
import './App.css'
import uuid from 'uuid';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

class App extends Component {
   constructor(){
       super();
       this.state = {
           projects: [

           ]
       }
   }

   componentWillMount(){
       this.setState({projects: [
               {
                   id:uuid.v4(),
                   title: 'Bussiness Website',
                   category: 'Web Design'
               },
               {
                   id:uuid.v4(),
                   title: 'Social App',
                   category: 'Mobile development'
               },
               {
                   id:uuid.v4(),
                   title: 'Shopping cart',
                   category: 'Web Development'
               },
           ]});
   }
   handleAddProject(project){
       let projects = this.state.projects;
       projects.push(project);
       this.setState({projects:projects});
   }

   handleDeleteProject(id){
        console.log(id);
       let projects = this.state.projects;
       let index = projects.findIndex(x => x.id === id);
       console.log(index);
       projects.splice(index, 1);
       console.log(projects)
       this.setState({projects:projects});
   }
  render() {

    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects projects ={this.state.projects}  onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
