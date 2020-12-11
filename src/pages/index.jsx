import React from "react";
import { Link } from "gatsby";

// export default function Home() {
//   return <div>Hello world!</div>
// }

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>
          hi
        </h1>
        <Link to="/test-page">Test Page!</Link>
      </div>
    )
  }
}

export default Home;