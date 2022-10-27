import React from "react";

export default class Checkbox extends React.Component {
  render() {
    const { id, title, name, handleChange, checked } = this.props;

    return (
      <div>
        <input
          id={id}
          type="checkbox"
          name={name}
          onChange={handleChange}
          checked={checked}
        />
        <label htmlFor={id}>{title}</label>
      </div>
    );
  }
}
