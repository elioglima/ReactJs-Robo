import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import { FormControl, Form, Button } from 'react-bootstrap';

const columns = [
  { key: 'id', name: 'Código' },
  { key: 'nome', name: 'Nome' },
  { key: 'grupo', name: 'Grupo' } ];

const rows = [
        {id: 1, nome: 'Elio Gonçalves de Lima', grupo: "Adminsitrador"}, 
        {id: 2, nome: 'Paulo Sergio da Silva', grupo: "Adminsitrador"}
    ];


function HelloWorld() {
    function onDoubleClick(rowNumber) {
        console.log('ok',rowNumber)
    }
    
  return (<ReactDataGrid    
    columns={columns}
    rowGetter={i => rows[i]}
    rowsCount={3}
    minHeight={150} 
    onRowDoubleClick={e => this.onDoubleClick(e)}
    />
    );
    
}

class Objeto extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">Pesquisa</a>
                    <Form inline>    
                        <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" size="sm" />
                        <Button variant="info" size="sm" >Pesquisar</Button>
                    </Form>
                </nav>

              {HelloWorld()}
            </div>
        );
    }
}

export default Objeto;