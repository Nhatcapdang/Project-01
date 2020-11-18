import React, { Component } from 'react';



class PaginationCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handlePageChange = (newPage) => {
        this.props.onPagechange(newPage)
    }

    render() {
        const { pagination } = this.props;
        const { _page, _limit, _totalRows } = pagination;
        const totalPage = Math.ceil(_totalRows / _limit)
        return (
            <div>
                <button
                    disabled={_page <= 1}
                    onClick={() => this.handlePageChange(_page - 1)}
                >prev</button>
                <button
                    disabled={_page >= totalPage}
                    onClick={() => this.handlePageChange(_page + 1)}
                >next</button>
            </div>
        );
    }
}

export default PaginationCustom;


// handlePageChange = (newPage) => {
//     this.setState(prevState => ({
//         pagination: {                   // object that we want to update
//             ...prevState.pagination,    // keep all other key-value pairs
//             _page: newPage       // update the value of specific key
//         }
//     }))
//     console.log(this.state.pagination)
//     console.log('ok', newPage)
// }

