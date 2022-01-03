import React from "react";
import { ChildComponent } from "./DemoStateProps";

interface AppState {
  appCounter: number;
}

export class DemoApp extends React.Component<{}, AppState> {
  state: AppState = {
    appCounter: 0,
  };

  private incrementCounter() {
    this.setState({
      appCounter: this.state.appCounter + 1,
    });
  }

  render() {
    console.log("rendering parent");
    return (
      <div className="ParentComponent">
        This is the parent
        <br />
        <button onClick={() => this.incrementCounter()}>
          Increment Parent Counter
        </button>
        <ChildComponent appCounter={this.state.appCounter} />
      </div>
    );
  }
}
