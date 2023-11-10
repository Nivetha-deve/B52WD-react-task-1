import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App(){
  const planDetails=[
    {
    Place:"FREE",
    price:"$0", 
    Users:"Single Users", 
    Storage:"5GB Storage",
    Projects:"Unlimited Public Projects",
    Access:"Community Acess",
    Projects1:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:"Free Subdomain",
    reports:"Monthly Status Reports",
  },                                                                                                                     
  {
    Place:"PLUS", 
    price:"$9", 
    Users:"5 Users",
    Storage:"50GB Storage", 
    Projects:"Unlimited Public Projects", 
    Access:"Community Acess",
    Projects1:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:"Free Subdomain",
    reports:"Monthly Status Reports",
  },
  {
    Place:"PRO", 
    price:"$49",
    Users:"Unlimited Users", 
    Storage:"150GB Storage", 
    Projects:"Unlimited Public Projects", 
    Access:"Community Acess",
    Projects1:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:" Unlimited Free Subdomain",
    reports:"Monthly Status Reports",
  },
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            planDetails.map((detail)=>{
              return<Card details={detail}></Card>
            })
          };
        </div>
      </div>
    </section>
  )}
  
export default App;
