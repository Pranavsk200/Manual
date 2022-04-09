import React, { Component } from 'react'

export default class User extends Component {

    state = {
        users: []
    };

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            this.setState({
                users: res
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.users.map(item => {
                        return (
                            <div className="col-md-4 col-sm-6" key={item.id} >
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h2 className="panel-title"> {item.name} </h2>
                                    </div>
                                    <div className="panel-body">
                                        <p>Username <span className="text-info pull-right"> {item.username} </span></p>
                                        <p>Email <span className="text-info pull-right"> {item.email} </span></p>
                                        <p>Address</p>
                                        <address>
                                            Street <span className="pull-right"> {item.address.street} </span><br/>
                                            Suite <span className="pull-right"> {item.address.suite} </span><br/>
                                            City <span className="pull-right"> {item.address.city} </span><br/>
                                            Zipcode <span className="pull-right"> {item.address.zipcode} </span><br/>
                                            Latitude <span className="pull-right"> {item.address.geo.lat} </span><br/>
                                            Longitude <span className="pull-right"> {item.address.geo.lng} </span><br/>
                                        </address>
                                         <p>Phone <span className="text-info pull-right"> {item.phone} </span></p>
                                         <p>Website <span className="text-info pull-right"> {item.website} </span></p>
                                         <p>Company name <span className="text-info pull-right"> {item.company.name} </span></p>
                                         <p>Catch Phrase <span className="text-info pull-right"> {item.company.catchPhrase} </span></p>
                                         <p>BS <span className="text-info pull-right"> {item.company.bs} </span></p>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

