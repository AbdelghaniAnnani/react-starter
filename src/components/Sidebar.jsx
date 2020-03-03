import React from 'react';
import {
    Link
} from 'react-router-dom';
export  default function Sidebar(props) {
    return (
        <div className="sidenav">
            <Link to="/items">items</Link>
            <Link to="/cat">Category</Link>
            <Link to="/contact">contact</Link>
        </div>
    );
  }
