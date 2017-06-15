import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Close from 'grommet/components/icons/base/menu';
import Dashboard from 'grommet/components/icons/base/dashboard';
import Home from 'grommet/components/icons/base/home';
import Code from 'grommet/components/icons/base/code';
import Stakeholder from 'grommet/components/icons/base/stakeholder';
import CloudDownload from 'grommet/components/icons/base/CloudDownload';
import Blog from 'grommet/components/icons/base/blog';
import Anchor from 'grommet/components/Anchor';

import { navActivate } from '../actions/nav';

class NavSidebar extends Component {

  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.props.dispatch(navActivate(false));
  }

  render() {
    return (
      <Sidebar colorIndex='neutral-4-t' fixed={true} style={{ width: '250px' }}>
        <Header size='large' justify='between' pad={{ horizontal: 'small' }}>
          <Title onClick={this._onClose} a11yTitle='Close Menu'>
            <span>Dashboard</span>
          </Title>
          <Button icon={<Close />} onClick={this._onClose} plain={true} />
        </Header>
        <p style={{ marginLeft: '8%' }}>Main</p>
        <Menu fill={true} primary={true}>
          <Anchor path='/dashboard' label={'DASHBOARD'} icon={<Dashboard />} />
          <Anchor path='#' label={'GENERAL'} icon={<Home />} />
        </Menu>
        <p style={{ marginLeft: '8%' }}>Administration</p>
        <Menu fill={true} primary={true}>
          <Anchor path='#' label={'SHORTCODES'} icon={<Code />} />
          <Anchor path='#' label={'PORTFOLIO'} icon={<Stakeholder />} />
          <Anchor path='#' label={'BLOG'} icon={<Blog />} />
          <Anchor path='#' label={'BACKUP'} icon={<CloudDownload />} />
        </Menu>
        <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Paragraph margin='none'>
            © 2017 Admin Dashboard
          </Paragraph>
        </Footer>
      </Sidebar>
    );
  }

}


const select = state => ({
  nav: state.nav
});

export default connect(select)(NavSidebar);
