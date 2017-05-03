/**
 * Created by bcuser on 4/25/17.
 */

import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfElements from './ElfElements';
import Debug from '../elf-logger';
const logger = new Debug(false);

class ShowUserInfo extends Component {
    constructor(props){
        super(props);//always call first
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props.userData, null, 4));

        if(!this.props.gitUser){
            throw  new Error('No user data');
        }

        /*
        const tempGituser = {};
        for(let field of this.props.fields){
            tempGituser[field.id] = field.sample;
        }
        this.props.gitUser = tempGituser;
*/
    }

    getForm = (field, index) => {
        return (
            <div className="ElfFormRow" key={field.id}>
                <label className="ElfFormLabel" htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                             value={this.props.body[field.id]}
                             onChange={this.props.onChange}
                />
            </div>
        )
    };

    render() {
        return (
            <div className="App">
                <form className="Form">{
                    this.props.fields.map((field, index) => {
                        return this.getForm(field, index)
                    })
                }

                <button className="getUser"
                        onClick={this.props.onChange} >Get User</button>
                </form>
            </div>//last
        );
    }
}

export default ShowUserInfo;