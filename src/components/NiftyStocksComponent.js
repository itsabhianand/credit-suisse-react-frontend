import React from "react";
import NiftyStocksService from "../services/NiftyStocksService";

class NiftyStocksComponent extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            stocks:[]
        };
    }
   
    componentDidMount(){
        NiftyStocksService.getStocks().then(response => {
            this.setState({ 
                stocks : response.data.data
            })
        });
    }

    render() {
         console.log(this.state.stocks);
        return(
          <div>
            <h1 className="text-center">NIFTY 50 STOCKS</h1>
             <table className="table table-striped">
               <thead>
                  <tr>
                      <td> FIGI </td>
                      <td> NAME </td>
                      <td> TICKER</td>
                      <td> EXCHANGECODE</td>
                      <td> COMPOSITEFIGI</td>
                      <td> SECURITYTYPE</td>
                      <td> MARKETSECTOR</td>
                  </tr>

               </thead>
                <tbody>
                   { 
                            this.state.stocks.map(
                              stock =>
                              <tr key = {stock.figi}>
                                  <td> {stock.figi} </td>
                                  <td> {stock.name} </td>
                                  <td> {stock.ticker} </td>
                                  <td> {stock.exchCode} </td>
                                  <td> {stock.compositeFIGI} </td>
                                  <td> {stock.securityType} </td>
                                  <td> {stock.marketSector} </td>
                                </tr>
                          )
                } 

                </tbody>
             </table>

          </div>

        )
    }
}

export default NiftyStocksComponent