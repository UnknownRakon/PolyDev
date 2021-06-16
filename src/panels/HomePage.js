import React, { Component } from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Gradient from '@vkontakte/vkui/dist/components/Gradient/Gradient';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import { Button, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { Icon28CalendarOutline } from '@vkontakte/icons';
import { Icon28InfoCircleOutline } from '@vkontakte/icons';
import { Icon20Write } from '@vkontakte/icons';
import { Icon16Clear } from '@vkontakte/icons';
import '../css/Home.css'



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: '',
      stud: '',
      prof: '',
      dorm: '',
      year: '',
      specialty: '',
      dormnum: '',
      changed: false
    }
  }
  componentDidMount = () => {
    localStorage.setItem('validation', 'set')
    localStorage.removeItem('category');
    const group = localStorage.getItem('group');
    const stud = localStorage.getItem('stud');
    const prof = localStorage.getItem('prof');
    const dorm = localStorage.getItem('dorm');
    const year = localStorage.getItem('year');
    const specialty = localStorage.getItem('specialty');
    const dormnum = localStorage.getItem('dormnum');
    this.setState({ stud, group, year, dorm, prof, specialty, dormnum });
  }
  clearAll = () =>{
    window.localStorage.clear()
    this.props.setActivePanel('acquaintance')
  }
  render() {
    return (
      <Panel id={this.props.id}>
        <PanelHeader>PolyApp</PanelHeader>
        <Div>
          {this.props.fetchedUser &&
            <Gradient className="avatar">
              {this.props.fetchedUser.id == 393320417 ? <Avatar src='https://psv4.userapi.com/c505536/u380412592/docs/d35/4da54b094c76/watermalon.png?extra=wEOU66WZZR2Q8xmSiarLrd40NwghFmjGPAanb4P4DOx2yXG3zVLbE39moGWzG2ZPJtAP4g4XR5LeLqY9zuB9t6qIKMI8MM6fDpfTcK2JOcO7tFBN6P7q0zA-ynGWe55UCUsOwDrvLb4zHBZ9weD4psOWPoM' size={96} /> : <Avatar src={this.props.fetchedUser.photo_200} size={96} />}
              {/* <Avatar src={this.props.fetchedUser.photo_200} size={96} /> */}
              <Header className='delete' mode="primary" aside={
                <Icon16Clear onClick={this.clearAll} data-to='acquaintance'/>
              } >{this.props.fetchedUser.id == 393320417 ? 'Арбуз Бодур' : `${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}</Header>
              <Text style={{ color: 'var(--text_secondary)' }}>{this.props.fetchedUser.city && this.props.fetchedUser.city.title ? this.props.fetchedUser.city.title : ''}</Text>
              <Text style={{textAlign:'center', marginTop: 10}}>{this.state.specialty}</Text>
            </Gradient>
          }
        </Div>
        <Group className="group-about" style={{marginBlockEnd: 70}}>
          <Header mode="primary" aside={<Icon20Write onClick={this.props.go} data-to='edit'/>}>Обо мне</Header>
          <Header mode="secondary" aside={<Text>{this.state.group}</Text>}>Группа:</Header>
          <Header mode="secondary" aside={<Text>{this.state.year}</Text>}>Курс:</Header>
          {this.state.dorm == 'Yes' ? <Header mode="secondary" aside={<Text>{this.state.dormnum}</Text>}>Общежитие №:</Header> : null}
          {this.state.stud != '' ? <Header mode="secondary" aside={<Text>{this.state.stud}</Text>}>Студенческий:</Header> : null}
          {this.state.prof != '' ? <Header mode="secondary" aside={<Text>{this.state.prof}</Text>}>Профбилет:</Header> : null}
        </Group>
        <FixedLayout filled vertical="bottom">
          <Tabbar className='tabbar-padding'>
            <TabbarItem text="Вопросы" onClick={this.props.go} data-to="questions">
              <Icon28InfoCircleOutline />
            </TabbarItem>
            <TabbarItem text="Календарь" onClick={e=>this.props.setActiveModal(this.props.MODAL_CARD_THREE)}>
              <Icon28CalendarOutline />
            </TabbarItem>
            <TabbarItem text="Профиль" selected>
              <Icon28UserCircleOutline />
            </TabbarItem>
          </Tabbar>
        </FixedLayout>
      </Panel>
    )
  }
}

export default HomePage;