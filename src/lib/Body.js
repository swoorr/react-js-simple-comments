import React from "react";
import axios from "axios";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      comm: [],
      comment_name: "",
      comment_content: "",
    };
  }

  __getDate() {
    this.setState({
      date: new Date(),
    });
  }

  handleChange(event) {
    this.setState({ comment_name: event.target.value });
  }
  handleChangeComm(event) {
    this.setState({ comment_content: event.target.value });
  }

  API_URL = "";

  __getData = () => {
    axios.get(API_URL).then((data) => {
      var selam = data.data;
      this.setState({
        comm: selam,
      });
    });
  };

  __submit = (e) => {
    console.log("alert");
    axios
      .post(API_URL, {
        date: this.state.date.toLocaleTimeString(),
        name: this.state.comment_name,
        content: this.state.comment_content,
      })
      .then((data) => {
        this.__getData();
      });
    e.preventDefault();
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.__getDate(), 1000);

    this.__getData();
  }

  render() {
    return (
      <div className="page__body">
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <h3>Comment form...</h3>
        <form onSubmit={this.__submit.bind(this)}>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.comment_name}
            type="text"
            name="body"
            placeholder="Name"
          />
          <br />
          <textarea
            onChange={this.handleChangeComm.bind(this)}
            value={this.comment_content}
            name="content"
            placeholder="Content"
          ></textarea>
          <br />
          <input type="submit" value="Submit comment" />
        </form>

        <h3>Comments list...</h3>
        {Object.values(this.state.comm).map((d) => (
          <p className="border" key={d.id}>
            <b>
              {d.name} - {d.date}{" "}
            </b>
            <br />
            {d.content}
          </p>
        ))}
      </div>
    );
  }
}

export default Body;
