import React from 'react';
import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Logo from '../Logo';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    width: '300px',
    height: '300px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(18, 65, 111, 1)',
    padding: '5px 5px 40px 5px',
    borderRadius: '8px',
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '6px 6px',
  },
  logo: {
    display: 'flex',
    margin: '20px 0px',
    padding: '10px 15px',
  },
  textUser: {
    fontFamily: 'Mada-Medium',
    fontSize: '15px',
    color: 'white',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    border: 'none',
    fontFamily: 'Mada-Regular',
    fontSize: '14px',
    width: '20px'
  },
  buttonLogout: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    border: 'none',
    fontFamily: 'Mada-Regular',
    fontSize: '16px',
    backgroundColor: '#fd5c63',
    padding: '8px',
  },
}));

export default function TransitionsModal({
  handleLogout,
  showModal,
  setShowModal,
}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={showModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <div className={classes.paper}>
            <div className={classes.closeButton}>
              <button
                className={classes.button}
                onClick={() => setShowModal(!showModal)}
              >
                x
              </button>
            </div>
            <div className={classes.logo}>
              <Logo />
            </div>
            <p className={classes.textUser} id='transition-modal-description'>
              ¿Desea cerrar sesión?
            </p>
            <button
              className={classes.buttonLogout}
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
