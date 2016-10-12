import React from 'react';

export default React.createClass({
    render(){
        return (
            <div ref="winner">
                Winner is {this.props.winner}!
            </div>
        );
    }
})