import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Increment and Decrement in Class component Test!</h2>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>
          {" "}
          <AddIcon />{" "}
        </button>
        <button onClick={this.handleDecrement}>
          {" "}
          <RemoveIcon />{" "}
        </button>
      </div>
    );
  }
}

export default ClassComponent;
