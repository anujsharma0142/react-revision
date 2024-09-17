import './App.css';
import ForwardRefExample from './components/forwardRef/ForwardRefExample';
// import UseRefExample from './components/useRef/UseRefExample';
// import UseMemoExample from './components/useMemo/UseMemoExample';
// import HomeContainer from './components/containers/HomeContainer';

// import UserOne from './components/reduxPractice/UserOne'
// import ParentFile from './components/sendDataChildToParent/ParentFile';
// import ReUseComponent from './components/reUseComponentExample/ReUseComponent';

// import NestedListExample from './components/nestedList/NestedListExample';
// import { Example } from './components/handleArrayWithList/Example';
// import ColorCss from './components/cssFolder/ColorCss';
// import Form from './components/basicForm/HtmlForm';
// import Members from './components/childComponent/Members';
// import HideElements from './components/hideElements/HideElements';
// import ExampleOne from './components/hooks/useEffectHooks/ExampleOne';
// import SpecificHooks from './components/hooksExampleSpecific/SpecificHooks';
// import InputBox from './components/inputBox/InputBox';
// import User from './components/parentComponent/User';
// import { useEffect } from 'react';

function App() {

  // function getData(){
  //   alert("alert from app");
  // }

  // useEffect(()=>{
  //   // alert("hello")
  //   console.log("useEffect");

    
  // })

  return (
    <div className="App">
      {/* <InputBox/>
      <HideElements/>
      <Form/> */}
      {/* <User data={getData}/>
      <Members data={getData}/> */}

      {/* <ExampleOne/> */}
      {/* <SpecificHooks/> */}

      {/* <ColorCss/> */}

      {/* <Example/> */}
      {/* <NestedListExample/> */}
      
      {/* <ReUseComponent/> */}
      {/* <ParentFile /> */}
      {/* <UserOne data={{name:"anujsharma", age:"26" }}/> */}
      {/* <HomeContainer/> */}
      {/* <UseMemoExample/> */}
      {/* <UseRefExample/> */}
      <ForwardRefExample/>
    
    </div>
  );
}

export default App;
