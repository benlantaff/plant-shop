function Footer() {
  return (
    <div>
      <footer className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <img src="images/logo.png" alt="logo" />
                <div className="social-links mt-5">
                  <ul className="d-flex list-unstyled gap-2">
                    <li>
                      <a
                        href="https://twitter.com/benlantaff"
                        className="btn btn-outline-dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/benlantaff"
                        className="btn btn-outline-dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Subscribe</h5>
                <p>
                  Subscribe to our newsletter to get updates about our grand
                  offers.
                </p>
                <form className="d-flex mt-3 gap-0" role="newsletter">
                  <input
                    className="form-control rounded-start rounded-0 bg-light"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                  <button
                    className="btn btn-dark rounded-end rounded-0"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="footer-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>© 2023 Plant Shop. All rights reserved.</p>
            </div>
            <div className="col-md-6 credit-link text-start text-md-end">
              <p>
                by <a href="http://benlantaff.com/">Ben Lantaff</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
