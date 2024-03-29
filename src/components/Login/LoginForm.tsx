import React from 'react';

export const LoginForm = () => {
    return (
        <div>
            <form action="">
                <div>
                    <input placeholder={'login'} type="text"/>
                </div>
                <div>
                    <input placeholder={'password'} type="password"/>
                </div>
                <div>
                    <input type="checkbox"/>
                </div>
                <div>
                    <button type={'submit'}>Log in</button>
                </div>
            </form>
        </div>

    );
};

