// src/components/Dashboard.js
import React, {useState} from 'react';
import App from './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faHandHoldingHeart, faFileShield, faEnvelopeOpenText, faHelicopterSymbol, faUserCircle, faGears,faRegistered, faLanguage} from '@fortawesome/free-solid-svg-icons';
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons';

import logoImage from '../assets/Elite-Health-Services-Physical-Therapy-Clinic-logo-Greenwich-CT-300x94.png'

const Dashboard = () => {
  const [isHospitalMenuOpen, setIsHospitalMenuOpen] = useState(false);
  const [isPackagesMenuOpen, setIsPackagesMenuOpen] = useState(false);
  const [isReportsMenuOpen, setIsReportsMenuOpen] = useState(false);
  const [isEmailMenuOpen, setIsEmailMenuOpen] = useState(false);
  const [isLandingPageMenuOpen, setIsLandingPageMenuOpen] = useState(false);
  const [isSettingMenuOpen, setIsSettingMenuOpen] = useState(false);

  const closeAllMenus = () => {
    setIsHospitalMenuOpen(false);
    setIsPackagesMenuOpen(false);
    setIsReportsMenuOpen(false);
    setIsEmailMenuOpen(false);
    setIsLandingPageMenuOpen(false);
    setIsSettingMenuOpen(false);
  };

  const toggleHospitalMenu = () => {
    closeAllMenus();
    setIsHospitalMenuOpen(!isHospitalMenuOpen);
  };

  const togglePackagesMenu = () => {
    closeAllMenus();
    setIsPackagesMenuOpen(!isPackagesMenuOpen);
  };

  const toggleReportsMenu = () => {
    closeAllMenus();
    setIsReportsMenuOpen(!isReportsMenuOpen);
  };

  const toggleEmailMenu = () => {
    closeAllMenus();
    setIsEmailMenuOpen(!isEmailMenuOpen);
  };

  const toggleLandingPageMenu = () => {
    closeAllMenus();
    setIsLandingPageMenuOpen(!isLandingPageMenuOpen);
  };

  const toggleSettingMenu = () => {
    closeAllMenus();
    setIsSettingMenuOpen(!isSettingMenuOpen);
  };

  const gradientStyle = {
    background: 'linear-gradient(to bottom, skyblue, white)',
  };


  return (
    <div className="wrapper">
    <div className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div>
          <h4 className="logo-text mt-5 ">
            <img
              src={logoImage}
              style={{ maxWidth: '151px', height: 'auto', marginTop: '-48px' }}
              alt="imae"
            />
          </h4>
        </div>
        <div className="toggle-icon ms-auto">
          <i className="bx bx-arrow-to-left"></i>
        </div>
      </div>
      <ul className="metismenu" id="menu"  style={gradientStyle}>
        <li>
          <a href="./index.html">
            <div className="parent-icon">
              <i className="bx bx-home-circle"></i>
            </div>
            <div className="menu-title">Dashboard</div>
          </a>
        </li>
        <li>
      <a href="javascript:;" className="has-arrow" onClick={toggleHospitalMenu}>
        <div className="parent-icon">
        <FontAwesomeIcon icon={faHospital} className="fa-solid fa-hospital" />
        </div>
        <div className="menu-title">All Hospital</div>
      </a>
      <ul style={{ display: isHospitalMenuOpen ? 'block' : 'none', ...gradientStyle }}>
        <li>
          {' '}
          <a href="./Allhospital.html">
            <i className="bx bx-right-arrow-alt" ></i>Hospitals List
          </a>
        </li>
        <li>
          {' '}
          <a href="./createhospital.html">
            <i className="bx bx-right-arrow-alt"></i>Create New Hospital
          </a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow" onClick={togglePackagesMenu}>
        <div className="parent-icon">
        <FontAwesomeIcon icon={faHandHoldingHeart} className="fa-solid fa-hand-holding-heart" />
        </div>
        <div className="menu-title">Packages</div>
      </a>
      <ul style={{ display: isPackagesMenuOpen ? 'block' : 'none', ...gradientStyle  }}>
        <li>
          {' '}
          <a href="./pricing-table.html">
            <i className="bx bx-right-arrow-alt"></i>Add New Packages
          </a>
        </li>
      </ul>
    </li>
    <li>
        <a href="#" target="_blank">
          <div className="parent-icon">
          <FontAwesomeIcon icon={faRegistered} className="fa-solid fa-registered" />
          </div>
          <div className="menu-title">Registraction Form Website</div>
        </a>
      </li>

      {/* Reports */}
      <li>
        <a href="javascript:;" className="has-arrow" onClick={toggleReportsMenu}>
          <div className="parent-icon">
          <FontAwesomeIcon icon={faFileShield} className="fa-solid fa-file-shield" />
          </div>
          <div className="menu-title">Reports</div>
        </a>
        <ul style={{ display: isReportsMenuOpen ? 'block' : 'none', ...gradientStyle  }}>
          <li>
            {' '}
            <a href="./ActiveHospitals.html">
              <i className="bx bx-right-arrow-alt"></i>Active Hospital
            </a>
          </li>
          <li>
            {' '}
            <a href="./InactiveHospital.html">
              <i className="bx bx-right-arrow-alt"></i>Inactive Hospital
            </a>
          </li>
          <li>
            {' '}
            <a href="./LicenseExpiredHospitals.html">
              <i className="bx bx-right-arrow-alt"></i>Licence Expired Hospital
            </a>
          </li>
        </ul>
      </li>
      {/* email */}
      <li>
        <a href="javascript:;" className="has-arrow" onClick={toggleEmailMenu}>
          <div className="parent-icon">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-solid fa-envelope-open-text" />
          </div>
          <div className="menu-title">Email</div>
        </a>
        <ul style={{ display: isEmailMenuOpen ? 'block' : 'none' , ...gradientStyle }}>
          <li>
            {' '}
            <a href="app-emailbox.html">
              <i className="bx bx-right-arrow-alt"></i>Mails
            </a>
          </li>
          <li>
            {' '}
            <a href="app-chat-box.html">
              <i className="bx bx-right-arrow-alt"></i>Chat Box
            </a>
          </li>
          <li>
            {' '}
            <a href="app-contact-list.html">
              <i className="bx bx-right-arrow-alt"></i>Contacts
            </a>
          </li>
          <li>
            {' '}
            <a href="app-fullcalender.html">
              <i className="bx bx-right-arrow-alt"></i>Calendar
            </a>
          </li>
          <li>
            {' '}
            <a href="app-to-do.html">
              <i className="bx bx-right-arrow-alt"></i>Todo List
            </a>
          </li>
        </ul>
      </li>

      {/* Google reCAPTCHA */}
      <li>
        <a href="./GooglereCAPTCHA.HTML" target="_blank">
          <div className="parent-icon">
          <FontAwesomeIcon icon={faGears} className="fa-solid fa-gears" />
          </div>
          <div className="menu-title">Google reCAPTCHA</div>
        </a>
      </li>

      {/* Payment Gateway */}
      <li>
        <a href="paymentgetwat.html" target="_blank">
          <div className="parent-icon">
          <FontAwesomeIcon icon={faAmazonPay} className="fa-brands fa-amazon-pay" />
          </div>
          <div className="menu-title">Payment Gateway</div>
        </a>
      </li>

      {/* Language */}
      <li>
        <a href="paymentgetwat.html" target="_blank">
          <div className="parent-icon">
          <FontAwesomeIcon icon={faLanguage} className="fa-solid fa-language" />
          </div>
          <div className="menu-title">Language</div>
        </a>
      </li>
         {/* Landing Page */}
      <li>
        <a href="javascript:;" className="has-arrow" onClick={toggleLandingPageMenu}>
          <div className="parent-icon">
          <FontAwesomeIcon icon={faHelicopterSymbol} className="fa-solid fa-helicopter-symbol" />
          </div>
          <div className="menu-title">Landing Page</div>
        </a>
        <ul style={{ display: isLandingPageMenuOpen ? 'block' : 'none', ...gradientStyle  }}>
          <li>
            <a href="TopbarLanding.html">
              <i className="bx bx-right-arrow-alt"></i>Top Bar
            </a>
          </li>
          <li>
            <a href="CustompageLanding.html">
              <i className="bx bx-right-arrow-alt"></i>Custom Page
            </a>
          </li>
          {/* Add the rest of the Landing Page submenu items similarly */}
        </ul>
      </li>

      {/* Setting */}
      <li>
        <a href="javascript:;" className="has-arrow" onClick={toggleSettingMenu}>
          <div className="parent-icon">
          <FontAwesomeIcon icon={faUserCircle} className="bx bx-user-circle" />
          </div>
          <div className="menu-title">Setting</div>
        </a>
        <ul style={{ display: isSettingMenuOpen ? 'block' : 'none' , ...gradientStyle }}>
          <li>
            <a href="EmailSetting.html">
              <i className="bx bx-right-arrow-alt"></i>Email Setting
            </a>
          </li>
          <li>
            <a href="app-emailbox.html">
              <i className="bx bx-right-arrow-alt"></i>Payment Setting
            </a>
          </li>
          {/* Add the rest of the Setting submenu items similarly */}
        </ul>
      </li>
      </ul>
    </div>
  </div>
  );
};

export default Dashboard;
