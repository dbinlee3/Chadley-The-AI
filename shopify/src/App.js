import './styles.css'
import Header from './components/Header'
import MyForm from './components/MyForm'


function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="pageFlow">

          {/* Intro */}
          <div className="introBox">
            <hr className="line top"/>

            <div className="introContent">
              <p className="textGreen">Greetings! My name is</p>
              <h1 className="chadley">Chadley.</h1>
              <p className="chadleyDescription">I am an intelligent machine designed to fufull your needs.</p>
              
            </div>

            <hr className="line bottom"/>
          </div>

          <MyForm />





        </div>





      </div>
    </>
  );
}

export default App;
