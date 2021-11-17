import React, { useEffect, useState } from 'react';

import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Icon20HelpOutline } from '@vkontakte/icons';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';

import jsonData from '../json/Questions.json';

const renderQusstions = ({ go, updateQuestion, category }) => {
    const [data, setData] = useState();
    useEffect(() => {
        setData(jsonData);
    }, []);
    onClick = (unit) => (event) => {
        updateQuestion(unit);
        go(event);
    };
    return (
        <Div>
            {category == 'dorms' &&
                data.length !== 0 &&
                data.dorms.map((unit, index) => {
                    return (
                        <Div
                            onClick={this.onClick(unit)}
                            data-to="instruction"
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
                data.length !== 0 &&
                data.study.map((unit, index) => {
                    return (
                        <Div
                            onClick={this.onClick(unit)}
                            data-to="instruction"
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
                data.length !== 0 &&
                data.buildings.map((unit, index) => {
                    return (
                        <Div
                            onClick={this.onClick(unit)}
                            data-to="instruction"
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
                data.length !== 0 &&
                data.pd.map((unit, index) => {
                    return (
                        <Div
                            onClick={this.onClick(unit)}
                            data-to="instruction"
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
