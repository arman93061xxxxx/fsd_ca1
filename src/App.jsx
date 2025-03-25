import {TestimonialCard} from './components/TestimonialCard'

import './App.css'

function App() {
const data = [{
  CustomerName: "Emily Watson",
  ReviewText: "This service was amazing! highly recommended"
},
{
CustomerName: "arman singh",
ReviewText: "he is a good person !!"
}]

  return (
    <>
    <TestimonialCard data = {data[0]}/>
    <TestimonialCard data = {data[1]}/>

    </>
  )
}

export default App
