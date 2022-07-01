import React, { Component } from 'react';
import moment from 'moment';

class List extends Component{

    constructor(props){
        super(props);

        this.state = {
            list: [],
            competition: {}
        }
        console.log("OK");
    }

    componentDidMount(){
        fetch('http://localhost:4000/matches/next-dates').then(response => {
            response.json().then(res =>{
                this.setState({
                    list: res.matches,
                    competition:{
                        count: res.resultSet.count,
                        first_date: res.resultSet.first,
                        last_date: res.resultSet.last,
                        played: res.resultSet.played,
                        image: res.competition.emblem,
                        cname: res.competition.name,
                        type: res.competition.type
                    }
                });
            }).catch(err => console.log(err))
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div className='container'>

                <div className='card padding-10'>
                    <div className='row'>
                        <div className='col'>
                            Games: {this.state.competition.count}
                        </div>
                        <div className='col'>
                            First Date: {this.state.competition.first_date}
                        </div>
                        <div className='col'>
                            First Date: {this.state.competition.last_date}
                        </div>
                        <div className='col'>
                            Played: {this.state.competition.played}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col col-1'>
                            <img className='team-logo' src={this.state.competition.image}/>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    Competition: {this.state.competition.cname}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    Type: {this.state.competition.type}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th className='text-center'>Area</th>
                            <th className='text-center'>Date</th>
                            <th className='text-center'>Home Team</th>
                            <th className='text-center'>Away Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((item) => (
                            <tr>
                                <td className='text-center'>
                                    <img className='team-logo' src={item.area.flag}/>
                                    <br/>
                                    {item.area.name}
                                </td>
                                <td className='text-center'>{moment(item.utcDate, 'YYYY-MM-DD hh:mm').format('YYYY-MM-DD hh:mm A')}</td>
                                <td className='text-center'>
                                    <img className='team-logo' src={item.homeTeam.crest}/>
                                    <br/>
                                    {item.homeTeam.name}
                                </td>
                                <td className='text-center'>
                                    <img className='team-logo' src={item.awayTeam.crest}/>
                                    <br/>
                                    {item.awayTeam.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;