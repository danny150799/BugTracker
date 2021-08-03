import {useState} from 'react';

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Menu from "./components/menu"
import All_Issues from './components/content_pages/all_issues';
import Open_Issues from "./components/content_pages/open_issues";
import Read_Issues from "./components/content_pages/read_issues";

function App() {
  const pages = ["All_Issues", "Open_Issues", "Read_Issues"]
  const [page, setPage] = useState("All_Issues")

  const [newIssue, setNewIssue] = useState({
    name: "",
    assignee: "",
    due: "",
    severity: "",
    status: "",
    description: "",
    createDate: "",
    lastUpdate: ""
  })

  const setNewIssueValue = e => {
    setNewIssue({...newIssue, [e.target.name]: e.target.value})
 }

  function setPageValue (newPage){
    setPage(newPage);
  }

  function changePageToDisplay (object, setObject){
    if(page === pages[0]){
      return <All_Issues />
    }else if(page === pages[1]){  
      return <Open_Issues object={object} setObject={setObject}/>
    }else if(page === pages[2]){  
      return <Read_Issues object={object} setObject={setObject}/>
    }
  }
  
  return (
    
    <div class="wrapper">
      <Navbar />
      <Menu setPageValue={setPageValue} pages={pages}/>
      {changePageToDisplay(newIssue, (e) => {
        setNewIssueValue(e)
      } )}
      <Footer/>
    </div>
  );
}

export default App;
