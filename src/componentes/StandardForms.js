import React, { Component } from 'react'

function ValidationMessage(props) {
    if(!props.valid) {
        return <div className="form-text text-danger" role="alert">{props.message}</div>
    }
    return null;
};

export class StandardForms extends Component {
    state = {
        username: '', 
        usernameValid: false,
        email: '', 
        emailValid: false,
        passaword: '', 
        passawordValid: false,
        passawordConfirm: '', 
        passawordConfirmValid: false,
        formValid: false,
        errorMsg: {}
    }

    validateForm = () => {
        const {
            usernameValid, 
            emailValid, 
            passawordValid, 
            passawordConfirmValid
        } = this.state;
        this.setState({formValid: 
            usernameValid && emailValid && passawordValid && passawordConfirmValid,
        });
    }

    validateUserName = () => {
        const {username} = this.state;
        let usernameValid = true;
        let errorMsg = {...this.state.errorMsg};

        if(username.length < 5 || username > 15) {
            usernameValid = false;
            errorMsg.username = "O nome precisa ter entre 5 e 15 characters";
        }
        this.setState({ usernameValid, errorMsg }, this.validateForm);
    };

    validateEmail = () => {
        const {email} = this.state;
        let emailValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            emailValid = false;
            errorMsg.email = "Formato de email invalido";
        }
        this.setState({emailValid, errorMsg}, this.validateForm);
    };

    validatePassword = () => {
        const {passaword} = this.state;
        let passawordValid = true;
        let errorMsg = {...this.state.errorMsg};

        if(passaword.length < 8) {
            passawordValid = false;
            errorMsg.password = "A senha precisa ter pelo menos 8 characters";
        }
        this.setState({ passawordValid, errorMsg }, this.validateForm);
    };

    validateConfirmPassword = () => {
        const {passawordConfirm, passaword} = this.state;
        let passawordConfirmValid = true;
        let errorMsg = {...this.state.errorMsg};

        if(passaword !== passawordConfirm) {
            passawordConfirmValid = false;
            errorMsg.passawordConfirm = "Senhas diferentes";
        }
        this.setState({ passawordConfirmValid, errorMsg }, this.validateForm);
    };

    resetForm() {
        this.setState({
            username: '', 
            usernameValid: false,
            email: '', 
            emailValid: false,
            passaword: '', 
            passawordValid: false,
            passawordConfirm: '', 
            passawordConfirmValid: false,
            formValid: false,
            errorMsg: {},
        });
    };

    render() {
        return (
            <div>
                <h1>React Forms</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Nome</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={this.state.username} 
                            onChange={(e) => this.setState({ username: e.target.value}, this.validateUserName)}
                            className="form-control" 
                        />
                        <span>
                            <ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
                        </span>
                    </div>
                    &nbsp;
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={this.state.email} 
                            onChange={(e) => this.setState({ email: e.target.value}, this.validateEmail)}
                            className="form-control" 
                        />
                        <span>
                            <ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
                        </span>
                    </div>
                    &nbsp;
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={this.state.passaword} 
                            onChange={(e) => this.setState({ passaword: e.target.value}, this.validatePassword)}
                            className="form-control" 
                        />
                        <span>
                            <ValidationMessage valid={this.state.passawordValid} message={this.state.errorMsg.password} />
                        </span>
                    </div>
                    &nbsp;
                    <div className="form-group">
                        <label htmlFor="password">Confirmar Senha</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={this.state.passawordConfirm} 
                            onChange={(e) => this.setState({ passawordConfirm: e.target.value}, this.validateConfirmPassword)}
                            className="form-control" 
                        />
                        <span>
                            <ValidationMessage valid={this.state.passawordConfirmValid} message={this.state.errorMsg.passawordConfirm} />
                        </span>
                    </div>
                    <div className="btn-group" style={{ marginTop: 10}}>
                        <button className="btn btn-primary" type="submit" disabled={!this.state.formValid}>Submit</button>
                        <button className="btn btn-danger" onClick={this.resetForm = this.resetForm.bind(this)}>Reset</button>
                    </div>
                    <p>NOME: {this.state.username}</p>
                    <p>EMAIL: {this.state.email}</p>
                    <p>SENHA: {this.state.password}</p>
                    <p>CONFIRMAÇÂO DE SENHA: {this.state.passawordConfirm}</p>
                </form>
            </div>
        )
  }
}

export default StandardForms
