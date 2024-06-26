import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {store} from "../../redux/store";
import { reset } from 'redux-form';
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {AddMessageForm, FormControl} from "common/FormControls";
import s from '../Dialogs/Dialogs.module.css'




export type FormPropsType = {
    message:string
}
const maxLength = maxLengthCreator(20)

const MessageForm:React.FC<InjectedFormProps<FormPropsType>> = (props) => {

    return (
            <form   onSubmit={props.handleSubmit}>
                <div>
                    <Field className={s.dialogForm} validate={[requiredField, maxLength]} name={'message'} placeholder={'message'} tagName={'textarea'} component={FormControl} />
                </div>
                <div>
                    <button className={s.dialogFormSubmit} >Add</button>
                </div>
            </form>

    );
};

const AddMessageFormRedux = reduxForm<FormPropsType>({
    form: 'dialogAddMessageForm'

})(MessageForm)
export default AddMessageFormRedux
