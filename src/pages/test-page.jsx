import React from "react";
import { Link } from "gatsby";

class TestPage extends React.Component {

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                Looks like this is still under construction. Sorry!
            </div>
        )
    }

}

export default TestPage;