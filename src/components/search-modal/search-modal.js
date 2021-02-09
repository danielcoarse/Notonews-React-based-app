import React, { Component } from "react";

export default class SearchModal extends Component {
  state = {
    inputValue: "",
  };

  inputRef = React.createRef();

  onChangeHandler = (e) => {
    this.setState({
      inputValue: e.target.value.toLowerCase(),
    });
  };

  onSubmit = (e) => {
    const { onSubmitHandler } = this.props;
    const { inputValue } = this.state;

    e.preventDefault();

    onSubmitHandler(inputValue);

    this.setState({
      inputValue: "",
    });
  };

  componentDidUpdate() {
    if (this.props.isActive) {
      this.inputRef.focus();
    } else {
      this.inputRef.blur();
    }
  }

  componentWillUnmount() {
    this.inputRef.blur();
  }

  render() {
    const { isActive } = this.props;

    const clazz = isActive
      ? "search-modal search-modal-active"
      : "search-modal";

    return (
      <section className={clazz}>
        <div className="container">
          <div className="search-modal-wrapper">
            <div className="modal-body">
              <form
                className="input-group"
                name="newsControls"
                onSubmit={this.onSubmit}
              >
                <input
                  className="form-control rounded-0"
                  type="text"
                  name="search"
                  value={this.state.inputValue}
                  placeholder="Search something"
                  aria-label="Search something"
                  aria-describedby="my-addon"
                  onChange={this.onChangeHandler}
                  ref={(input) => (this.inputRef = input)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-warning btn-submit rounded-0"
                    name="submit"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
