import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h1>View Users</h1>
                        </center>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone No.</th>
                                    <th scope="col">Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Ram</td>
                                    <td>Amit Garg</td>
                                    <td>@gmsail.com</td>
                                    <td>9936274742</td>
                                    <td>www.Ram.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>2014</td>
                                    <td>9936274742</td>
                                    <td>www.Jacob.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>2015</td>
                                    <td>9936274742</td>
                                    <td>www.Larry.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>2020</td>
                                    <td>9936274742</td>
                                    <td>www.Jacob.com</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll