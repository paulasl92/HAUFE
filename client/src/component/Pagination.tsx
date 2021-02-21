import ReactPaginate from 'react-paginate';
import CharactersList from './CharactersList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchCharactersAction, {loadFavsAction} from '../services/rickAndMorty-service';
import {getCharactersError, getCharacters, getCharactersPending, getPagesCount, getCurrentPage} from '../redux/reducers/reducerCharacters';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import '../util/styles/pagination.scss';

import Loader from 'react-loader-spinner';

class Pagination extends Component<any, any>{
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }
  
    componentDidMount() {
          const {fetchCharacters, currentPage, loadFavs} = this.props;
          fetchCharacters(currentPage);
          loadFavs();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(pending === false) return false;
        return true;
    }
  
    handlePageClick({ selected: selectedPage }) {
        const {fetchCharacters,currentPage} = this.props;
        fetchCharacters((selectedPage));
    }

    render() {
        const {characters, error, pending, pages, currentPage} = this.props;
  
        if( this.shouldComponentRender()) return <div className="spinner">
        <Loader
            type="ThreeDots"
            color="#333"
            height={100}
            width={100}
          />
         </div>
        return (
            <div className="content">
            {error && <span>{error}</span>}    
            <h1>Charactes List</h1>
            <ReactPaginate
                forcePage = {currentPage}
                marginPagesDisplayed = "2"
                pageRangeDisplayed = "10"
                pageCount={pages}
                onPageChange={this.handlePageClick.bind(this)}
                containerClassName={"pagination"}
            />
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
  fetchCharacters: fetchCharactersAction,
  loadFavs: loadFavsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);