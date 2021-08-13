import React from 'react'

export default function open_issues (props) {
  function collectInput(event){
    props.setNewIssueValue(event);
  }

  function clearInputValue(){

  }

  return (
    <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Open Issues</h1>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Issue Form</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="inputName">Issue Name</label>
                <input type="text" id="inputName" className="form-control" name="name" onChange={collectInput}/>
              </div>
              <div className="form-group">
                <label htmlFor="inputAssignee">Assignee</label>
                <input type="text" id="inputAssignee" className="form-control" name="assignee" onChange={collectInput}/>
              </div>
              <div className="form-group">
                <label htmlFor="inputDueDate">Due Date</label>
                <input type="date" id="inputDueDate" className="form-control" name="due" onChange={collectInput}/>
              </div>
              <div className="form-group">
                <label htmlFor="inputSeverity">Severity</label>
                <select id="inputSeverity" className="form-control custom-select" name="severity" onChange={collectInput}>
                  <option selected disabled>Select one</option>
                  <option>On Hold</option>
                  <option>Canceled</option>
                  <option>Success</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputStatus">Status</label>
                <select id="inputStatus" className="form-control custom-select" name="status" onChange={collectInput}>
                  <option selected disabled>Select one</option>
                  <option>On Hold</option>
                  <option>Canceled</option>
                  <option>Success</option>
                </select>
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        <div className="col-md-6">
          <div className="card card-secondary">
            <div className="card-header">
              <h3 className="card-title">Description</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="inputDescription">Description</label>
                <textarea id="inputDescription" className="form-control" rows={14} defaultValue={""} name="description"
                 onChange={collectInput}/>
              </div>
            </div>
          </div>
          {/* /.card */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <a href="#" className="btn btn-secondary">Cancel</a>
          <input type="submit" defaultValue="Create New Project" className="btn btn-success float-right" 
          onClick={props.addNewIssue}/>
        </div>
      </div>
    </section>
    {/* /.content */}
  </div>
  )
}
