import React from 'react';
import axios from 'axios'
import SwitchButton from './components/SwitchButton';

export default class App extends React.Component{

  state = {
    billionaires: [],
    number: 0
  }

  async fetchBillionairs(){
    try {
      const billionaires = (await axios.get('https://v11v9.sse.codesandbox.io/billionaires')).data
      return billionaires
    }catch (err){
      console.error(err)
    }
  }

  async componentDidMount(){
    try{
      const billionaires = await this.fetchBillionairs()
      this.setState({
        billionaires: billionaires
      })
    }catch{
      console.log('error')
    }
    // componentDidMount(){
    // // fetch('https://v11v9.sse.codesandbox.io/billionaires')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((result) => this.setState({
    //     billionaires: result
    //   }))

      //มีแบบเต็ม-ย่อ
      // .then(response => response.json())
      // .then(result => console.log(result))
  }

  render(){
    return (
      <div>
        <h1>Top 20 of Billionaire in Thailand</h1>
        <ol>
          {this.state.billionaires.map((person) => {
              return (
                <div key={person.id} 
                  // style = {{
                  //   backgroundColor: 'blue'
                  // }}
                >
                    <li>
                    ʕ∙ჲ∙ʔ {person.name}
                    </li>
                    <ul>
                      <li>
                      💸 มูลค่า: {person.totalAsset} {person.assetUnit}
                      </li>
                      <li>
                      🏫 ธุรกิจ: {person.businessType}
                      </li>
                    </ul>
                    <br/>
                </div>
                               
              )
          })}
          </ol>
          <SwitchButton/>
      </div>
      )
  }
  
}        
      

