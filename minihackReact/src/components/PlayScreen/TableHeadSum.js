import React, { Component } from 'react';

class TableHeadSum extends Component {
    render() {
        let sums = [0, 0, 0, 0];
        this.props.rounds.forEach(element => {
            element.forEach((e, index) => {
                sums[index] += Number(element[index]);
            });
        });

        var sumTotal = sums.reduce((a,b) => a + b, 0);
        return (

                <tr>
                    <th>Sum of score {sumTotal}</th>
                    <th>{sums[0]}</th>
                    <th>{sums[1]}</th>
                    <th>{sums[2]}</th>
                    <th>{sums[3]}</th>
                </tr>
        );
    }
}

export default TableHeadSum ;