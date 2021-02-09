import React, { Component } from "react";

export default class CardSection extends Component {
  render() {
    const { children, onClickHandler } = this.props;

    return (
      <main onClick={onClickHandler}>
        <div className="container">
          <div className="card-columns">{children}</div>
        </div>
      </main>
    );
  }
}
