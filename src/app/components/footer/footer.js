"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./footer.css";
import FooterLogo from "public/img/footer/footerLogo.svg";
import ButtonUp from "public/img/footer/button-up.svg";
import OpenIcon from "public/img/footer/openIconWhite.svg";

export function Footer() {
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);
  const router = usePathname();
  const isActive = (path) => {
    return router === path;
  };

  const toggleCompanyMenu = () => {
    setIsCompanyMenuOpen(!isCompanyMenuOpen);
  };

  const toggleSupportMenu = () => {
    setIsSupportMenuOpen(!isSupportMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const CopyrightYear = () => {
    const currentYear = new Date().getFullYear();

    return <p>Copyright © {currentYear} AppsDelivered</p>;
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo-section">
          <Image src={FooterLogo} alt="FooterLogo" width={130} height={52} />
          <div className="contacts">
            <ul className="contacts-list">
              <li>
                <Link href="tel:+14072438392">+1 407-243-8392</Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://goo.gl/maps/Vfo9fmHSZYoo4QVA9"
                  rel="noreferrer"
                >
                  St Petersburg, FL 33702, USA.
                </Link>
              </li>
              <li>
                <Link href="mailto:support@appsdelivered.atlassian.net">
                  support@appsdelivered.atlassian.net
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <h3>Overview</h3>
            <div className="link">
              <Link className={isActive("/") ? "active" : ""} href="/">
                Home
              </Link>
              <Link
                className={isActive("/products") ? "active" : ""}
                href="/products"
              >
                Products{" "}
              </Link>
              <Link className={isActive("/blog") ? "active" : ""} href="/blog">
                Blog
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <div className="link">
              <Link
                href="https://marketplace.atlassian.com/vendors/1216797/appsdelivered"
                target="_blank"
                rel="noreferrer"
              >
                Vendor Profile
              </Link>
              <Link
                href="https://appsdelivered.atlassian.net/servicedesk/customer/portal/11/group/13/create/65"
                target="_blank"
                rel="noreferrer"
              >
                Investor Relations
              </Link>
              <Link
                href="https://appsdelivered.atlassian.net/servicedesk/customer/portal/11/group/13/create/66"
                target="_blank"
                rel="noreferrer"
              >
                News &amp; Press
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <h3>Support</h3>
            <div className="link">
              <Link
                href="https://appsdelivered.atlassian.net/servicedesk/customer/portal/6"
                target="_blank"
                rel="noreferrer"
              >
                Product Help
              </Link>
              <Link
                className={isActive("/schedule-demo") ? "active" : ""}
                href="/schedule-demo"
              >
                Product Demo
              </Link>
              <Link
                href="https://appsdelivered.atlassian.net/wiki/spaces"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </Link>
              <Link
                href="https://appsdelivered.atlassian.net/servicedesk/customer/portal/11/group/13/create/67"
                target="_blank"
                rel="noreferrer"
              >
                Partner
              </Link>
            </div>
          </div>

          <div className="footer-links-mobile">
            <div className="link-mobile">
              <Link className={isActive("/") ? "active" : ""} href="/">
                <strong className="footer-main-link">Home</strong>
              </Link>
            </div>
            <div className="link-mobile">
              <Link
                className={isActive("/products") ? "active" : ""}
                href="/products"
              >
                <strong className="footer-main-link">Products</strong>
              </Link>
            </div>
            <div className="link-mobile">
              <Link className={isActive("/blog") ? "active" : ""} href="/blog">
                <strong className="footer-main-link">Blog</strong>
              </Link>
            </div>
            <div className="link-mobile" onClick={toggleCompanyMenu}>
              <strong className="footer-main-link">
                Company{" "}
                <Image
                  src={OpenIcon}
                  alt="OpenIcon"
                  className={isCompanyMenuOpen ? "rotated" : ""}
                  width={12}
                  height={24}
                />
              </strong>
              <ul
                className="footer-sub-menu"
                style={{ display: isCompanyMenuOpen ? "flex" : "none" }}
              >
                <li>
                  <Link
                    href="https://marketplace.atlassian.com/vendors/1216797/appsdelivered"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vendor Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://appsdelivered.atlassian.net/servicedesk/customer/portal/11/group/13/create/65"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://appsdelivered.atlassian.net/servicedesk/customer/portal/11/group/13/create/66"
                    target="_blank"
                    rel="noreferrer"
                  >
                    News &amp; Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="link-mobile" onClick={toggleSupportMenu}>
              <strong className="footer-main-link img-right">
                Support{" "}
                <Image
                  src={OpenIcon}
                  alt="OpenIcon"
                  className={isSupportMenuOpen ? "rotated" : ""}
                  width={12}
                  height={24}
                />
              </strong>
              <ul
                className="footer-sub-menu"
                style={{ display: isSupportMenuOpen ? "flex" : "none" }}
              >
                <li>
                  <Link
                    href="https://appsdelivered.atlassian.net/servicedesk/customer/portal/6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Product Help
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive("/schedule-demo") ? "active" : ""}
                    href="/schedule-demo"
                  >
                    Product Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://appsdelivered.atlassian.net/wiki/spaces"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://appsdelivered.atlassian.net/servicedesk/customer/portal/11/group/13/create/67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Partner
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-links follow-wrapper">
            <div className="follow-us">
              <h3>Follow us</h3>
              <div className="social-media">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/appsdelivered/"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="25"
                      height="25"
                      rx="5.125"
                      stroke="white"
                    />
                    <circle cx="13" cy="13" r="5" stroke="white" />
                    <circle
                      cx="20.0911"
                      cy="5.90896"
                      r="1.77273"
                      fill="white"
                    />
                  </svg>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/appsdeliveredinc/"
                  rel="noreferrer"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="25"
                      height="25"
                      rx="5.125"
                      stroke="white"
                    />
                    <path
                      d="M8.71011 18.126C8.32161 18.126 8.02236 18.0158 7.81236 17.7952C7.61286 17.5642 7.51311 17.244 7.51311 16.8345V11.448C7.51311 11.028 7.61286 10.7077 7.81236 10.4872C8.02236 10.2562 8.32161 10.1407 8.71011 10.1407C9.08811 10.1407 9.37686 10.2562 9.57636 10.4872C9.78636 10.7077 9.89136 11.028 9.89136 11.448V16.8345C9.89136 17.244 9.79161 17.5642 9.59211 17.7952C9.39261 18.0158 9.09861 18.126 8.71011 18.126ZM8.71011 8.84925C8.26911 8.84925 7.92786 8.7495 7.68636 8.55C7.45536 8.34 7.33986 8.046 7.33986 7.668C7.33986 7.2795 7.45536 6.9855 7.68636 6.786C7.92786 6.576 8.26911 6.471 8.71011 6.471C9.15111 6.471 9.48711 6.576 9.71811 6.786C9.94911 6.9855 10.0646 7.2795 10.0646 7.668C10.0646 8.046 9.94911 8.34 9.71811 8.55C9.48711 8.7495 9.15111 8.84925 8.71011 8.84925ZM12.9245 18.1418C12.536 18.1418 12.2367 18.0368 12.0267 17.8267C11.8272 17.6167 11.7275 17.3175 11.7275 16.929V11.3377C11.7275 10.9492 11.8272 10.6552 12.0267 10.4557C12.2367 10.2457 12.5255 10.1407 12.893 10.1407C13.271 10.1407 13.5597 10.2457 13.7592 10.4557C13.9587 10.6552 14.0585 10.9492 14.0585 11.3377V12.2355L13.8852 11.7157C14.1267 11.2012 14.4837 10.8075 14.9562 10.5345C15.4392 10.251 15.9852 10.1092 16.5942 10.1092C17.2137 10.1092 17.723 10.23 18.122 10.4715C18.521 10.7025 18.8202 11.0595 19.0197 11.5425C19.2192 12.015 19.319 12.6187 19.319 13.3537V16.929C19.319 17.3175 19.214 17.6167 19.004 17.8267C18.8045 18.0368 18.5105 18.1418 18.122 18.1418C17.744 18.1418 17.45 18.0368 17.24 17.8267C17.0405 17.6167 16.9407 17.3175 16.9407 16.929V13.464C16.9407 12.9285 16.841 12.5452 16.6415 12.3142C16.4525 12.0727 16.1585 11.952 15.7595 11.952C15.2555 11.952 14.8512 12.1095 14.5467 12.4245C14.2527 12.7395 14.1057 13.1595 14.1057 13.6845V16.929C14.1057 17.7375 13.712 18.1418 12.9245 18.1418Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@appsdelivered8975"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="25"
                      height="25"
                      rx="5.125"
                      stroke="white"
                    />
                    <path
                      d="M9.62916 9.21223C9.62917 8.3462 10.5667 7.80494 11.3167 8.23795L17.6917 11.9186C18.4417 12.3516 18.4417 13.4341 17.6917 13.8671L11.3167 17.5477C10.5667 17.9807 9.62917 17.4395 9.62917 16.5734L9.62916 9.21223Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="button-up-wrapper">
              <button className="button-up" onClick={scrollToTop}>
                <Image
                  className="button-up-svg"
                  src={ButtonUp}
                  alt="ButtonUp"
                  width={28}
                  height={28}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <p className="dot-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#FAFAFA" />
          </svg>
        </p>
        <Link href="/cookies-policy"> Сookies Policy </Link>
        <p className="dot-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#FAFAFA" />
          </svg>
        </p>
        <Link
          target="_blank"
          href="https://app.termly.io/notify/ee77c904-6e67-4071-a6dc-779d2fbc3f38"
        >
          DSAR
        </Link>
        <p className="dot-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#FAFAFA" />
          </svg>
        </p>
        <CopyrightYear />
      </div>
    </footer>
  );
}
