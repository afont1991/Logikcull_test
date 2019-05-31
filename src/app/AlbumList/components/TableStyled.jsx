import styled from "styled-components";
import ReactTable from "react-table";

const TableStyled = styled(ReactTable)`

  flex-grow: 1;

  && {

    div.rt-th {
      background: #fff;
      border: 1px solid ${ (props) => props.theme.colors.logikcullButtonBlue_hover };
      color: ${ (props) => props.theme.colors.logikcullButtonBlue_hover };
      transition: all .1s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.rt-thead.-header {
      div.rt-th:hover {
        background: ${ (props) =>  props.theme.colors.logikcullButtonBlue };
        border: 1px solid ${ (props) => props.theme.colors.logikcullButtonBlue };
        color: #fff;
      }
    }


    div.rt-tbody{

      div.rt-tr-group {

        cursor: pointer;
        border: 1px solid ${ (props) => props.theme.colors.logikcullTextDarkBlue };

        div.rt-td{
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }

    }

    .pagination-bottom {
      background: #fff;
    }

  }

`;

export default TableStyled;