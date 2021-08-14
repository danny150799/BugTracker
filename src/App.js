import React, {useState} from 'react';

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Menu from "./components/menu"
import All_Issues from './components/content_pages/all_issues';
import Open_Issues from "./components/content_pages/open_issues";
import Read_Issues from "./components/content_pages/read_issues";

const issueQ = new Array();
function App() {
  const pages = ["All_Issues", "Open_Issues", "Read_Issues"]
  const [page, setPage] = useState("All_Issues")
  const issueInitial = {
    name: "",
    assignee: "",
    due: "",
    severity: "",
    status: "",
    description: "",
    createDate: "",
    lastUpdate: ""
  }

  const [newIssue, setNewIssue] = useState(issueInitial)

  function setNewIssueValue (e){
    var today = new Date()
    setNewIssue({
      ...newIssue,
      [e.target.name]: e.target.value,
      createDate: today.toLocaleString(),
      lastUpdate: today.toLocaleString()
    })
 }

  function setPageValue (newPage){
    setPage(newPage)
  }

  function addNewIssue(){
    var tempIssue = Object.assign({}, newIssue)
    issueQ.push(tempIssue)
    clearIssue()
    console.log(issueQ)
    
    
  }

  function clearIssue(){
    setNewIssue({
      ...issueInitial
    })
  }

  function changePageToDisplay (){
    if(page === pages[0]){
      return <All_Issues issueQ={issueQ}/>
    }else if(page === pages[1]){ 
      return <Open_Issues setNewIssueValue={setNewIssueValue} addNewIssue={addNewIssue} setNewIssue={setNewIssue}/>
    }else if(page === pages[2]){  
      return <Read_Issues newIssue={newIssue} setNewIssueValue={setNewIssueValue}/>
    }
  }
  
  return (
    
    <div class="wrapper">
      <Navbar />
      <Menu setPageValue={setPageValue} pages={pages}/>
      {changePageToDisplay()}
      <Footer/>
    </div>
  );
}

export default App;
