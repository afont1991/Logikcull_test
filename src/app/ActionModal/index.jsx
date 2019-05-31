import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { reduxForm } from 'redux-form'
import { connect } from "react-redux";
import Modal from "react-modal";

// Action dispatchers
import { openModal, closeModal, confirmDelete, submitAlbumForm } from "app/ActionModal/actions";

// Rebass components
import { Flex } from "rebass";

// Components
import AlbumForm from "app/ActionModal/components/AlbumForm";
import DeleteConfirmation from "app/ActionModal/components/DeleteConfirmation";
import ModalHeader from "app/ActionModal/components/ModalHeader";

// Mount modal to dom
Modal.setAppElement('#LogikcullRecords');

// Styles
const ModalStyled = styled(Modal)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerModal = styled(Flex)`
  flex-direction: column;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: ${ (props) => props.theme.colors.logikcullTransparentBackground_2 };
`;

const FormStyled = styled.form`
  display: flex;
  flex-grow: 1;
  margin: 10px 0px;
`;

class ActionModal extends PureComponent {

  static formName = "ActionModal";
  static submit = (values, __, props) => {
    props.submitAlbumForm(ActionModal.formName, props.formType, values);
  }

  render(){

    // props
    const {
      closeModal,
      confirmDelete,
      formType,
      handleSubmit,
      isOpen,
    } = this.props;

    return (
      <ModalStyled isOpen={isOpen} onRequestClose={closeModal} >
        <InnerModal width={['90%', 1/2]} >
          { formType === "delete" ? (
            <Fragment>
              <ModalHeader title="Confirm Deletion" />
              <DeleteConfirmation confirm={confirmDelete} cancel={closeModal} />
            </Fragment>
          ) : (
            <Fragment>
              <ModalHeader title={formType === "add" ? "Add Album" : "Edit Album"} />
              <FormStyled onSubmit={handleSubmit}>
                <AlbumForm formType={formType} closeModal={closeModal} />
              </FormStyled>
            </Fragment>
          )}
        </InnerModal>
      </ModalStyled>
    );

  }

}

const mapStateToProps = (state) => ({
  initialValues: state.actionModal.formData,
  isOpen: state.actionModal.isOpen,
  formType: state.actionModal.formType,
})

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  confirmDelete: () => dispatch(confirmDelete(ActionModal.formName)),
  submitAlbumForm: (formName, formType, values) => dispatch(submitAlbumForm(formName, formType, values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: ActionModal.formName,
  onSubmit: ActionModal.submit,
  enableReinitialize : true
})(ActionModal));