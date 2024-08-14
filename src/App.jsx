import './App.css'
import Grandpa from './Grandpa/Grandpa';
import ReuseableForm from './ReuseableForm/ReuseableForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StatefullForm from './Component/SimpleForm/StatefullForm'
// import HookForm from './HookForm/HookForm'
// import RefForm from './RefForm/RefForm'

function App() {
  const handleSignUpSubmit = data =>{
    console.log('sign up', data);
  }
  const handleUpdateProfile = data =>{
    console.log('sign In', data);
  }

return (
    <>
      
      <h1>Form Master</h1>

      <Grandpa></Grandpa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up form</h2>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Sign In'} handleSubmit={handleUpdateProfile} submitButtonText='Update'>
      <div>
          <h2>Sign In form</h2>
        </div>
      </ReuseableForm>
    </>
  )
}

export default App
