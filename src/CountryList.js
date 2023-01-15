import React from 'react';
import {get} from './Rest'
import Table from 'react-bootstrap/Table';

export default class CountryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            filterText: ""
        }
    }

    componentDidMount() {
        this.getCountries()
    }

    getCountries = () => {
        get("all").then((data) => {
            this.setState({
                countryList: data
            })
        }).catch(() => {
        });
    };

    startSearch = (event) => {
        this.setState({
            filterText: event.target.value
        })
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Country</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"
                                   onChange={this.startSearch}></input>
                        </div>
                    </div>
                </nav>
                <div>
                    {this.state.countryList.length > 0 &&
                        <div>
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>Flag</th>
                                    <th>Name</th>
                                    <th>Region</th>
                                    <th>Population</th>
                                    <th>Languages</th>

                                </tr>
                                </thead>
                                <tbody>

                                {this.state.countryList.filter((e) => e.name.official.toLowerCase().includes(this.state.filterText.toLowerCase())).map((value, index) => {
                                    return <tr>
                                        <td>
                                            <img src={value.flags.png} className="flag" alt="flag"/>
                                        </td>
                                        <td>{value.name.official}</td>
                                        <td>{value.region}</td>
                                        <td>{value.population}</td>
                                        <td>
                                            {value.languages != null &&
                                                <ul>
                                                    {Object.keys(value.languages).map(key => {
                                                        return <li>{value.languages[key]}</li>
                                                    })
                                                    }

                                                </ul>}
                                        </td>

                                    </tr>
                                })}
                                </tbody>
                            </Table>
                        </div>
                    }
                </div>
            </div>
        )

    }
}