import React, { useState } from "react";
import { connect } from "react-redux";
import ReactDataGrid from "react-data-grid";


const columns = [
    { key: "id", name: "ID", editable: false, width:60 },
    { key: "name", name: "Nome", editable: false },
    { key: "grupo", name: "Grupo", editable: false }
  ];

class Objeto extends React.Component {
  state = { rows:this.props.Rows };

  componentWillMount() {    
    this.setState({rows:this.props.Rows})
  }

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  }

  onRowDoubleClick = (r, c) => {
      this.props.handleClick('editar', c.id)   
  }

  onLoadDados = () => { this.setState({rows:this.props.Rows}) }

  render() {
    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => this.props.Rows[i]}
          rowsCount={this.props.Rows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          onRowDoubleClick={this.onRowDoubleClick.bind(this)}
          enableCellSelect={false}
          enableCellAutoFocus={true}
          minHeight={450}
        />
      </div>
    );
  }
}

export default connect(null, null)(Objeto);
