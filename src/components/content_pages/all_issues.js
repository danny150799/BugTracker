import React, { Component } from 'react'

export default function all_issues (props) {
    window.onload = function(){
        createIssueList()
    }
    function createIssueList(){
        let tableContainer = document.getElementById("issue-container")
        let tbody = document.createElement("tbody")
        let trow = document.createElement("tr")
        trow.className = "row"
        
        let issueArray = new Array(5)
        for (let index = 0; index < issueArray.length; index++) {
            issueArray[index] = document.createElement("td")
            if (index === 0) {
                issueArray[index].className = "col-lg-1"
                let tempDiv = document.createElement("div")
                tempDiv.className = "icheck-primary"

                let tempInput = document.createElement("input")
                tempInput.type = "checkbox"
                tempInput.id = "check1"
                tempDiv.appendChild(tempInput)

                let tempLable = document.createElement("label")
                tempLable.htmlFor = "check1"
                tempDiv.appendChild(tempLable)

                issueArray[index].appendChild(tempDiv)
            }else if (index === 1) {
                issueArray[index].className = "mailbox-name col-lg-1"
                issueArray[index].textContent = "lmao"
            }else if (index === 2) {
                issueArray[index].className = "mailbox-subject col-lg-7"
                issueArray[index].textContent = "lmao"
            }else if (index === 3) {
                issueArray[index].className = "mailbox-name col-lg"
                issueArray[index].textContent = "lmao"
            }else {
                issueArray[index].className = "mailbox-name col-lg"
                issueArray[index].textContent = "lmao"
            }

            trow.appendChild(issueArray[index])
        }

        tbody.appendChild(trow)
        tableContainer.appendChild(tbody)
        
    }

    return (
        <div>
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>All Issues</h1>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content">
            
                {/* Small boxes (Stat box) */}
                <div className="row">
                {/* ./col */}
                    <div className="col-lg-2 ">
                        {/* small box */}
                        <div className="small-box bg-success">
                        <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Bounce Rate</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-2">
                        {/* small box */}
                        <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>44</h3>
                            <p>User Registrations</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-2">
                        {/* small box */}
                        <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* small box */}
                        <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* small box */}
                        <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* small box */}
                        <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    {/* ./col */}
                    </div>
                    {/* /.row */}
            {/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="row">
                <div className="col">
                    <div className="card card-primary card-outline">
                    <div className="card-header">
                        <h3 className="card-title">Inbox</h3>
                        <div className="card-tools">
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="Search Mail" />
                            <div className="input-group-append">
                            <div className="btn btn-primary">
                                <i className="fas fa-search" />
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /.card-tools */}
                    </div>
                    {/* /.card-header */}
                    <div className="card-body p-0">
                        <div className="mailbox-controls">
                        {/* Check all button */}
                        <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="far fa-square" />
                        </button>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default btn-sm">
                            <i className="far fa-trash-alt" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                            <i className="fas fa-reply" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                            <i className="fas fa-share" />
                            </button>
                        </div>
                        {/* /.btn-group */}
                        <button type="button" className="btn btn-default btn-sm">
                            <i className="fas fa-sync-alt" />
                        </button>
                        <div className="float-right">
                            1-50/200
                            <div className="btn-group">
                            <button type="button" className="btn btn-default btn-sm">
                                <i className="fas fa-chevron-left" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                                <i className="fas fa-chevron-right" />
                            </button>
                            </div>
                            {/* /.btn-group */}
                        </div>
                        {/* /.float-right */}
                        </div>
                        <div className="mailbox-controls">
                            <div className ="row">
                                <div className="col-lg-1">
                                   
                                </div>
                                <div className="col-lg-1">
                                    ID
                                </div>
                                <div className="col-lg-7">
                                    Summary
                                </div>
                                <div className="col-lg">
                                    Assignee
                                </div>
                                <div className="col-lg">
                                    Reporter
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mailbox-messages">
                        <table className="table table-hover table-striped" id="issue-container"> </table>
                        {/* /.table */}
                        </div>
                        {/* /.mail-box-messages */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer p-0">
                        <div className="mailbox-controls">
                        {/* Check all button */}
                        <button type="button" className="btn btn-default btn-sm checkbox-toggle">
                            <i className="far fa-square" />
                        </button>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default btn-sm">
                            <i className="far fa-trash-alt" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                            <i className="fas fa-reply" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                            <i className="fas fa-share" />
                            </button>
                        </div>
                        {/* /.btn-group */}
                        <button type="button" className="btn btn-default btn-sm">
                            <i className="fas fa-sync-alt" />
                        </button>
                        <div className="float-right">
                            1-50/200
                            <div className="btn-group">
                            <button type="button" className="btn btn-default btn-sm">
                                <i className="fas fa-chevron-left" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                                <i className="fas fa-chevron-right" />
                            </button>
                            </div>
                            {/* /.btn-group */}
                        </div>
                        {/* /.float-right */}
                        </div>
                    </div>
                    </div>
                    {/* /.card */}
                </div>
                {/* /.col */}
                </div>
                {/* /.row */}
            </section>
            {/* /.content */}
            </div>
            {/* /.content-wrapper */}
        </div>

    )
    
}
