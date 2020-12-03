import React from 'react';
import ShowTeams from '../commons/showTeams/showTeams';
import { data } from '../utils/utils'
import './home.scss'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            indexTeam: 0,
        }
    }


    render(){
        const {indexTeam} = this.state

        const handleNextTeam = () => {
            this.setState({indexTeam: indexTeam+1})
        }

        const handlePrevTeam = () => {
            this.setState({indexTeam: indexTeam-1})
        }

        return(
            <div className="home">
                {data && data.map((team, index) => {
                    if(index ===indexTeam){
                        return <ShowTeams key={team.idTeam} name={team.strTeam} badge={team.strTeamBadge}></ShowTeams>
                    }
                    return null
                })}
                <div className="home__button-wrapper">
                    <button className="home__button" disabled={indexTeam===0} onClick={handlePrevTeam}>Anterior</button>
                    <button className="home__button" disabled={data && indexTeam===data.length-1}onClick={handleNextTeam}>Siguiente</button>
                </div>
            </div>
        )
    }
}

export default Home
