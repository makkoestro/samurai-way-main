import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import { requiredField } from '../../../utils/validators/validators';
import {AddPostForm, FormControl} from "common/FormControls";


export type FormPropsType = {
    message:string
}


const PostForm:React.FC<InjectedFormProps<FormPropsType>> = (props) => {

    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]} name={'message'} placeholder={'message'} tagName={'textarea'} component={FormControl} />
            </div>
            <div>
                <button >Add</button>
            </div>
        </form>

    );
};

const AddPostFormRedux = reduxForm<FormPropsType>({
    form: 'profileAddPostForm'

})(PostForm)
export default AddPostFormRedux