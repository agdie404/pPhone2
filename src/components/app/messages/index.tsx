import React, { useState } from "react";

import './Messages.scss'
import './../mail/Mail.scss'
import HeaderApp from "../../utils/HeaderApp";
import { ReactSVG } from "react-svg";
import BackIcon from '../../../assets/icons/back_right.svg'
import Message from "../mail/MessageItem";
import { IMailProps } from "../mail";

const mailTestList: IMailProps[] = [
    { id: "1", sender: 'John Doe', date: 'Yesterday', notification: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo dapibus, accumsan lorem eleifend, pharetra quam. Quisque vestibulum commodo justo, eleifend mollis enim blandit eu. Aenean hendrerit nisl et elit maximus finibus. Suspendisse scelerisque consectetur nisl mollis scelerisque.' },
    { id: "2", sender: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
 
]

const Messages: React.FC = (props: any) => {
    const [edit, setEdit] = useState(false);

    const getMail = () => {
        return mailTestList.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    <Message {...item} edit={edit} />
                </React.Fragment>
            )
        })
    }

    return (
        <div className="app-container">
            <HeaderApp title="Messages" leftText="Edit" rightText="Write" onClickOnLeftText={() => setEdit(!edit)} onClickOnRightText={() => {}} />
            {getMail()}
        </div>
    )
};

export default Messages;