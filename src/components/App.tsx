import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { withRouter } from "react-router";

import * as Engine from "../Engine";
import { Hello } from "./Hello";


class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }


    public render() {
        return (
            <Container>
            <div>
              <Switch>
                <Route component={Hello}/>
              </Switch>
            </div>
          </Container>
        )
      }

}

export default withRouter(App);