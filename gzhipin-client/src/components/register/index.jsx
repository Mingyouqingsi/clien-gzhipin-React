import React, {Component} from 'react';
import {NavBar, WingBlank,WhiteSpace,List, InputItem,Radio,Button} from 'antd-mobile';

import Logo from '../logo'
const Item = List.Item

class Register extends Component {
  render () {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem>用户名 :</InputItem>
            <InputItem>密 &nbsp;码&nbsp; :</InputItem>
            <InputItem>确认密码 :</InputItem>
            <Item>
              用户类型 ：
              <Radio>大神</Radio>&nbsp;&nbsp;
              <Radio>老板</Radio>
            </Item>
            <Button type = "primary">注册</Button>
            <Button>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register ;