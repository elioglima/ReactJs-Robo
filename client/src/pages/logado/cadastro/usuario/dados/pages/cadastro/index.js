import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormControl, Form, Button } from 'react-bootstrap';
import * as Actions from "./src";
import GravarDados from "./components/gravar_dados";
import Select from 'react-select';
class Objeto extends Component {

    constructor() {
        super();
        this.state = {
            dados: {
                id: 0,
                nome: '',
                email: '',
                senha: '',
                grupo: 0,
            },
            RowsGrupo: [{value:0,label:''}]
        };
    }

    componentWillMount() {
        if (this.props.id_localizado > 0) {
            this.onLoadDados(null)
        }
    }

    onLoadDados = (e) => {
        if (e !== null)
            e.preventDefault()

        this.props.api_dados_usuario_cadastro(this.props.id_localizado)
            .then((p) => {
                this.setState({
                    dados: p.body.Row,
                    RowsGrupo: p.body.RowsGrupo,
                })

                console.log(p)
            })
            .catch((p) => { console.log(p) })
    }

    render() {

        var items = this.RowsGrupo

        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">Dados de Cadastro</a>
                    <Form inline>
                        <GravarDados dados={this.state.dados} />
                    </Form>
                </nav>

                <div className='col-md-12 pb2'>
                    <br />
                    <div className="form-row">
                        <div className='form-group col-md-2'>
                            <label>Código</label>
                            <input type="text" className="form-control" value={this.state.dados.id} onChange={e => this.setState({ dados: { id: e.target.value } })} disabled />
                        </div>
                        <div className='form-group col-md-6'>
                            <label>Nome Completo</label>
                            <input type="text" className="form-control"
                                onChange={e => {
                                    this.setState({ dados: { ...this.state.dados, ['nome']: e.target.value } });
                                }}
                                value={this.state.dados.nome}
                            />
                        </div>
                        <div className='form-group col-md-4'>
                            <label>Grupo</label>
                            <Select
                                value={this.state.dados.grupo}
                                onChange={(e) => { 
                                    this.setState({ dados: { ...this.state.dados, ['grupo']: e } }); }}
                                options={this.state.RowsGrupo} />
                        </div> 

                        <div className='form-group col-md-6'>
                            <label>e-mail</label>
                            <input type="text" className="form-control"
                                onChange={e => {
                                    this.setState({ dados: { ...this.state.dados, ['email']: e.target.value } });
                                }}
                                value={this.state.dados.email}
                            />
                        </div>     

                        <div className='form-group col-md-6'>
                            <label>Senha</label>
                            <input type="password" className="form-control"
                                onChange={e => {
                                    this.setState({ dados: { ...this.state.dados, ['senha']: e.target.value } });
                                }}
                                value={this.state.dados.senha}
                            />
                        </div>                     
                    </div>
                    <br />


                </div>
            </div>
        );
    }
}

export default connect(null, Actions)(Objeto);