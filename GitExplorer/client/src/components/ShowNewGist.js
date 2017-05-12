/**
 * Created by bcuser on 4/24/17.
 */

import React, { Component } from 'react';
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

                    <p className="App-intro">
                        Url: {this.props.gitGist.url}
                    </p>
                    <p className="App-intro">
                        Description: {this.props.gitGist.description}
                    </p>

                    <button className="getGist" onClick={this.props.fetchGist}>Get Gist</button>

                </div>
            );
    }

}


export default ShowNewGist;