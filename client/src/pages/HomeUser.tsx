import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchCharactersAction from '../services/rickAndMorty-service';
import {getCharactersError, getCharacters, getCharactersPending} from '../redux/reducers/reducerCharacters';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from 'react-loader-spinner';
import CharactersList from '../component/CharactersList';

class HomeUser extends Component<any, any>{
  constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
        const {fetchCharacters} = this.props;
        fetchCharacters();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(pending === false) return false;
      return true;
  }

  render() {
      const {characters, error, pending} = this.props;

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
          </div>
      )
  }
}

const mapStateToProps = state => ({
    error: getCharactersError(state),
    characters: getCharacters(state),
    pending: getCharactersPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCharacters: fetchCharactersAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeUser);
