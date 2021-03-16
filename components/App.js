import React, { Component } from "react";
import Header from "./Header";
import Title from "./Title/Title";
import Attacks from "./Attacks/Attacks";
import Weaknesses from "./Weaknesses/Weaknesses";

class App extends Component {
  state = {
    showAttacks: false,
    showWeaknesses: false,
  };

  toggleShowAttacks = () => {
    const newValue = !this.state.showAttacks;
    this.setState({ showAttacks: newValue });
  };

  toggleShowWeaknesses = () => {
    const newValue = !this.state.showWeaknesses;
    this.setState({ showWeaknesses: newValue });
  };

  render() {
    let weaknesses = null;
    if (this.state.showWeaknesses) {
      weaknesses = <Weaknesses />;
    }
    return (
      <div>
        <Header
          attacksClicked={this.toggleShowAttacks}
          weaknessesClicked={this.toggleShowWeaknesses}
        />
        <Title />
        {this.state.showAttacks ? <Attacks /> : null}
        {weaknesses}
      </div>
    );
  }
}

export default App;
