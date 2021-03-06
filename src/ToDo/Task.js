import React from "react";
import { Collapse, Button, CardHeader, CardBody, Card } from "reactstrap";
import { taskDelete } from "../Store/Actions/task";
import { connect } from "react-redux";
import Modal from '../Assets/Modal';
import Moment from 'react-moment';


//Title
//Description
//ID
//EndDate
class Task extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
      collapse: false
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  deleteTaskHandler = () => {
    let id = this.props.id;
    let token = localStorage.getItem("jwt");
    this.props.deleteTask(id, token);
  };
  render() {
    let createdTime=<Moment fromNow >{this.props.createdOn}</Moment>;
    let timeRemaining=<Moment toNow>{this.props.endDate}</Moment>
    return (
      <div>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardHeader onClick={this.toggle}>
              <h3>{this.props.title}</h3>
            </CardHeader>
            <CardBody>
              <p>Description:{this.props.description}</p>
              <p>Task ends {timeRemaining}</p>
              <p>Task created {createdTime}</p>
              <Button color="danger" onClick={this.deleteTaskHandler}>
                Delete Task
              </Button>
            </CardBody>
          </Card>
        </Collapse>

        <div>
          <li
            className="list-group-item d-flex flex-row justify-content-between"
            onClick={this.toggle}
          >
            <span>{this.props.title}</span>
          </li>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        modalOpen:state.ui.modalOpen
    }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteTask: (id, token) => dispatch(taskDelete(id,token))  
  };
};
export default connect(null,mapDispatchToProps)(Task);
