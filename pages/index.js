import { Menu, Button, Input, Slider, message, Popconfirm } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
  BarsOutlined,
  QrcodeOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import ShareBill from './ShareBill';
var QRCode = require('qrcode.react');

const { SubMenu } = Menu;
const axios = require('axios')
const content = {
  marginTop: '100px',
}

export default function Home() {
  // axios.get('http://numbersapi.com/42')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error); 
  // })
  // .then(function () {
  //   // always executed
  // });
  const [state, setState] = useState({collapsed: true});

  const [splitBill, setSplit] = useState(false);
  const [QRCodeValue, setQRCV] = useState("");
  const [peopleJoined, setpeopleJoined] = useState(0);
  const [bill, setBill] = useState({bill:100, yourBill:100, yourTip:0, yourTotal:100, total:100, excess:0});
  const [othersPaid, setOthers] = useState(0);
  const [tip, setTip] = useState(0);

  const joinedSuccess = () => {
    setpeopleJoined(peopleJoined+1);
    message.success('Mark Allen joined the bill.', 5);
  };
  const paidSuccess = () => {
    setOthers(othersPaid + 1);
    message.success('Mark Allen payed $50.', 5);
  };
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const showPopconfirm = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setSplit(false);
      setpeopleJoined(0);
      setOthers(0);
    }, 2000);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(()=>{
    if(!splitBill){
      setBill(currentState =>({
        ...currentState,
        yourTip: Math.round(bill.bill*tip)/100,
        yourTotal: Math.round((bill.bill + bill.bill/100*tip)*100)/100,
        total: Math.round((bill.bill + bill.bill/100*tip)*100)/100
      }));
    }else{
      setBill(currentState =>({
        ...currentState,
        yourBill: Math.round((bill.bill/(peopleJoined+1))*100)/100,
        yourTip: Math.round((bill.bill/(peopleJoined+1)/100*tip)*100)/100,
        yourTotal: Math.round((bill.bill/(peopleJoined+1) + bill.bill/(peopleJoined+1)/100*tip)*100)/100,
        total: Math.round((bill.bill/(peopleJoined+1) + bill.bill/(peopleJoined+1)/100*tip + othersPaid*(bill.bill/(peopleJoined+1)))*100)/100
      }));
    }
  },[tip, splitBill, peopleJoined, othersPaid])

  return (
    <div>
      <nav style={{display:'flex', height:"35px", backgroundColor: 'rgb(36, 33, 30)'}}>
        <Button type="primary" onClick={()=>setState({collapsed:!state.collapsed})} style={{height:'35px'}}>
          {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <h2 style={{width:'100%', paddingLeft:'20px', margin:'0', color: 'whitesmoke'}}>Payment</h2>
      </nav>
      <div style={{position: 'absolute', zIndex:'100'}}>
        <Menu
          className={state.collapsed ? "menu_folded" : "menu_unfolded"}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={state.collapsed}
        >
          <Menu.Item key="1" icon={<GlobalOutlined style={{fontSize:"1.3rem"}}/>} className="menu_item_size">
            Map
          </Menu.Item>
          <Menu.Item key="2" icon={<BarsOutlined style={{fontSize:"1.3rem"}}/>} className="menu_item_size">
            List
          </Menu.Item>
          <Menu.Item key="3" icon={<QrcodeOutlined style={{fontSize:"1.3rem"}}/>} className="menu_item_size">
            QR
          </Menu.Item>
          
          <SubMenu icon={<UserOutlined style={{fontSize:"1.3rem"}}/>} title="Account">
            <Menu.Item key="sub1" onClick={()=>{console.log('Reg')}}>Register</Menu.Item>
            <Menu.Item key="sub2" onClick={()=>{console.log('Log')}}>Log in</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className="content">
        
        <div className="content_bill">
          
          <p>Bill:</p>
          <p>
            $ {bill.bill}
          </p>
          {splitBill &&
            <>
              <p>Your bill:</p>
              <p>$
                {bill.yourBill}
              </p>
            </>
          }
          <p>{splitBill? "Your tip:": "Tip:"}</p>
          <p>$
            {bill.yourTip}</p>
          <p>{splitBill? "Your total:": "Total:"}</p>
          <p>$
            {bill.yourTotal}
          </p>
        </div>   
        <div className="tip">     
          <p>Tip %:</p>          
          <Slider 
            min={0} 
            max={100} 
            defaultValue={tip} 
            style={{width:'200px'}}
            onChange={(e) => {setTip(e)}}
          ></Slider>
          
        </div>
        
        <Popconfirm
          title="Cancel bill splitting?"
          visible={visible}
          onConfirm={handleOk}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handleCancel}
          okText="Yes"
          cancelText="No"
          style={{fontSize:'20px'}}
        >
          <Button 
            className="split"
            onClick={()=>{
              if (splitBill==true){
                showPopconfirm();
              }else {
                setpeopleJoined(0); 
                setOthers(0);
                setSplit(true);
              }
            }}
          >
            {splitBill? "Cancel bill splitting": "Joins & split bills"}
          </Button>
        </Popconfirm>
        {splitBill && 
          <div>
            <div className="qrcode" onClick={joinedSuccess}>
                <QRCode size="150" level="M" inputMode="text" value={QRCodeValue}  renderAs="svg" bgColor="#fff" fgColor="#136"/>
            </div>
            <h3 style={{textAlign:"center", fontWeight:'600'}}>People joined: {peopleJoined}</h3>
          </div>
        }
        <div className="total" onClick={paidSuccess}>
          <p>Total:   </p>
          <p style={{color: bill.total<bill.bill && "red"}}>$
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2
            }).format(bill.total)}
            {bill.total<bill.bill? "+$" + Math.round((bill.bill-(bill.total))*100)/100:""}
          </p>
        </div>
        <Button className="pay">Pay</Button>
     
      </div>
    </div>
  );
}
