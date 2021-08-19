import React, { useState } from 'react';
import useServer from './apiHook';
import {List, Card, TreeSelect, Button, Pagination,} from 'antd';
import { TreeNode } from 'antd/lib/tree-select';
import Layout from 'antd/lib/layout/layout';
import { Route } from 'react-router-dom';

const HomePage = () => {
    const baseURL = 'http://localhost:5050/characters';
    const {data, error} = useServer(baseURL);
    //const [charactersToDisplay, setCharacters] = useState([])
    const [filter, setFilter]= useState([]);

    if(data){
        let charactersToDisplay = data.results;
        //setCharacters(data);

        const applyFilter = () => {
            if(filter.length > 0){
                let gender = undefined;
                let status = undefined;
                for(let i = 0; i < filter.length; i++){
                    if(filter[i] === 'Female' ||
                        filter[i] === 'Male' ||
                        filter[i] === 'Genderless' ||
                        filter[i] === 'genderUnknown'){
                            gender = filter[i];
                            if(gender === 'genderUnknown'){
                                gender = 'Unknown'
                            }
                    }
                    else{
                    status = filter[i];
                    if(status === 'statusUnknown'){
                        status = 'Unknown'
                    }
                }
            }
            if(gender){
                charactersToDisplay = charactersToDisplay.filter(character => {
                    return character.gender === gender
                });
                if(status){
                    charactersToDisplay = charactersToDisplay.filter(character => {
                        return character.status === status
                    });
                }
            }
            else{
                charactersToDisplay = charactersToDisplay.filter(character => {
                    return character.status === status
                });
            }
            console.log(charactersToDisplay)
            }
        }
         
        return (
            <Layout >
                <div>
                    <TreeSelect
                        placeholder='Select Filter'
                        allowClear
                        style={{width: '75%'}}
                        multiple
                        treeDefaultExpandAll = 'true'
                        title= 'Filter'
                        value = {filter}
                        onChange= {(value) => {
                            setFilter(value);
                        }}
                    >
                        <TreeNode value='gender' title='Gender'>
                            <TreeNode value='Female' title='Female'/>
                            <TreeNode value='Male' title='Male'/>
                            <TreeNode value='Genderless' title='Genderless'/>
                            <TreeNode value='genderUnknown' title='Unknown'/>
                        </TreeNode>
                        <TreeNode value='status' title='Status'>
                            <TreeNode value='Alive' title='Alive'/>
                            <TreeNode value='Dead' title='Dead'/>
                            <TreeNode value='statusUnknown' title='Unknown'/>
                        </TreeNode>
                    </TreeSelect>
                    <Button style={{width: '25%', 
                                    position:'float-right'}} 
                            type='dashed' 
                            onClick={applyFilter}>Apply Filter</Button>
                </div>
                <List
                    pagination={{position: 'both'}}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 6,
                        xxl:4,
                    }}
                    dataSource={charactersToDisplay}
                    renderItem={character => (
                        <Route render = {({history}) => ( 
                            <List.Item onClick={() => {history.push(`${character.id}`)}}>
                                <Card 
                                    title={character.name}
                                    cover={<img alt={character.name} src={character.image}/>}
                                ></Card>
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

export default HomePage
