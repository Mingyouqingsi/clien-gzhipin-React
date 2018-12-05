import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Cookie from 'js-cookie';
import {Redirect} from  'react-router-dom';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';

class Main extends Component {
  render () {
    const userid = Cookie.get('userid')
    if (!userid) {
      return <Redirect to='/login' />
    }
    return (
      <div>
        <Route path="/laobaninfo" component={LaobanInfo}/>
        <Route path="/dasheninfo" component={DashenInfo}/>
      </div>
    )
  }
}

export default Main;