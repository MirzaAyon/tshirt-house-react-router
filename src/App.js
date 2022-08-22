
import './App.css';
import Home from './comonents/Home/Home';
import Header from './comonents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './comonents/OrderReview/OrderReview';
import Grandpa from './comonents/GrandPa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}>

        </Route>

      </Routes>
    </div>
  );
}

export default App;


/*quiz
5 const array = [“beautiful” , “nice”, “awesome”, ”beauty” ]
const result =  array.includes(“bea”)
What will be the output of the result?
ans: You have selected "[ “beautiful” , “beauty” ]" but correct answer is "false".

6
What is the correct way to delete the data from the above state?(think carefully)

const [data , setData] = useState( [ {name: “Chokina , tui amk bhule geso
  ans: You have selected "setData(false)" but correct answer is "setData( [] )".


  8
  const admin = false;
   { admin ? </ Admin> : </User> }
What do you think which one will be rendered to the UI?
ans:You have selected "</Admin>" but correct answer is "</User>".



*/


// to do list 
// ১. সিম্পল রাউট কিভাবে সেট করে। জাস্ট পাঁচটা স্টেপ দিয়ে 

// ২. Not Found বা ৪০৪ টাইপের রাউট কিভাবে সেট করে 

// ৩. ডায়নামিক রাউট কিভাবে সেট করে। কিভাবে ডায়নামিক রাউট এর পাথ সেট করে 

// ৪. কম্পোনেন্ট এর ভিতরে গিয়ে কিভাবে ডাইনামিক রাউট এর রাউট প্যারামিটার থেকে ভ্যালু নিয়ে আসা যায়। তখন কোন হুক ইউজ করতে হয় এবং সেটা দিয়ে ডাইনামিক url তৈরি করে কোন ডাটা লোড করার থাকলে সেটা কিভাবে করা যায়। 

// ৫. বাটনে ইভেন্ট হ্যান্ডলার দিয়ে কিভাবে ক্লিক করেলে রাউট সেট করে যায় 
