import { Menu, Button, Input, Slider } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
  BarsOutlined,
  QrcodeOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
var QRCode = require('qrcode.react');

const { SubMenu } = Menu;
const axios = require('axios')
const content = {
  marginTop: '100px',
}



const ShareBill = () => {
    const [QRCodeValue, setQRCV] = useState("");
    const [peopleJoined, setpeopleJoined] = useState(0);
    return (
        <div>
            
            <div className="qrcode" onClick={()=>setpeopleJoined(peopleJoined+1)}>
                <QRCode size="150" level="M" inputMode="text" value={QRCodeValue}  renderAs="svg" bgColor="#fff" fgColor="#136"/>
            </div>
            <h3 style={{textAlign:"center", fontWeight:'600'}}>People joined: {peopleJoined}</h3>
        </div>
    );
}

export default ShareBill;