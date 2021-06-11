import React, {Component} from "react";

class JChome extends Component {


    state = {
        isActive: false
    }

    showHandler = () => {
        this.setState({
            isActive: true
        })
    }

    hideHandler = () => {
        this.setState({
            isActive: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron">
                    {this.state.isActive ? <div className="alert alert-secondary" role="alert">
                        WYŚWIETLONY ALERT!
                    </div> : null}
                    <button onClick={this.showHandler}>POKAŻ ALERT</button>
                    <button onClick={this.hideHandler}>UKRYJ ALERT</button>
                </div>
            </React.Fragment>
        )
    }
}

export default JChome;