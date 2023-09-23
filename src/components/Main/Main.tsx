import React from 'react';
import classes from "./Main.module.css";

const Main = () => {
    return (
        <main className={classes.main}>
            <div className={classes.intro}>
                <img
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-colorful-long-haired-cat-art-peggy-collins.jpg"
                    alt=""/>
                <div>

                    <ul>
                        <li>
                            <h3>Lex Murza</h3>
                        </li>
                        <li>Date of birth: 19 May</li>
                        <li>City: Odessa</li>
                        <li>Education: ONMA</li>
                        <li>Web-site: no</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <div>My posts</div>
                    <input type="text"/>
                    <button>send</button>
                </div>
                <div>
                    <img src="" alt=""/>
                    <div>post 1</div>
                </div>
            </div>


        </main>
    );
};

export default Main;