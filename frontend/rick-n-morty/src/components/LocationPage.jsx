import React from 'react'
import useServer from './apiHook';
import { Route, useParams } from 'react-router-dom'
import { Button, Layout, List } from 'antd';

const LocationPage = () => {
    const param = useParams().id;
    const url = `https://rick-n-morty-server.herokuapp.com/location/${param}`;
    const {data, error} = useServer(url);

    if(data){
        return (
            <Layout>
                <h2>Residents of {data.name}</h2>
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
                    dataSource={data.residents}
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

export default LocationPage
