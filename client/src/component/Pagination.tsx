import ReactPaginate from 'react-paginate';
import CharactersList from './CharactersList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchCharactersAction from '../services/rickAndMorty-service';
import {getCharactersError, getCharacters, getCharactersPending, getPagesCount, getCurrentPage} from '../redux/reducers/reducerCharacters';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import '../util/styles/pagination.scss';

import Loader from 'react-loader-spinner';

class Pagination extends Component<any, any>{
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }
  
    componentWillMount() {
          const {fetchCharacters, currentPage} = this.props;
          fetchCharacters(currentPage);
    }
  
    shouldComponentRender() {
        const {pending} = this.props;
        if(pending === false) return false;
        return true;
    }
  
    handlePageClick({ selected: selectedPage }) {
        const {fetchCharacters,currentPage} = this.props;
        fetchCharacters((selectedPage))
    }

    render() {
        const {characters, error, pending, pages, currentPage} = this.props;
  
        if( this.shouldComponentRender()) return <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
         
        return (
            <div>
            {error && <span>{error}</span>}    
            <CharactersList characters={characters} />
            <ReactPaginate
                forcePage = {currentPage}
                marginPagesDisplayed = "2"
                pageRangeDisplayed = "10"
                pageCount={pages}
                onPageChange={this.handlePageClick.bind(this)}
                containerClassName={"pagination"}
            />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: getCharactersError(state),
    characters: getCharacters(state),
    pending: getCharactersPending(state),
    pages: getPagesCount(state),
    currentPage: getCurrentPage(state) 
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCharacters: fetchCharactersAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);