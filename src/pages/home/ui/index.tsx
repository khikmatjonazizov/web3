import React from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";

import style from './home.module.css';

export const Home: React.FC = () => {
    return (
        <main className={style.main}>
            <Link to="metamask" className={style.link}>
                <Button type="primary" size="large">
                    Metamask
                </Button>
            </Link>
            <Link to="unisat" className={style.link}>
                <Button type="primary" size="large">
                    UniSat
                </Button>
            </Link>
        </main>
    )
}
