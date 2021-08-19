import React from 'react'
import useServer from './apiHook';
import { Route, useParams } from 'react-router-dom'
import { Button, List, Layout } from 'antd';

const EpisodePage = () => {
    const param = useParams().id;
    const url = `https://rick-n-morty-server.herokuapp.com/episode/${param}`;
    const {data, error} = useServer(url);

    if(data){
        return (
            <Layout>
                <h2>List of characters appearing in "{data.name}"</h2>
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
                    dataSource={data.characters}
                    renderItem={character => (
                        <Route render = {({history}) => ( 
                            <List.Item>
                                <Button onClick={() => {history.push(`/${character.match(/\d+$/)}`)}} >
                                    {`Character # ${character.match(/\d+$/)}`}
                                </Button>
                            </List.Item>
                        )}/>
                    )}
                >
                </List>
            </Layout>
        )
    }
    return error;
}

export default EpisodePage
