import * as React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Shops extends React.Component {

    state = {
        shops : [],

    }

    // get all shops
    componentDidMount() {
        axios.get("http://localhost:8989/get-shops")
            .then(response => {
                this.setState({shops: response.data})
            })
    }

    render() {
        return (

            <div style={{textAlign:"center", padding:"20px", marginRight:"30px",
                backgroundColor:"white", height:"auto", width:"100%",
                borderRadius:"10px", boxShadow:"5px 5px 5px grey"}}>
                <pre><h3 className="headline"> SHOPS PAGE  </h3> </pre>

                <div style={{  display:"flex", flexWrap:"wrap"}}>


                    {
                        this.state.shops.map(shop => {
                            return (

                                <div style={{padding: "20px", margin:"20px" , backgroundColor:"#f3ebf6", borderRadius:"15px"}}>
                                    <img
                                        src= {shop.imgSrc}
                                        alt="new"
                                        style={{blockSize:"100px"}}
                                    />
                                    <h2  className={"shopName"}>{shop.name} </h2>
                                    <Link to={"/shops/" + shop.id} style={{textDecoration:"none"}}>
                                        <h3> See all our sales  </h3>
                                    </Link>
                                </div>
                            )
                        })

                    }
                </div>

            </div>

        );
    }
}

export default Shops;