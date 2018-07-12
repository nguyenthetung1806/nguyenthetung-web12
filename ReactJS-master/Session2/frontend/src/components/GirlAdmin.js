import React, { Component } from 'react';
import axios from '../axios';
import _ from "lodash";
import { Table, Button } from 'reactstrap';


class GirlAdmin extends Component {
    state = {
        girl: {}
    };
    edit(girlId) {
        // 1: Change page or open a model
        const ongirlEditDone = (updatedGirl) => {
            const newGirls = {
                ...this.state.girls,
                [girlId]: updatedGirl
            };
            this.setState({
                girl: newGirls
            })
        }
        ongirlEditDone({
            title: 'sddfsdfsdf',
            description: 'sdsddsf',
            img: 'asdasdasd'
        })
    }


    deleteGirl = (girlId) => {
        axios.delete(`/api//images/:${girlId}`)
            .then(response => {
                this.setState({
                    girls: _.omit(this.state.girls, girlId)
                });
            })
            .catch(err => console.log(err));
    }
    componentWillMount() {
        axios.get("/api/images")
            .then(response => {
                this.setState({
                    girls: _.mapKeys(response.data, "_id")
                })
                console.log('adminpage');
            })
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.state);
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(this.state.girls, (girl, _id) => {
                            return (
                                <tr key={_id} >
                                    <td> {girl.title} </td>
                                    <td> {girl.description} </td>
                                    <td> {girl.imageUrl} </td>
                                    <td>
                                        < Button color="warning" size="sm" onclick={() => this.edit(_id)}>Edit </Button>
                                        < Button color="danger" size="sm" onClick={() => this.deleteGirl(_id)} >Delete </Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    }
}

export default GirlAdmin;