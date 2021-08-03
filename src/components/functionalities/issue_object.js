import React, { Component } from 'react'

export default class issue extends Component {
    constructor(props){
        this.issue_name = props.issue_name
        this.issue_assignee = props.issue_assignee
        this.issue_due = props.issue_due
        this.issue_severity = props.issue_severity
        this.issue_status = props.issue_status
        this.issue_description = props.issue_description
        this.issue_created_date = props.issue_created_date
        this.issue_last_updated_date = props.issue_last_updated_date
    }
    
    setIssueName = (newName)=>{
        this.issue_name = newName
    }

    setIssueAssignee = (newAssignee) => {
        this.issue_assignee = newAssignee
    }

    setIssueDue= (newDueDate) => {
        this.issue_due = newDueDate
    }
    
    setIssueSeverity = (newSeverity) => {
        this.issue_severity = newSeverity
    }

    setIssueStatus = (newStatus) => {
        this.issue_status = newStatus
    }

    setIssueDescription = (newDescription) => {
        this.setIssueDescription = newDescription
    }

    setIssueLastUpdatedDate = (newUpdatedDate) => {
        this.issue_last_updated_date = newUpdatedDate
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
