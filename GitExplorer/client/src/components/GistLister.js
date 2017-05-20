/**
 * Created by bcuser on 5/16/17.
 */

import React, {Component} from 'react';

import '../css/App.css';
import ElfLogger from '../elf-logger';

const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('Gist List Constructor');

    }

    render() {

        return (
            <div>
                <h2>Gist Lister</h2>

                <button className="getGistList" onClick={this.props.fetchGistList}>Get Gist List</button>


                <p className="App-intro">
                    Url: {this.props.gistList[0].url}
                </p>
                <p className="App-intro">
                    Git Pull Url: {this.props.gistList[0].git_pull_url}
                </p>
                <p className="App-intro">
                    Description: {this.props.gistList[0].description}
                </p>
                <p className="App-intro">
                    Id: {this.props.gistList[0].id}
                </p>
                <p className="App-intro">
                    Html Url: {this.props.gistList[0].html_url}
                </p>

                <h3>Ul section</h3>

                <ul><li>{this.props.gistList[0]['html_url']}</li></ul>

                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>


            </div>

        );

    }
}

export default GistLister;
