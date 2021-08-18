import React, { Component } from 'react'

export default function all_issues (props) {
    window.onload = function(){
        createIssueList()
    }
    function createIssueList(){
        const tbody = document.getElementById("issue-container")
        for (let issue = 0; issue < props.issueQ.length; issue++) {
            const trow = document.createElement("tr").className("row")
            tbody.appendChild(trow)
            const td_array = new Array(5)

            for (let td_index = 0; td_index < td_array.length; td_index++) {
                td_array[td_index] = document.createElement("td")
                if (td_index === 0) {
                    td_array[td_index].className("mailbox-name col-lg-1")
                    
                    const checklist_div = document.createElement("div").className("icheck-primary")
                    td_array[td_index].appendChild(checklist_div)

                    const checklist_input = document.createElement("input").type("checkbox").id("check1")
                    checklist_div.appendChild(checklist_input)

                    const checklist_lable = document.createElement("lable").htmlFor("check1")
                    checklist_div.appendChild(checklist_lable)

                    trow.appendChild(td_array[td_index])
                }else if (td_index === 1) {
                    td_array[td_index].className("mailbox-name col-lg-1")
                    trow.appendChild(td_array[td_index])
                }else if (td_index === 2) {
                    td_array[td_index].className("mailbox-name col-lg-7")
                    trow.appendChild(td_array[td_index])
                }else if (td_index === 3) {
                    td_array[td_index].className("mailbox-name col-lg")
                    trow.appendChild(td_array[td_index])
                }else {
                    td_array[td_index].className("mailbox-name col-lg")
                    trow.appendChild(td_array[td_index])
                }
            }

            const tempdiv = document.createElement("div")
            tempdiv.className("icheck-primary")
            tbody.appendChild(trow)
            
        }
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
                        <table className="table table-hover table-striped" id="issue-container">
                            <tbody>
                            <tr className="row">
                                <td className="col-lg-1">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="check1" />
                                    <label htmlFor="check1" />
                                </div>
                                </td>
                                <td className="mailbox-name col-lg-1"><a >Alexander</a></td>
                                <td className="mailbox-subject col-lg-7">Trying to find a solution to this problem...</td>
                                <td className="mailbox-name col-lg">Alexander Pierce</td>
                                <td className="mailbox-name col-lg"><a >Alexander Pierce</a></td>
                            </tr>
                            </tbody>
                            
                        </table>
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
