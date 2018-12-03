import React, {Component} from 'react';
import {NavBar, WingBlank,WhiteSpace,List, InputItem,Radio,Button} from 'antd-mobile';

import Logo from '../logo'
const Item = List.Item

class Register extends Component {
  state = {
    isBossChecked : true,
    username : '',
    password : '',
    repassword : ''
}
handleRadio = (type) =>{
    if (type === 'laoban'){
      this.setState ({
      isBossChecked:true
    })
    }else{
      this.setState ({
        isBossChecked:false
      })
    }
}
handleUsername = (val)=>{
    const value = val;
    this.setState ({
      username : value
    })
}
handlePassword = (val) =>{
    const value = val
    this.setState({
      password : value
    })
}
handleRepassword = (val)=> {
    const value = val
    this.setState ({
    repassword:value
  })
  }
  register =  ()  =>{
    //收集信息
    const {isBossChecked, username, password, repassword} = this.state
    console.log(isBossChecked, username,password,repassword)
    //发送ajax请求
}
goLogin = () =>{
    //去登录页面 push replace
  // this.props.history.push('./login')
  //push能留下历史记录可以后退 replace没有历史记录，不能后退
  this.props.history.replace('./login')
}
  render () {
    const {isBossChecked} = this.state
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={this.handleUsername}>用户名 :</InputItem>
            <InputItem onChange ={this.handlePassword}>密 &nbsp;码&nbsp; :</InputItem>
            <InputItem onChange={this.handleRepassword}>确认密码 :</InputItem>
            <Item>
              用户类型 ：
              <Radio checked = {!isBossChecked} onChange={this.handleRadio.bind(null,'dashen')}>大神</Radio>&nbsp;&nbsp;
              <Radio checked = {isBossChecked} onChange ={this.handleRadio.bind(null,'laoban')}>老板</Radio>
            </Item>
            <Button type = "primary" onClick ={this.register}>注册</Button>
            <Button onClick ={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register ;