import React, { Component } from "react";

class ListMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList : this.props.LinkImg
        }
    }
    render(){
        return (
            <div>
                <img src={this.state.dataList} alt="" width="150px" />
            </div>
        )
    }
}

export default ListMakanan;