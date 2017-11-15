import * as React from "react";
import { Message } from "semantic-ui-react";

export interface HelloProps {  }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return  <Message color='green'>Hello</Message>;
    }
}
