import React from "react";
import axios from "axios";

class ListPost extends React.Component {
  state = {
    ListUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://wibuki-api.herokuapp.com/api/getposts");
    console.log(res);
    this.setState({
      ListUser: res.data,
    });
  }
  render() {
    let { ListUser } = this.state;
    console.log(ListUser);
    return (
      <div className="container">
        <div> This is list user </div>
        {ListUser &&
          ListUser.length > 0 &&
          ListUser.map((item, index) => {
            return (
              <div key={item.id}>
                {index + 1} {item.author} {item.title} {item.content}
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListPost;
