import React, { Component } from 'react';
import { connect } from "react-redux";

class Objeto extends Component {
    render() {
        var items = this.props.data;
        return (
            // value={this.props.Selected}
            <select className="form-control" >
                {
                    items.map(function (item) {
                        return <option value={item.id }>{item.descricao}</option>;
                    })
                }
            </select>
        );
    }
}


export default connect(null, null)(Objeto);
