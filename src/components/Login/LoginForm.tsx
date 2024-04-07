import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {FormControl, Input} from "common/FormControls";
import {requiredField} from "utils/validators/validators";


export type FormPropsType = {
    login:string
    password:string
    rememberMe:boolean
}

  const LoginForm:React.FC<InjectedFormProps<FormPropsType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  name={'login'} placeholder={'login'} validate={[requiredField]}  tagName={'input'}  component={FormControl} />
                </div>
                <div>
                    <Field type={'password'} name={'password'} validate={[requiredField]}   tagName={'input'} placeholder={'password'} component={FormControl}/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={FormControl}  tagName={'input'} type={'checkbox'}/>
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
        </div>

    );
};

const ReduxLoginForm = reduxForm<FormPropsType>({
        form: 'login'

})(LoginForm)
export default ReduxLoginForm

