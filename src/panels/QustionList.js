import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Caption from '@vkontakte/vkui/dist/components/Typography/Caption/Caption';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { Icon28CalendarOutline } from '@vkontakte/icons';
import { Icon28InfoCircleOutline } from '@vkontakte/icons';
import { PanelHeaderBack } from '@vkontakte/vkui';

import RenderQuestions from '../components/RenderQuestions';
import router from '../router';

const QuestionsList = ({ id, updateQuestion, category }) => {
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.back()} />}
            >
                PolyApp
            </PanelHeader>
            <Group>
                <RenderQuestions
                    updateQuestion={updateQuestion}
                    category={category}
                />
            </Group>
            <FixedLayout filled vertical="bottom">
                <Tabbar className="tabbar-padding">
                    <TabbarItem
                        selected
                        text="Вопросы"
                        onClick={() => router.go('questions')}
                    >
                        <Icon28InfoCircleOutline />
                    </TabbarItem>
                    <TabbarItem
                        text="Календарь"
                        onClick={() => router.go('calendar')}
                    >
                        <Icon28CalendarOutline />
                    </TabbarItem>
                    <TabbarItem
                        text="Профиль"
                        onClick={() => router.go('home')}
                    >
                        <Icon28UserCircleOutline />
                    </TabbarItem>
                </Tabbar>
            </FixedLayout>
        </Panel>
    );
};

export default QuestionsList;
