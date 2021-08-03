import React, { Component } from 'react'

export default class open_issues extends Component {
  
  render() {
    
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
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAssignee">Assignee</label>
                  <input type="text" id="inputAssignee" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputDueDate">Due Date</label>
                  <input type="date" id="inputDueDate" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputSeverity">Severity</label>
                  <select id="inputSeverity" className="form-control custom-select">
                    <option selected disabled>Select one</option>
                    <option>On Hold</option>
                    <option>Canceled</option>
                    <option>Success</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputStatus">Status</label>
                  <select id="inputStatus" className="form-control custom-select">
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
                  <textarea id="inputDescription" className="form-control" rows={14} defaultValue={""} />
                </div>
              </div>
            </div>
            {/* /.card */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a href="#" className="btn btn-secondary">Cancel</a>
            <input type="submit" defaultValue="Create new Porject" className="btn btn-success float-right" />
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
    )
  }
}
