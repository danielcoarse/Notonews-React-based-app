import React, { Component } from "react";

export default class CategorySelect extends Component {
  render() {
    const { categories, onClick, sortKey } = this.props;

    return (
      <section className="category-select">
        <div className="container">
          <div className="category-wrapper">
            <p className="category-header">Category</p>
            <ul className="category-list">
              {categories.map((el) => {
                const clazz = el === sortKey ? "active" : null;

                return (
                  <li
                    className={`category-item ${clazz}`}
                    data-value={el}
                    onClick={onClick}
                    key={Math.random()}
                  >
                    {el.slice(0, 1).toUpperCase() + el.slice(1)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
