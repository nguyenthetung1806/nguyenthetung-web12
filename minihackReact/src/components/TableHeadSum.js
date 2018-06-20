import React, { Component } from 'react';

class TableHeadSum extends Component {
    render() {
        console.log(this.props.rounds)
        let sums = [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < this.props.rounds.length; j++ ) {
                sums[i] += Number(this.props.rounds[j][i]);
            }
        }
        const sum = sums.reduce((a,b) => a + b, 0);
        return (

                <tr>
                    <th>Sum of score {sum}</th>
                    <th>{sums[0]}</th>
                    <th>{sums[1]}</th>
                    <th>{sums[2]}</th>
                    <th>{sums[3]}</th>
                </tr>
        );
    }
}

export default TableHeadSum ;