import React, {ChangeEvent, useState} from 'react';


type ProfileInfoPropsType = {
    status: string,
    updStatus: (status: string) => void;
}

export const ProfileStatusWithHooks = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [profileStatus, setProfileStatus] = useState(props.status)
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileStatus(e.currentTarget.value)
    }
    const setDeactivateMode = () => {
        setEditMode(false)
        props.updStatus(profileStatus)
    }
    const setActivateMode = () => {
        setEditMode(true)
    }


    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={setDeactivateMode} value={profileStatus}
                           placeholder={'status'} type="text"/>
                </div>
                : <div>
                    <span onDoubleClick={setActivateMode}>{props.status || '------'}</span>
                </div>
            }
        </div>
    )
}





