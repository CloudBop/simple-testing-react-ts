import React from "react";

interface ChildProps {
  appCounter: number;
}
interface ChildState {
  childCounter: number;
}

export class ChildComponent extends React.Component<ChildProps, ChildState> {
  state: ChildState = {
    childCounter: 0,
  };

  private incrementCounter() {
    this.setState({
      childCounter: this.state.childCounter + 1,
    });
    // this.props.appCounter-5 //<-erorr, read only property
  }

  render() {
    console.log("rendering child component");
    return (
      <div className="ParentComponent">
        This is the child
        <br />
        <button onClick={() => this.incrementCounter()}>
          Increment child Counter
        </button>
        <br />
        <span>child count:{this.state.childCounter}</span>
        <br />
        <span>Parent count:{this.props.appCounter}</span>
      </div>
    );
  }
}
