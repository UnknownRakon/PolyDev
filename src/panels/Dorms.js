import React, { Component, useState } from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import { PanelHeaderBack } from "@vkontakte/vkui";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import { Icon16New } from "@vkontakte/icons";

import "../css/dorms.css";

const Dorms = ({ id, back, setdorm, go }) => {
  const dormsInfo = require("../json/dorms.json");

  const handeDormClick = (index) => (event) => {
    setdorm(index);
    go(event);
  };
  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={back} />}>
        PolyApp
      </PanelHeader>
      <Group>
        <Title level="1" weight="regular" className="dorms__title">
          Общежития
        </Title>
        <Text className="dorms__text">
          В Московском Политехе студентам предоставляется место в общежитии,
          если они проживают за пределами трассы А107
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
      <Group style={{ marginTop: 8 }}>
        <CardGrid size="l">
          {dormsInfo.Общежития.map((dorm, index) => {
            return (
              <Card
                key={index}
                className="dorms__card"
                onClick={handeDormClick(index)}
                data-to="dorm-page"
              >
                <div
                  className="dorms__card__photo"
                  style={{ background: "url(" + dorm.Фотографии[0] + ")" }}
                ></div>
                <div className="dorms__card__content">
                  <Text className="dorms__card__content__number">
                    Общежитие {dorm.Номер}
                  </Text>
                  <Text className="dorms__card__content__address">
                    {" "}
                    {dorm["Адрес"]}{" "}
                  </Text>
                  <div className="dorms__card__content__metro">
                    <Icon16New
                      className="dorms__card__content__metro__color"
                      fill={dorm.Цвет}
                    />
                    <Text
                      className="dorms__card__content__metro__text"
                      style={{
                        textAlign: "left",
                        opacity: 0.5,
                        paddingTop: "0!important",
                      }}
                    >
                      {dorm["Метро"]}
                    </Text>
                  </div>
                </div>
              </Card>
            );
          })}
        </CardGrid>
      </Group>
    </Panel>
  );
};

export default Dorms;
