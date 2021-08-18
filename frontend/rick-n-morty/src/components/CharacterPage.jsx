import React from 'react'
import { Route, useParams } from 'react-router-dom'
import { Card, Image, List, Button } from 'antd';
import useServer from './apiHook';

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
                <h3>Location:
                    <Route render = {({history}) => ( 
                        <Button
                            type='link' 
                            onClick={() => {
                                let id = data.location.url.match(/\d+$/)
                                history.push(`/location/${id}`)
                            }}>
                                {data.location.name}
                        </Button>
                    )}/>
                </h3>
                <h3>Episodes: </h3>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 2,
                            sm: 3,
                            md: 4,
                            lg: 5,
                            xl: 6,
                            xxl:6,
                        }}
                        dataSource={data.episode}
                        renderItem={ep => (
                            <Route render = {({history}) => ( 
                                <List.Item>
                                    <Button type='dashed' onClick={() => {
                                        history.push(`/episode/${ep.match(/\d+$/)}`)
                                    }}>
                                        {`Episode - ${ep.match(/\d+$/)}`}
                                    </Button>
                                </List.Item>
                            )}/>
                        )}
                    ></List>
            </Card>
        )
    }
    return error
}

export default CharacterPage