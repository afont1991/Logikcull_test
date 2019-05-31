import React, { PureComponent } from "react";
import { connect } from "react-redux";

// Utils
import { sortConditionsByRank } from "utils/albumConditionsUtility";

// Action dispatchers
import { initAlbumData } from "store/album/actions";
import { initModal } from "app/ActionModal/actions";

// Selectors
import { getAlbumListFormatted } from "store/album/selectors";

// Rebass components
import { Flex } from "rebass";

// Components
import ActionCell from "app/AlbumList/components/ActionCell";
import ConditionCell from "app/AlbumList/components/ConditionCell";
import TableStyled from "app/AlbumList/components/TableStyled";
// import TableSubComponent from "app/AlbumList/components/TableSubComponent";

class AlbumList extends PureComponent {

  state = {
    columns: [
      { Header: "Album", accessor: "albumTitle"},
      { Header: "Artist", accessor: "artistName" },
      { Header: "Year", accessor: "year",},
      {
        Header: "Condition",
        accessor: "condition",
        sortMethod: sortConditionsByRank,
        Cell: ({ original: { condition } }) => <ConditionCell condition={condition} />
      },
      {
        Header: "Actions",
        sortable: false,
        Filter: () => (<ActionCell submitItem={() => this.handleAction(null, "add")} />),
        Cell: ( { original } ) =>
          <ActionCell
            submitItem={() => this.handleAction(original, "edit")}
            deleteItem={() => this.handleAction(original, "delete")}
          />
      },
    ]
  };

  componentDidMount = () => this.props.initAlbumData();

  handleAction = (data, type) => this.props.initModal(data, type);

  render(){

    // state
    const { columns } = this.state;

    // props
    const { albumList } = this.props;

    return (
      <Flex flex="1">
        <TableStyled
          className="-highlight"
          columns={columns}
          data={albumList}
          // options
          defaultPageSize={8}
          defaultFilterMethod={(filter, row) => row[filter.id].toLowerCase().includes(filter.value.toLowerCase()) }
          filterable={true}
          showPageSizeOptions={false}
          showPageJump={false}
          // SubComponent={(row) => <TableSubComponent row={row} />}
        />
      </Flex>
    );


  }


}

const mapStateToProps = (state) => ({
  albumList: getAlbumListFormatted(state),
})

const mapDispatchToProps = (dispatch) => ({
  initAlbumData: () => dispatch(initAlbumData()),
  initModal: (data, type, isDelete) => dispatch(initModal(data, type, isDelete)),
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(AlbumList);