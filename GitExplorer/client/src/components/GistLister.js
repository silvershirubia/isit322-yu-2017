/**
 * Created by bcuser on 5/16/17.
 */

import React, {Component} from 'react';

import '../css/App.css';
import ElfLogger from '../elf-logger';

import {Button} from 'react-bootstrap';

const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('Gist List Constructor');

        this.state = {
            index: 0
        };

        this.gistIterator = this.gistIterator.bind(this);

    }


    gistIterator(event) {

        logger.log(event.target.id);
        if (event.target.id === 'nextGist') {
            this.setState((prevState, props) => {
                if (prevState.index < props.gistList.length - 1) {
                    return {
                        index: prevState.index + 1
                    };
                }

            });
        } else {
            this.setState((prevState, props) => {
                if (prevState.index !== 0) {
                    return {
                        index: prevState.index - 1
                    };
                }
            });
        }

    }

gistDelete(){

        const id = this.props.gistList[this.state.index].id;
        this.props.gistDelete(id, () => {

            this.props.fetchGistList();
        });
}

    render() {

        return (
            <div className='App'>

                <h2>Gist Lister</h2>

                <Button bsStyle='info' id='gistList'
                        onClick={this.props.fetchGistList}
                        disabled={this.props.gistCanIterate}>Get Gist List</Button>

                <Button id='prevGist'
                        onClick={this.gistIterator}
                        enable={this.props.gistCanIterate}>Prev</Button>

                <Button id='nextGist'
                        onClick={this.gistIterator}
                        enable={this.props.gistCanIterate}>Next</Button>

                <Button id='deleteGist'
                        onClick={this.gistDelete}
                        disable={this.props.gistCanIterate}>Delete</Button>

                <h3>Gist at {this.state.index + 1} / {this.props.gistList.length}</h3>
                <ul>

                    <li>{this.props.gistList[this.state.index]['htmlUrl']}</li>
                    <li>{this.props.gistList[this.state.index]['description']}</li>
                    <li>{this.props.gistList[this.state.index]['id']}</li>
                    <li>{this.props.gistList[this.state.index]['url']}</li>
                    <li>{this.props.gistList[this.state.index]['ownerLogin']}</li>
                    <li>{this.props.gistList[this.state.index]['avatarUrl']}</li>

                </ul>

                <img className='elfImage' alt='img for avatar'
                     src={this.props.gistList[this.state.index]['avatarUrl']}/>

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
