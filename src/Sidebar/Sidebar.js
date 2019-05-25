import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
    static defaultProps = {
        store: []
    };

    render() {
        return (
            <section>
                <ul aria-live='polite'>
                        {this.props.store.folders.map(folder =>
                          <li key={folder.id}>
                            <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>
                          </li>
                        )}
                </ul>
                <div>
                    <a href='#'>+ Folder</a>
                </div>
            </section>
        )
    }
}