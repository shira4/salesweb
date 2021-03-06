import * as React from "react";
import axios from "axios";
import Sale from "../Sale";

class Search extends React.Component {

    state = {
        text : "",
        sales: []
    }

    onTextChange = (e) => {
        let text = e.target.value;
        this.setState({text : text})
    }

    search = () => {
        // axios request here
        axios.get("http://localhost:8989/get-search-results", {
            params: {
                text: this.state.text
            }
        }).then(response => {
            this.setState({sales: response.data})
        })
    }

    render() {
        return (

            <div style={{
                textAlign: "center", padding: "20px", marginLeft: "0px", marginRight: "30px",
                backgroundColor: "white", height: "auto", width: "100%",
                borderRadius: "10px", boxShadow: "5px 5px 5px grey"
            }}>
                <pre><h3 className="headline
                "> SEARCH PAGE  </h3> </pre>


                <div style={{marginBottom: "20px"}}>
                    <input style={{fontSize: "15px", margin: "20px"}} type={"text"} onChange={this.onTextChange}
                           placeholder={"Search..."} value={this.state.text}/>

                    <button className={"button"} disabled={this.state.text.length === 0} onClick={this.search}> Search</button>
                </div>

                <div style={{display: "flex", flexWrap: "wrap"}}>

                    {
                        this.state.sales.map(sale => {
                            return (
                                <Sale sale={sale} bool={true}/>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Search;