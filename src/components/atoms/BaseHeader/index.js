import React, { useState } from 'react';
import './styles.scss';
import Weather from '../Weather';
import TransitionsModal from '../LogoutModal';

const BaseHeader = ({ handleLogout }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='base-header-container'>
      {showModal ? (
        <TransitionsModal
          handleLogout={handleLogout}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
      <div className='base-header-title'>
        <p className='base-header-text'>Municipio</p>
        <div className='base-header-arrow'>
          <svg
            width='8'
            height='12'
            viewBox='0 0 8 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 10.58L4.57455 6L0 1.41L1.40832 0L7.40118 6L1.40832 12L0 10.58Z'
              fill='#787E8F'
            />
          </svg>
        </div>
        <p className='base-header-text'>Organismo</p>
      </div>
      <div className='base-header-user'>
        <div className='base-header-climate'>
          <Weather />
        </div>
        <div className='base-header-actions'>
          <div className='base-header-actions'>
            <div className='base-header-actions-search'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z'
                  fill='#12416F'
                />
              </svg>
            </div>
            <div className='base-header-actions-notifications'>
              <svg
                width='14'
                height='16'
                viewBox='0 0 14 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.5641 16C7.46667 16 8.20513 15.2615 8.20513 14.359H4.92308C4.92308 15.2615 5.66154 16 6.5641 16ZM11.4872 11.0769V6.97436C11.4872 4.45538 10.1497 2.34667 7.79487 1.78872V1.23077C7.79487 0.549744 7.24513 0 6.5641 0C5.88308 0 5.33333 0.549744 5.33333 1.23077V1.78872C2.98667 2.34667 1.64103 4.44718 1.64103 6.97436V11.0769L0 12.7179V13.5385H13.1282V12.7179L11.4872 11.0769ZM9.84615 11.8974H3.28205V6.97436C3.28205 4.93949 4.52103 3.28205 6.5641 3.28205C8.60718 3.28205 9.84615 4.93949 9.84615 6.97436V11.8974Z'
                  fill='#12416F'
                />
              </svg>
            </div>
            <div className='base-header-actions-help'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.2 12.8H8.8V11.2H7.2V12.8ZM8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM8 3.2C6.232 3.2 4.8 4.632 4.8 6.4H6.4C6.4 5.52 7.12 4.8 8 4.8C8.88 4.8 9.6 5.52 9.6 6.4C9.6 8 7.2 7.8 7.2 10.4H8.8C8.8 8.6 11.2 8.4 11.2 6.4C11.2 4.632 9.768 3.2 8 3.2Z'
                  fill='#12416F'
                />
              </svg>
            </div>
            <div
              className='base-header-actions-logout'
              onClick={() => setShowModal(!showModal)}
            >
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='16' cy='16' r='16' fill='#3843D0' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.75751 26.3018C4.24161 23.263 6.95457 20.6996 10.7169 19.4431C12.0925 20.8343 13.9297 21.7065 16.0268 21.7065C18.1102 21.7065 19.9372 20.8456 21.3099 19.4701C25.0526 20.7435 27.7401 23.3146 28.1976 26.3551C25.2628 29.8086 20.8873 31.9998 16.0001 31.9998C11.0878 31.9998 6.69252 29.7861 3.75751 26.3018ZM22.2401 12.9065C22.2401 15.4513 21.0662 17.6831 19.3029 18.9348C18.3518 19.6099 17.2292 19.9998 16.0268 19.9998C14.8472 19.9998 13.7444 19.6245 12.8049 18.9729C11.0115 17.7288 9.81343 15.4774 9.81343 12.9065C9.81343 8.98893 12.5952 5.81314 16.0268 5.81314C19.4583 5.81314 22.2401 8.98893 22.2401 12.9065Z'
                  fill='#FBFEFF'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseHeader;
