import React, {ReactNode} from 'react';
import {Field, WrappedFieldProps} from "redux-form";
import st from '../Login/Login.module.css'
import s from './AddMessageForm.module.css'

import {requiredField} from "utils/validators/validators";
type FormControlProps = WrappedFieldProps & {
    tagName: 'textarea' | 'input'
}
export const FormControl = ({input, tagName,  meta, ...props}:FormControlProps) => {
    const hasError = meta.error && meta.touched
    const Tag = tagName
    return <div className={s.formControl + ' ' + (hasError? s.error : '')}>
        <Tag {...input} {...props}/>
        {hasError && <div style={{color: 'red'}}>{meta.error}</div>}
    </div>
};
export const AddMessageForm = ({input, meta, ...props}:WrappedFieldProps) => {
    const hasError = meta.error && meta.touched
    return <div className={s.formControl + ' ' + (hasError? s.error : '')}>
        <textarea {...input} {...props}/>
        {hasError && <div style={{color: 'red'}}>{meta.error}</div>}
    </div>
};
export const AddPostForm = ({input, meta, ...props}:WrappedFieldProps) => {
    const hasError = meta.error && meta.touched
    return <div className={s.formControl + ' ' + (hasError? s.error : '')}>
        <textarea {...input} {...props}/>
        {hasError && <div style={{color: 'red'}}>{meta.error}</div>}
    </div>
};
export const Input = ({input, meta, ...props}:WrappedFieldProps) => {
    const hasError = meta.error && meta.touched
    return <div className={s.formControl + ' ' + (hasError? s.error : '')}>
        <input {...input} {...props}/>
        {hasError && <div style={{color: 'darkred'}}>{meta.error}</div>}
    </div>
};


export const createField = (name:string, placeholder:string | undefined, component: ReactNode, type = 'input',  validate?:(value:string) => string | undefined) => {
        return  <Field name={name} placeholder={placeholder} validate={validate}  tagName={'input'} component={component} type={type} />
}




