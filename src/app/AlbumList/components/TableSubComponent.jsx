import React, { PureComponent } from "react";
import { connect } from "react-redux";

// Action dispatchers
import { loadAlbumDetails } from "store/album/actions";

// Selectors
import { getAlbumDetailsByTitle } from "store/album/selectors";

// Rebass components
import { Flex, Heading, Box } from "rebass";

// Theme components
import Loader from "theme/components/Loader";

class TableSubComponent extends PureComponent {

  componentDidMount = () => {
    const { row: { original: { albumTitle, artistName } } } = this.props;
    this.props.loadAlbumDetails(albumTitle, artistName);
  }

  render(){

    // props
    const { row: { original }, albumDetails } = this.props;

    return !albumDetails ? (
      <Loader />
    ) : (
      <Flex p={4}>
        <Box width={1/2} >
          <Heading color="logikcullTextLightBlue" fontSize="20px" fontWeight="bold" >{original.albumTitle}</Heading>
        </Box>
        <Box width={1/2} >
          <Heading color="logikcullTextLightBlue" fontSize="20px" fontWeight="bold" >Song List</Heading>
        </Box>
      </Flex>
    );

  }

}

const mapStateToProps = (state, { row: { original: albumTitle } }) => ({
  albumDetails: getAlbumDetailsByTitle(albumTitle)(state),
})

const mapDispatchToProps = (dispatch) => ({
  loadAlbumDetails: (albumTitle, artistName) => dispatch(loadAlbumDetails(albumTitle, artistName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableSubComponent);