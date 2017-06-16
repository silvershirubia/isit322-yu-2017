/**
 * Created by bcuser on 4/24/17.
 */

import React, {Component} from 'react';
import '../css/App.css';
import Logger from '../elf-logger';
const logger = new Logger('show-new-gist', 'blue', 'yellow', '24px');

class ShowNewGist extends Component {

    constructor() {
        super();//always call first
        logger.log('Get ShowNewGist called');
    }

    render() {
        return (
            <div className="App">

                <button className="getGist" onClick={this.props.fetchGist}>Get Gist</button>

                <p className="App-intro">
                    Url: {this.props.gitGist.url}
                </p>
                <p className="App-intro">
                    Created Date: {this.props.gitGist.created_at}
                </p>
                <p className="App-intro">
                    Description: {this.props.gitGist.description}
                </p>
                <p className="App-intro">
                    Id: {this.props.gitGist.id}
                </p>
                <p className="App-intro">
                    Number of Comments: {this.props.gitGist.comments}
                </p>

            </div>
        );
    }

}

export default ShowNewGist;