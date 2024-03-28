import React from 'react';
import classes from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";

type ProfileInfoPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    state = {
        editMode: false
    }
    setActivateMode =  () =>  {
        // this.state = {...this.state, editMode: false}
        debugger
        this.setState({
            editMode:true,
        })
    }
    setDeactivateMode  ()  {
        // this.state = {...this.state, editMode: false}
        this.setState({
            editMode: false,
        })
    }

    render() {
        let {status} = this.props;
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input autoFocus={true} onBlur={this.setDeactivateMode} value={status} placeholder={'status'} type="text"/>
                    </div>
                    : <div >
                        <span onDoubleClick={this.setActivateMode} >{status}</span>
                    </div>
                }


            </div>
        )

    }
}


export default ProfileStatus;