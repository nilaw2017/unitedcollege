import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './top.container.css'

class TopContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className="container position-sticky">
                    <section className="row top-container top-contact justify-content-between">
                        <div className="col-md-6 d-flex justify-content-start align-items-center">
                            <div className="p-2"><i className="fa fa-phone" aria-hidden="true"></i> 9841306885</div>
                            <div>|</div>
                            <div className="p-2"><i className="fa fa-envelope" aria-hidden="true"></i> ucollege@united.edu.np</div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end text-end">
                            <span className="p-2"><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
                            <span className="p-2"><i className="fa fa-instagram" aria-hidden="true"></i></span>
                            <span className="p-2"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                        </div>
                    </section>
                    <hr className="container"></hr>
                    <section className="d-md-flex d-none justify-content-between align-items-center">
                        <img src="https://united.edu.np/college/wp-content/uploads/2019/02/college.png" alt="United College" width="160" height="60"></img>

                        <div className="d-flex">
                            <div className="top-menu p-2 about-dropdown">
                                About us<i className="fa fa-angle-down menu-arrow-icon" aria-hidden="true"></i>
                                <span className="border-extension">
                                    <div>Senior Management</div>
                                    <div>Principal's Message</div>
                                    <div>Teaching Staff</div>
                                    <div>Support Staff</div>
                                </span>
                            </div>
                            <div className="top-menu p-2 academics-dropdown">
                                Academics<i className="fa fa-angle-down menu-arrow-icon" aria-hidden="true"></i>
                                <span className="border-extension">
                                    <div>Undergraduate Courses</div>
                                    <div>Postgraduate Courses</div>
                                    <div>Fees</div>
                                    <div>Admission Document</div>
                                    <div>Teaching and Learning</div>
                                </span>
                            </div>
                            <div className="top-menu p-2 students-dropdown">
                                Students<i className="fa fa-angle-down menu-arrow-icon" aria-hidden="true"></i>
                                <span className="border-extension">
                                    <div>Disciplinary System</div>
                                    <div>Directive for the Operation of Online Class</div>
                                    <div>Student Life</div>
                                    <div>Career and Opportunities</div>
                                    <div>Health and Well being</div>
                                </span>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default TopContainer;