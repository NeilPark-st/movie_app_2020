import React from 'react';

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if(location.state){
            const { title, year, poster, genres, summary} = location.state;
            return (
                <div style={{textAlign:"center"}}>
                    <h1>{title}</h1>
                    <h4>published in {year} </h4>
                    {
                        genres.map((genre, index) => {
                            <span key={index} style={{marginRight:"5px"}}>{genre}</span>
                        })
                    }
                    <img src={poster} alt={title} title={title} />
                    <br />
                    <div style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                        <span style={{width:"70%"}}>{summary}</span>
                    </div>
                </div>

           );
        } else {
            return null;
        }
    }
}

export default Detail;