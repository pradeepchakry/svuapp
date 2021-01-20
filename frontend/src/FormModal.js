import React from 'react';
import ApplicationForm from './ApplicationForm';

class FormModal extends React.Component {
  render() {
    const formContent = <ApplicationForm />;
    const modal = this.props.showModal ? <div>{formContent}</div> : null;
    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default FormModal;