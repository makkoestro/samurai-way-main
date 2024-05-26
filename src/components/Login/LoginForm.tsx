import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {createField, FormControl, Input} from "common/FormControls";
import {requiredField} from "utils/validators/validators";
import s from '../Login/Login.module.css'



export type FormPropsType = {
    login:string
    password:string
    rememberMe:boolean
}

  const LoginForm:React.FC<InjectedFormProps<FormPropsType>> = (props) => {

    return (
        <div>
            <form className={s.form} onSubmit={props.handleSubmit}>
                <div className={s.loginInput}>
                    {createField('login', 'login',FormControl,undefined,   requiredField )}
                </div>
                <div className={s.loginInput}>
                    {createField('password', 'password',FormControl, 'password',   requiredField )}
                </div>
                <div>

                    {createField('rememberMe', 'password',FormControl, 'checkbox' )}
                </div>
                {props.error && <div style={{color: 'red'}}>{props.error}</div> }
                <div>
                    <button className={s.loginSubmitButton}>Log in</button>
                </div>
            </form>
        </div>

    );
};

const ReduxLoginForm = reduxForm<FormPropsType>({
        form: 'login'

})(LoginForm)
export default ReduxLoginForm

