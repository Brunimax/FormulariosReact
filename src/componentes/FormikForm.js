import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";

export class FormikForm extends Component {
    state = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isValid: false,
    };

    handleChange = (values) => {
        this.setState({
            userName: values.userName,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
        })
    }

    validationSchema = Yup.object().shape({
        userName: Yup.string()
            .min(5, "O nome precisa ter entre 5 e 15 characters")
            .max(15, "O nome precisa ter entre 5 e 15 characters")
            .required("Nome é obrigatorio"),
        email: Yup.string()
            .email("Formato de email invalido")
            .required("Email é obrigatorio"),
        password: Yup.string()
            .min(8, "A senha precisa ter pelo menos 8 characters")
            .required("Senha é obrigatoria"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Senhas diferentes")
            .required("Campo obrigatorio")
    });

    render() {
        return (
            <div>
                <h1>Formik Form</h1>
                <Formik 
                    initialValues={{userName:'', email:'', password: '', confirmPassword:'', isSubmitting:true}} 
                    validationSchema = {this.validationSchema}
                    onSubmit = {(values, {setSubmitting, resetForm}) => {
                        setTimeout(() => {
                            setSubmitting(true);
                            this.setState({
                                userName: values.userName, 
                                email: values.email, 
                                password: values.password, 
                                confirmPassword: values.confirmPassword,
                            })
                            resetForm();
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ values, errors, touched, dirty, isSubmitting, handleChange, handleBlur, handleReset, handleSubmit }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="userName">Nome</label>
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="userName" 
                                    value={values.userName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="form-text text-danger">{errors.userName && touched.userName && errors.userName}</span>
                            </div>
                            &nbsp;
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="form-text text-danger">{errors.email && touched.email && errors.email}</span>
                            </div>
                            &nbsp;
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="password" 
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="form-text text-danger">{errors.password && touched.password && errors.password}</span>
                            </div>
                            &nbsp;
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirmar senha</label>
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="confirmPassword" 
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="form-text text-danger">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                            </div>
                            <div className="btn-group" style={{ marginTop: 10}}>
                                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
                                <button disabled={!dirty} onClick={handleReset} type="button" className="btn btn-danger">Reset</button>
                            </div>
                            <p>NOME: {this.state.userName}</p>
                            <p>EMAIL: {this.state.email}</p>
                            <p>SENHA: {this.state.password}</p>
                            <p>CONFIRMAÇÂO DE SENHA: {this.state.confirmPassword}</p>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default FormikForm
