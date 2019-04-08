import React, { Component } from "react";

import TextInputGroup from "../shared/TextInputGroup";

import KeyResultProgressBar from "./KeyResultProgressBar";

class KeyResult extends Component {
  constructor(props) {
    super(props);
    const {
      keyResult: { name },
      objectiveId
    } = this.props;

    this.state = {
      keyResult: name,
      objectiveId: objectiveId
    };
  }

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { keyResult, objectiveId } = this.state;
    e.preventDefault();
    onSubmit(keyResult, objectiveId);
    this.setState({
      keyResult: "",
      objectiveId: null
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { type } = this.props;
    return (
      <div className="card-body">
        <KeyResultProgressBar />
        <form onSubmit={this.handleSubmit}>
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fas fa-ruler" />
              <input
                type="submit"
                value="Add Key Result"
                className="btn btn-info"
              />
              {/* Create Link Modal for editing*/}
              <i className="fas fa-pencil-alt " />
              <i className="fas fa-trash-alt " />
            </li>
          </ul>

          <TextInputGroup
            name="keyResult"
            placeholder="Complete 10 customer demos per week!"
            value={this.state.keyResult}
            type={type}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

KeyResult.defaultProps = {
  keyResult: {
    name: ""
  }
};

export default KeyResult;