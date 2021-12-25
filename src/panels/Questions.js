import React, { Component, useEffect, useState } from 'react';
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
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import { Icon36HomeOutline } from '@vkontakte/icons';
import { Icon28BookOutline } from '@vkontakte/icons';
import { Icon56SchoolOutline } from '@vkontakte/icons';
import { Icon28LightbulbStarOutline } from '@vkontakte/icons';

import * as styles from '../css/Questions.module.css';
import * as stylesRadio from '../css/Radio.module.css';
import router from '../router';

const Questions = ({ id, updateData }) => {
    useEffect(() => {
        localStorage.removeItem('category');
    }, [id]);

    const onClick = (cat) => {
        updateData(cat);
        router.go('questions-list');
    };
    return (
        <Panel id={id}>
            <PanelHeader>PolyApp</PanelHeader>
            <Group>
                <Div>
                    <Caption
                        style={{ fontSize: 18 }}
                        className={stylesRadio.captionCaps}
                        level="1"
                        weight="semibold"
                        caps
                    >
                        Категории вопросов
                    </Caption>
                </Div>
                <CardGrid size="m" style={{ marginBlockEnd: 70 }}>
                    <Card className={styles.card} onClick={() => onClick('dorms')}>
                        <Icon36HomeOutline className={styles.icon} width={56} height={56}/>
                        <Caption
                            level="1"
                            weight="semibold"
                            caps
                            style={{ marginTop: 10, fontSize: 18 }}
                            className={styles.caption}
                        >
                            Общежития
                        </Caption>
                    </Card>
                    <Card className={styles.card} onClick={() => onClick('study')}>
                        <Icon28BookOutline className={styles.icon} width={56} height={56}/>
                        <Caption
                            level="1"
                            weight="semibold"
                            caps
                            style={{ marginTop: 10, fontSize: 18 }}
                            className={styles.caption}
                        >
                            Учёба
                        </Caption>
                    </Card>
                    <Card className={styles.card} onClick={() => onClick('buildings')}>
                        <Icon56SchoolOutline className={styles.icon} width={56} height={56}/>
                        <Caption
                            level="1"
                            weight="semibold"
                            caps
                            style={{ marginTop: 10, fontSize: 18 }}
                            className={styles.caption}
                        >
                            Корпуса
                        </Caption>
                    </Card>
                    <Card className={styles.card} onClick={() => onClick('PD')}>
                        <Icon28LightbulbStarOutline className={styles.icon} width={56} height={56}/>
                        <Caption
                            level="1"
                            weight="semibold"
                            caps
                            style={{ marginTop: 10, fontSize: 18 }}
                            className={styles.caption}
                        >
                            ПД
                        </Caption>
                    </Card>
                </CardGrid>
            </Group>
            <FixedLayout filled vertical="bottom">
                <Tabbar className={styles.tabbarPadding}>
                    <TabbarItem text="Вопросы" selected>
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

export default Questions;
