import React from 'react';
import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    borderRadius: '5px',
    border: 'none',
    fontFamily: 'Mada-Regular',
    fontSize: '14px',
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
              <svg
                width='168'
                height='49'
                viewBox='0 0 168 49'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M40.0389 24.6885L24.8864 35.1474C22.7864 31.4832 20.3781 27.2783 20.1287 26.8586C19.6824 26.1044 20.109 25.4498 20.5946 25.1083L24.2761 23.4079C24.637 23.166 24.8733 22.7391 24.8733 22.2481C24.8733 21.7145 24.5845 21.245 24.1711 21.0244L12.6344 14.8558H12.6279C12.4638 14.7704 12.2801 14.7206 12.0898 14.7206C11.4204 14.7206 10.8692 15.2969 10.8429 16.0155L10.2785 30.4943C10.2785 30.5298 10.272 30.5654 10.272 30.601C10.272 31.3481 10.8298 31.9599 11.5254 31.9599C11.7485 31.9599 11.9585 31.8959 12.1423 31.782L12.1488 31.7749C12.1816 31.7536 12.2145 31.7323 12.2407 31.7109L15.1282 28.8792C15.7319 28.4665 16.5259 28.5306 16.9459 29.1994C17.1231 29.4768 19.9121 33.4327 22.3599 36.8905L5.82269 48.3027C5.73738 48.3668 5.64551 48.4308 5.55363 48.4877L5.53395 48.502C5.01552 48.8221 4.41834 49 3.78179 49C1.81964 49 0.224976 47.2711 0.224976 45.1437C0.224976 45.0441 0.231541 44.9445 0.238103 44.8449L1.83933 3.67838C1.92464 1.6293 3.48648 0 5.39614 0C5.94738 0 6.4658 0.135181 6.93173 0.377086H6.9383L6.95142 0.384208L39.7502 17.9223C40.938 18.5484 41.7583 19.8647 41.7583 21.3944C41.7386 22.7889 41.0627 24.0126 40.0389 24.6885Z'
                  fill='white'
                />
                <path
                  d='M139.42 14.6455L134.726 21.2939L131.407 14.6455H124.888L123.209 30.8317L118.145 14.5117H111.944L102.086 33.5673H108.764L109.987 31.0256H116.532L117.259 33.5673H122.912H124.042H129.027L129.999 24.19L133.602 30.9186H133.708L138.706 24.19L137.734 33.5673H143.962L145.919 14.6455H139.42ZM112.036 26.5377L114.225 21.9426L115.461 26.5377H112.036ZM104.618 22.4577H95.8785L96.1297 20.0498H105.537L106.099 14.6455H90.4441L88.7649 30.8584L83.6941 14.5117H77.4928L68.3429 32.1961L65.4406 27.1329C67.8273 26.0226 69.4404 24.103 69.7247 21.3474L69.7313 21.2939C69.9296 19.3475 69.4933 17.9429 68.4884 16.8059C67.3182 15.4816 65.2952 14.6455 61.9764 14.6455H52.8397L50.8828 33.5673H57.137L57.6989 28.163H59.0344L62.0028 33.5673H67.6421H69.1363H74.3194L75.5425 31.0256H82.0876L82.8148 33.5673H88.4806H89.6045H94.7348L95.376 27.3737H104.116L104.618 22.4577ZM63.4573 21.7487L63.4507 21.8089C63.3317 22.9727 62.3532 23.6482 60.8525 23.6482H58.1551L58.5386 19.9428H61.2624C62.7102 19.9428 63.5829 20.5381 63.4573 21.7487ZM77.5788 26.5377L79.7671 21.9426L81.0033 26.5377H77.5788ZM165.183 14.6589C166.407 14.6589 167.365 15.7156 167.259 16.9463L166.645 24.0495C166.539 25.2936 165.507 26.25 164.271 26.25H160.371H156.159L155.948 28.678H166.043L165.62 33.5539H148.827L149.634 24.2167C149.74 23.0061 150.745 22.0764 151.941 22.0764H156.311H160.126L160.324 19.7622H150.209L150.652 14.6589H165.183Z'
                  fill='white'
                />
              </svg>
            </div>
            <p className={classes.textUser} id='transition-modal-description'>
              Usuario: adminrafam
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
