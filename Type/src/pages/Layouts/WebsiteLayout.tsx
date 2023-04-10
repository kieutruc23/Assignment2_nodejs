import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const WebsiteLayout = () => {
    return (
        <div>
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Nwe</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Page</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">FAQ</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 " role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark px-5" placeholder="Search..." aria-label="Search" />
                        </form>
                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2"><Link to={'/login'}>Login</Link></button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="bg-light text-center text-white">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter" /></a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google" /></a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram" /></a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github" /></a>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    )
}

export default WebsiteLayout
