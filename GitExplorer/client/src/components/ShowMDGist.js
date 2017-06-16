/**
 * Created by bcuser on 4/24/17.
 */

import React, {Component} from 'react';
import '../css/App.css';
import Logger from '../elf-logger';
const logger = new Logger('show-md-gist', 'blue', 'yellow', '24px');

class ShowMDGist extends Component {

    constructor() {
        super();//always call first
        logger.log('Get ShowMDGist called');
    }

    render() {
        return (
            <div className="App">

                <button className="getMDGist" onClick={this.props.fetchMDGist}>Get File Info</button>

                <p className="App-intro">
                    FileName: {this.props.gitMDGist.filename}
                </p>
                <p className="App-intro">
                    File Type: {this.props.gitMDGist.type}
                </p>
                <p className="App-intro">
                    Raw Url: {this.props.gitMDGist.raw_url}
                </p>
                <p className="App-intro">
                    Size: {this.props.gitMDGist.size}
                </p>
                <p className="App-intro">
                    Content: {this.props.gitMDGist.content}
                </p>

            </div>
        );
    }

}

export default ShowMDGist;