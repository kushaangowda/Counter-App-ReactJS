import React, { Component } from "react";
class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value, // props is an object which contains all attributes(except key) and its values of a component
  //     tags: ["tag1", "tag2", "tag3"],
  //   };

  styles = {
    //fontSize: 20,
    fontWeight: "bold",
  };

  //this.props.children returns stuff within Counter tag in counters.jsx

  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps", prevProps);
    console.log("PrevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("counter.value changed");
      //Make AJAX call to get data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    // console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-dark btn-sm"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
