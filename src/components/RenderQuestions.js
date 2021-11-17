import React, { useEffect, useState } from 'react';

import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Icon20HelpOutline } from '@vkontakte/icons';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';

import jsonData from '../json/Questions.json';
import router from '../router';

const renderQusstions = ({ updateQuestion, category }) => {
    const [data, setData] = useState();
    useEffect(() => {
        setData(jsonData);
    }, []);
    const onClick = (unit) => {
        updateQuestion(unit);
        router.go('instruction');
    };
    return (
        <Div>
            {category == 'dorms' &&
                data !== undefined &&
                data.dorms.map((unit, index) => {
                    return (
                        <Div
                            onClick={() => onClick(unit)}
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                padding: 0,
                                marginBottom: 15,
                            }}
                        >
                            <Icon20HelpOutline
                                style={{ alignSelf: 'center' }}
                            />
                            <Text style={{ paddingLeft: 12, fontSize: 20 }}>
                                {unit.question}
                            </Text>
                        </Div>
                    );
                })}
            {category == 'study' &&
                data !== undefined &&
                data.study.map((unit, index) => {
                    return (
                        <Div
                            onClick={() => onClick(unit)}
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                padding: 0,
                                marginBottom: 15,
                            }}
                        >
                            <Icon20HelpOutline
                                style={{ alignSelf: 'center' }}
                            />
                            <Text style={{ paddingLeft: 12, fontSize: 20 }}>
                                {unit.question}
                            </Text>
                        </Div>
                    );
                })}
            {category == 'buildings' &&
                data !== undefined &&
                data.buildings.map((unit, index) => {
                    return (
                        <Div
                            onClick={() => onClick(unit)}
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                padding: 0,
                                marginBottom: 15,
                            }}
                        >
                            <Icon20HelpOutline
                                style={{ alignSelf: 'center' }}
                            />
                            <Text style={{ paddingLeft: 12, fontSize: 20 }}>
                                {unit.question}
                            </Text>
                        </Div>
                    );
                })}
            {category == 'PD' &&
                data !== undefined &&
                data.pd.map((unit, index) => {
                    return (
                        <Div
                            onClick={() => onClick(unit)}
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                padding: 0,
                                marginBottom: 15,
                            }}
                        >
                            <Icon20HelpOutline
                                style={{ alignSelf: 'center' }}
                            />
                            <Text style={{ paddingLeft: 12, fontSize: 20 }}>
                                {unit.question}
                            </Text>
                        </Div>
                    );
                })}
        </Div>
    );
};

export default renderQusstions;
