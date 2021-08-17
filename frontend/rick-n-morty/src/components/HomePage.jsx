import React from 'react';
import useServer from './apiHook';
import {List, Card} from 'antd';

const HomePage = () => {
    const baseURL = 'http://localhost:5050/characters';
    const {data, error} = useServer(baseURL);
    //let loading = true;

    if(data){
        return (
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 6,
                    xxl:4,
                }}
                dataSource={data}
                renderItem={character => (
                    <List.Item>
                        <Card 
                            title={character.name}
                            cover={<img alt={character.name} src={character.image}/>}
                        >
                        </Card>
                    </List.Item>
                )}
            >
            </List>
        )
    }
    return error;
}

export default HomePage
