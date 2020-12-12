import React from "react";
import NavigationBar from "../components/navigation.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import "../styles/main.scss"

// export default function Home() {
//   return <div>Hello world!</div>
// }

class Home extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
        </Helmet>
        <div>
            <NavigationBar />
        </div>
      </div>
    )
  }
}

export default Home;