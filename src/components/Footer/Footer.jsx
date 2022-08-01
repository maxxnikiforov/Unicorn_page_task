import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <div className="footer">
    <div className="footer__logo">Logo</div>

    <div className="footer__links">
      <h3 className="footer__links-title">Useful Links</h3>
      <ul className="footer__links-list">
        <li>
          <a className="footer__link" href="#up">Cookie Policy</a>
        </li>
        <li>
          <a className="footer__link" href="#up">Terms &amp; Conditions</a>
        </li>
        <li>
          <a className="footer__link" href="#up">Privacy Policy</a>
        </li>
        <li>
          <a className="footer__link" href="#up">Complaints Policy</a>
        </li>
        <li>
          <a className="footer__link" href="#up">Contact Us</a>
        </li>
      </ul>
    </div>
    <div className="footer__contacts">
      <h3 className="footer__contacts-title">Contsct Us</h3>
      <p className="footer__contacts-text">
        Turner Little Limited
        <br />
        Registered in England No. 3490752
        <br />
        Vat No. 764466206
      </p>
      <p className="footer__contacts-text">
        Registered Office:
        <br />
        Fanshawe House
        <br />
        Pioneer Business Park
        <br />
        Amy Johnson Way
        <br />
        York
        <br />
        YO30 4TN
      </p>
      <p className="footer__contacts-text">
        Or message us on
        <br />
        <a
          href="https://wa.me/1XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="footer__whatsAppLink"
        >
          <div className="footer__whatsAppLink-img" />
          <span className="footer__whatsAppLink-text"> WhatsApp</span>
        </a>
        <br />
        Licensed by the Financial Conduct
        <br />
        Authority No. 734784
      </p>
    </div>
    <div className="footer__social">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        className="footer__social-link"
      >
        <div className="footer__social-link-box footer__social-link-insta" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        className="footer__social-link"
      >
        <div className="footer__social-link-box footer__social-link-ball" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="footer__social-link"
      >
        <div
          className="footer__social-link-box footer__social-link-twit"
        />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noreferrer"
        className="footer__social-link"
      >
        <div className="footer__social-link-box footer__social-link-youtube" />
      </a>
    </div>
  </div>
);
