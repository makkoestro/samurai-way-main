import React, {ChangeEvent} from 'react';


type ProfileInfoPropsType = {
    status: string,
    updStatus?: (status: string) => void;
}

class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    setActivateMode = () => {
        // this.state = {...this.state, editMode: false}
        this.setState({
            editMode: true,
        })
    }
    setDeactivateMode = () => {
        // this.state = {...this.state, editMode: false}
        this.setState({
            editMode: false,
        })
        if (this.props.updStatus) {
            this.props.updStatus(this.state.status)
        }

    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
        console.log(e.currentTarget.value)
    }

    componentDidUpdate(prevProps: Readonly<ProfileInfoPropsType>, prevState: Readonly<{}>, snapshot?: any) {

        let a = this.state.status
        let b = this.props.status
        console.log(a)
        console.log(b)
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        let {status} = this.props;
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.setDeactivateMode}
                               value={this.state.status} placeholder={'status'} type="text"/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.setActivateMode}>{this.props.status || '------'}</span>
                    </div>
                }


            </div>
        )

    }
}


export default ProfileStatus;