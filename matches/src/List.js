import React, { Component } from 'react';

class List extends Component{

    constructor(props){
        super(props);

        this.state = {
            list: []
        }
        console.log("OK");
    }

    componentDidMount(){
        fetch('http://localhost:4000/matches/next-dates').then(response => {
            response.json().then(res =>{
                this.setState({
                    list: res.matches
                });
                //console.log(res.matches)
                console.log(this.state.list)
            }).catch(err => console.log(err))
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div className='container'>
                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th className='text-center'>Home Team</th>
                            <th className='text-center'>Away Team</th>
                            <th className='text-center'>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((item) => (
                            <tr>
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
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;