import React, { Component } from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { PanelHeaderBack } from '@vkontakte/vkui';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import { Icon16New } from '@vkontakte/icons';

const dormsInfo = require('../json/dorms.json'); 
import '../css/dorms.css';

class Dorms extends Component {
  constructor(props) {
      super(props);
      this.state = {
          interestedDorm: ''
      }
    }
    handeDormClick = (id) =>(event)=> {
      this.props.setdorm(id);
      this.props.go(event)
    }
    createMarkup = (text) => {
      return {__html: text};
    }

  render(){

    return(
      <Panel id={this.props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={this.props.back} />}>PolyApp</PanelHeader>
        <Group>
          <Title level="2" weight="regular" className="dorms__title">Общежития</Title>
          <Text className="dorms__text">
            В Московском Политехе студентам предоставляется место в общежитии, если они проживают за пределами трассы А107 
          </Text>
          <Text className="dorms__text">
            Выбор общежития предоставляется в приоритетном порядке: 
          </Text>
          <ul className="dorms__priority">
            <li> Студенты со средним баллом 85+ </li>
            <li> Студенты поступившие на бюджет </li>
            <li> Студенты платной формы обучения со средним баллом 85+ </li>
            <li> Студенты платной формы обучения</li>
          </ul>
        </Group>
        <Group style={{marginTop:8}}>

        <CardGrid size="l">
              {
                dormsInfo.Общежития.map((dorm,index)=>{
                  return (
                    <Card  key={index} style={{background:'transparent'}} onClick={this.handeDormClick(index)} data-to='dorm-page'>
                    <div style={{ paddingBottom: '66%', background:"url(" + dorm.Фотографии[0]+ (')') ,backgroundPosition:'center', backgroundSize:'cover', width:'100%', borderRadius:'8px', height:'' }}>
                    </div>
                    <div style={{display: 'flex', justifyContent: '', width: '100%', flexDirection:'column', marginTop:10}}>
                      <Text style={{textAlign:'left', width: '100%'}}>Общежитие {dorm.Номер}</Text>
                      <Text style={{textAlign:'left', opacity:.5, fontSize: '.85rem'}}> {dorm['Адрес']} </Text> 
                      <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                      <Icon16New fill={dorm.Цвет} style={{padding:0}}/>
                      <Text style={{textAlign:'left', opacity:.5, paddingTop: '0!important'}} >{dorm['Метро']}</Text>
                      </div>
                    </div>
                  </Card>
                  )
                })
              }
            </CardGrid>
        </Group>
      </Panel>
    )
  }
}

export default Dorms;
