import logo from './logo.svg';
import './App.css';



function App() {
  return (

    <div>
    <div className="brand_name_header">
      <img src="images/logo.png" alt="logo" />
    </div>






    <header>
      <nav className="navbar navbar-expand-lg navbar-light desired tag">
        <div className="container">
          <div className="navbar-brand" href="javascript:;">
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-bars" />
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className="vn-red" style={{textAlign: 'center'}}>
              <a href="#">
                <div className="d_icon"><img src="images/download_icon.png" alt="" /></div><span>Download
                  App</span>
              </a>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#signInformModal">Videos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#signInformModal">PinBoard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#signInformModal">Watchlist</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#signInformModal">Companies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#signInformModal"><span>PRO</span>Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#signInformModal"><span>PRO</span>+</a>
              </li>
            </ul>
            <div className="nav-btns">
              <li className="nav-item spe">
                <div className="search-box">
                  <button className="btn-search"><i className="fas fa-search" /></button>
                  <input type="text" className="input-search" placeholder="Type to Search..." />
                </div>
              </li>
              <li className="nav-item spe">
                <a className="nav-link" href="#">
                  <img src="images/user.png" alt="" />
                </a>
              </li>
              <li className="nav-item spe">
                <button className="nav-link btn_theme" href="employer.php">Join for FREE</button>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>




    <div className="header-2" >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>



    <section className="breaking_news_section">
      <div className="container">
        <div className="row align-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="breaking_news">
              <h2>Breaking News</h2>
              <h1>Headline goes here...</h1>
              <img className="img-fluid" src="images/breaking_img1.png" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea. </p>
              <div className="breaking_specs">
                <p>World news</p>
                <p className="dots">•</p>
                <p>12 December 2023</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img className="img-fluid" src="images/lns_img1.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img className="img-fluid" src="images/lns_img1.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img className="img-fluid" src="images/lns_img1.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subcribe_container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-6">
              <div className="subc">
                <div className="subc_inner">
                  <h1>Subscribe Now</h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-6">
              <div className="subc">
                <div className="subc_inner">
                  <h1><span>DOWNLOAD</span><br />
                    Notes &amp; Notebooks</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*slider here*/}
    <section className="politics_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="politics-slider">
              <div className="politics_body">
                <div className="pb_content">
                  <div className="pb_label">
                    <h2>Politics</h2>
                  </div>
                  <div className="pb-shadow pb-none">
                    <h3>News title goes here... News title goes here... News title goes here... </h3>
                  </div>
                  <p className="pb-date"><i>September 23th, 2023</i></p>
                </div>
                <div className="pb_content pb_c_hover">
                  <div className="pb_label">
                    <h2>Politics</h2>
                  </div>
                  <div className="pb-shadow">
                    <h3>News title goes here... News title goes here... News title goes here... </h3>
                    <p className="pb_cp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea. </p>
                  </div>
                  <p className="pb-date"><i>September 23th, 2023</i></p>
                </div>
              </div>
              <div className="politics_body">
                <div className="pb_content">
                  <div className="pb_label">
                    <h2>Politics</h2>
                  </div>
                  <div className="pb-shadow pb-none">
                    <h3>News title goes here... News title goes here... News title goes here... </h3>
                  </div>
                  <p className="pb-date"><i>September 23th, 2023</i></p>
                </div>
                <div className="pb_content pb_c_hover">
                  <div className="pb_label">
                    <h2>Politics</h2>
                  </div>
                  <div className="pb-shadow">
                    <h3>News title goes here... News title goes here... News title goes here... </h3>
                    <p className="pb_cp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea. </p>
                  </div>
                  <p className="pb-date"><i>September 23th, 2023</i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*slider here*/}
    <section className="ads-section p-0">
      <div className="container">
        <div className="google_ads">
          <div className="google_ads_inner">
            <div className="g_ads">
              <img src="images/google_ads.png" alt="ads" />
            </div>
            <div className="g_ads">
              <h2>Banner here...</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>USinMinutes</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns1.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns2.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img1.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img2.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img3.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Investing</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns25.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns3.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img4.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img5.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img6.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Bussiness</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns4.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns5.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img className="img-fluid" src="images/img_pns6.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img7.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img8.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Economy</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns6.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns7.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img10.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img11.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img12.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ads-section p-0">
      <div className="container">
        <div className="google_ads">
          <div className="google_ads_inner">
            <div className="g_ads">
              <img src="images/google_ads.png" alt="ads" />
            </div>
            <div className="g_ads">
              <h2>Banner here...</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Industy</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns8.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns9.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img13.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img14.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img15.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Layoffs</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns10.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns11.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img16.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img17.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img18.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Data Dive</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns12.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns13.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img19.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img20.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img21.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Technology</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns14.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns15.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img22.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img23.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img24.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ads-section p-0">
      <div className="container">
        <div className="google_ads">
          <div className="google_ads_inner">
            <div className="g_ads">
              <img src="images/google_ads.png" alt="ads" />
            </div>
            <div className="g_ads">
              <h2>Banner here...</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Climate Change</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns16.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns17.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img25.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img26.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img27.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Health</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns18.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns19.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img28.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img29.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img30.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>Entertainment</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns20.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns21.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img28.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img29.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img30.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="politic_news_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="head_pns">
              <div className="heading_pns">
                <h1>World</h1>
              </div>
              <div className="search_pns">
                <input type="search" placeholder="Search news" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns22.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-6">
                <div className="headline_pns">
                  <img className="img-fluid" src="images/img_pns23.png" alt="" />
                  <div className="h_pns">
                    <h5>September 23th, 2023</h5>
                    <h3>The Headline goes here... <br />Headline goes here...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="latest-news-siderbar">
              <div className="lns-head">
                <h3>Latest News</h3>
                <h6><a href="javascript:;">Show more<i className="fa-solid fa-arrow-right-long" /></a></h6>
              </div>
              <div className="lns-body">
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img28.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img29.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
                <div className="lns-item">
                  <div>
                    <img src="images/pns_img30.png" alt="" />
                  </div>
                  <div className="lns-item-right">
                    <h4>Impact of New COVID-19 Variants News</h4>
                    <div className="lns_specs">
                      <p>World news</p>
                      <p className="dots">•</p>
                      <p className="light_grey">12 December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ads-section p-0">
      <div className="container">
        <div className="google_ads">
          <div className="google_ads_inner">
            <div className="g_ads">
              <img src="images/google_ads.png" alt="ads" />
            </div>
            <div className="g_ads">
              <h2>Banner here...</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="environmental_section">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div>
              <img className="img-fluid" src="images/envirn_img1.png" alt="" />
            </div>
          </div>
          <div className="col-5">
            <div className="env_right">
              <div>
                <h1>Environmental <br />Protection Revolution</h1>
                <p>A leading technology company has announced its latest innovation in waste management systems
                  that
                  reduces the amount of waste entering landfills by as much as 50%. This new system uses
                  advanced
                  processing technology to recycle various types of waste that were previously difficult to
                  recycle.
                </p>
                <p>According to a statement from the company's CEO, this technology is a historical milestone in
                  environmental protection efforts. By utilizing more efficient recycling processes.</p>
              </div>
              <div>
                <p className="er_p">Sumber: Media.com , September, 05 2023</p>
              </div>
            </div>
            <h1 />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="env_highlights">
              <div className="row">
                <div className="col-6">
                  <div className="env_h_item border1">
                    <div>
                      <img className="img-fluid" src="images/env_high1.png" alt="" />
                    </div>
                    <div>
                      <h3>British Government Agrees Final Trade Deal</h3>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="env_h_item">
                    <div>
                      <img className="img-fluid" src="images/env_high2.png" alt="" />
                    </div>
                    <div>
                      <h3>Leading Women Podcast Highlights Women's</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ads_slides_section">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="as_item">
              <div>
                <img className="img-fluid" src="images/ads_s1.png" alt="" />
              </div>
              <div>
                <h6>Advertisement goes here... Ads goes here...</h6>
                <div className="lns_specs">
                  <p>World news</p>
                  <p className="dots">•</p>
                  <p className="light_grey">12 June 0000, 12.15 WIB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="as_item">
              <div>
                <img className="img-fluid" src="images/ads_s1.png" alt="" />
              </div>
              <div>
                <h6>Advertisement goes here... Ads goes here...</h6>
                <div className="lns_specs">
                  <p>World news</p>
                  <p className="dots">•</p>
                  <p className="light_grey">12 June 0000, 12.15 WIB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="as_item">
              <div>
                <img className="img-fluid" src="images/ads_s1.png" alt="" />
              </div>
              <div>
                <h6>Advertisement goes here... Ads goes here...</h6>
                <div className="lns_specs">
                  <p>World news</p>
                  <p className="dots">•</p>
                  <p className="light_grey">12 June 0000, 12.15 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="footer-sec">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="foot-inner ft">
              <div className="logo-foot">
                <img className="img-fluid" src="images/logo.png" alt="" />
              </div>
              <h5>Our Contact</h5>
              <ul>
                <li><a href="javascript:;">
                    <span><i className="fa-solid fa-phone" /></span>123 456 7890
                  </a>
                </li>
                <li><a href="javascript:;">
                    <span><i className="fa-solid fa-envelope" /></span>info@candorium.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="foot-inner">
              <div className="row">
                <div className="col-1" />
                <div className="col-5">
                  <h5>Quick Links</h5>
                  <ul>
                    <li><a href="javascript:;"> About Us</a></li>
                    <li><a href="javascript:;"> Contact</a></li>
                    <li><a href="javascript:;"> Privacy policy</a></li>
                    <li><a href="javascript:;"> Subcription</a></li>
                  </ul>
                </div>
                <div className="col-1" />
                <div className="col-5">
                  <h5>Categories</h5>
                  <ul>
                    <li><a href="javascript:;"> USinMinutes</a></li>
                    <li><a href="javascript:;"> Bussiness</a></li>
                    <li><a href="javascript:;"> Economy</a></li>
                    <li><a href="javascript:;"> Industry</a></li>
                    <li><a href="javascript:;"> Politics</a></li>
                    <li><a href="javascript:;"> Trending</a></li>
                    <li><a href="javascript:;"> Term Of Use</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="foot-inner ft">
              <h5>Our Offices</h5>
              <ul>
                <li>
                  <h5 className="ft_last">Califonia - Costa Mesa</h5>
                </li>
                <li className="ft_last_">
                  555 Anton Blvd, Costa Mesa,<br />
                  CA 92626
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>   


  );
}

export default App;
