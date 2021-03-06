import React from 'react';

import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { Icon28CalendarOutline } from '@vkontakte/icons';
import { Icon28InfoCircleOutline } from '@vkontakte/icons';
import { PanelHeaderBack } from '@vkontakte/vkui';
import Headline from '@vkontakte/vkui/dist/components/Typography/Headline/Headline';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import { Icon36HomeOutline } from '@vkontakte/icons';
import { Icon28BookOutline } from '@vkontakte/icons';
import { Icon56SchoolOutline } from '@vkontakte/icons';
import { Icon28LightbulbStarOutline } from '@vkontakte/icons';
import { Link } from '@vkontakte/vkui';

import * as styles from '../css/Instruction.module.css';
import router from '../router';
const Instruction = ({ id, category, question }) => {
    const createMarkup = (text) => {
        return { __html: text };
    };
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.back()} />}
            >
                PolyApp
            </PanelHeader>
            <Div>
                {category == 'dorms' ? (
                    <Icon36HomeOutline className={styles.instruction__icon} />
                ) : null}
                {category == 'study' ? (
                    <Icon28BookOutline className={styles.instruction__icon} />
                ) : null}
                {category == 'buildings' ? (
                    <Icon56SchoolOutline className={styles.instruction__icon} />
                ) : null}
                {category == 'PD' ? (
                    <Icon28LightbulbStarOutline className={styles.instruction__icon} />
                ) : null}
                <Title
                    style={{ marginTop: 10, textAlign: 'center' }}
                    level="2"
                    weight="medium"
                >
                    {question.question}
                </Title>
            </Div>
            <Group className={styles.groupAbout} style={{ marginBottom: 130 }}>
                <Div style={{ paddingBlockEnd: 0 }}>
                    <Headline
                        weight="regular"
                        dangerouslySetInnerHTML={createMarkup(
                            question.instruction
                        )}
                    ></Headline>
                </Div>
                {question.links.length !== 0 ? (
                    <Header
                        className={styles.heading}
                        style={{ padding: 0 }}
                        mode="secondary"
                    >
                        ???????????????? ????????????
                    </Header>
                ) : null}
                {question.links.length !== 0 &&
                    question.links.map((link, index) => {
                        return (
                            <Div
                                style={{
                                    paddingBlockEnd: 0,
                                    paddingBlockStart: 0,
                                }}
                            >
                                <Link
                                    key={index}
                                    className={styles.linkInstruction}
                                    href={link.href}
                                    target="_blank"
                                >
                                    {link.name}
                                </Link>
                            </Div>
                        );
                    })}
            </Group>
            <FixedLayout filled vertical="bottom">
                <Tabbar className={styles.tabbarPadding}>
                    <TabbarItem
                        selected
                        text="??????????????"
                        onClick={() => router.go('questions')}
                    >
                        <Icon28InfoCircleOutline />
                    </TabbarItem>
                    <TabbarItem
                        text="??????????????????"
                        onClick={() => router.go('calendar')}
                    >
                        <Icon28CalendarOutline />
                    </TabbarItem>
                    <TabbarItem
                        text="??????????????"
                        onClick={() => router.go('home')}
                    >
                        <Icon28UserCircleOutline />
                    </TabbarItem>
                </Tabbar>
            </FixedLayout>
        </Panel>
    );
};

export default Instruction;
