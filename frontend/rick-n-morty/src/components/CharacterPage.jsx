import React from 'react'
import { Route, useParams } from 'react-router-dom'
import { Card, Image } from 'antd';
import useServer from './apiHook';
import { List } from 'antd/lib/form/Form';

const CharacterPage = () => {
    const param = useParams().id;
    const url = `http://localhost:5050/character/${param}`;
    const {data, error} = useServer(url);

    if(data){
        return (
            <Card 
                title={data.name}
            >
                <Image src={data.image} />
                <h3>Status: {data.status}</h3>
                <h3>Location: {data.location.name}</h3>
                <h3>Episodes:
                    <ul style={{listStyleType: 'none'}}>
                        {data.episode.map(show => {
                            return <li>{show}</li>
                        })}
                    </ul>
                </h3>
                    {/* <List
                        itemLayout='vertical'
                        dataSource={data.episode}
                        renderItem={ep => (
                            <List.Item>
                                <List.Item.Meta title={ep}/>
                            </List.Item>
                        )}
                    ></List> */}
            </Card>
        )
    }
    return error
}

export default CharacterPage