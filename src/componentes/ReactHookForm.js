import React from 'react'
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

function ReactHookForm() {
    const {register, errors, handleSubmit, getValues, formState, reset} = useForm({validateCriteriaMode: "all", mode: "onChange" });

    const onSubmit = (data, e) => {
        e.target.reset();
    }

    return (
        <div>
            <h1>React Hooks Forms</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='username'>Nome</label>
                    <input 
                        className='form-control' 
                        name='userName' 
                        type='text'
                        ref={register({ 
                            required: "Nome é obrigatorio",
                            maxLength: { value: 15, message: "O nome precisa ter entre 5 e 15 characters",},
                            minLength: { value: 5, message: "O nome precisa ter entre 5 e 15 characters",},
                        })}
                    />
                    <ErrorMessage errors={errors} name='userName'>
                        {(messages) =>
                            messages && 
                            Object.entries(messages).map(([type,message]) => (
                                <p className='form-text text-danger' key={type}>
                                    {message}
                                </p>
                            ))  
                        }
                    </ErrorMessage>
                </div>
                &nbsp;
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        className='form-control'
                         name='email' 
                         type='email'
                         ref={register({
                            required: "Email é obrigatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Formato de email invalido",
                            }
                         })}
                    />
                    <ErrorMessage errors={errors} name='email'>
                        {(messages) =>
                            messages && 
                            Object.entries(messages).map(([type,message]) => (
                                <p className='form-text text-danger' key={type}>
                                    {message}
                                </p>
                            ))  
                        }
                    </ErrorMessage>
                </div>
                &nbsp;
                <div className='form-group'>
                    <label htmlFor='password'>Senha</label>
                    <input 
                        className='form-control' 
                        name='password' 
                        type='password'
                        ref={register({
                            required: "Senha é obrigatoria",
                            minLength: {value: 8, message: "A senha precisa ter pelo menos 8 characters"}
                        })}
                    />
                    <ErrorMessage errors={errors} name='password'>
                        {(messages) =>
                            messages && 
                            Object.entries(messages).map(([type,message]) => (
                                <p className='form-text text-danger' key={type}>
                                    {message}
                                </p>
                            ))  
                        }
                    </ErrorMessage>
                </div>
                &nbsp;
                <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirmar Senha</label>
                    <input 
                        className='form-control' 
                        name='confirmPassword' 
                        type='password'
                        ref={register({
                            required: "Campo obrigatorio",
                            validate: value => {
                                if(value === getValues()["password"]) {
                                    return true;
                                } else {
                                    return "Senhas diferentes"
                                }
                            },
                        })}
                    />
                    <ErrorMessage errors={errors} name='confirmPassword'>
                        {(messages) =>
                            messages && 
                            Object.entries(messages).map(([type,message]) => (
                                <p className='form-text text-danger' key={type}>
                                    {message}
                                </p>
                            ))  
                        }
                    </ErrorMessage>
                </div>
                <div className="btn-group">
                    <button className="btn btn-primary" type="submit" disabled={!formState.isValid}>Submit</button>
                    <button className="btn btn-danger" type="button" onClick={() => reset()}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default ReactHookForm
