import './styles.css'
import Header from './components/Header'
import MyForm from './components/MyForm'

/*
/ The App component contains the main and home page of our app to
/ be rendered. Because this was not a large-scale project with
/ multiple pages, I've decided to render everything in App.js.
*/
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <section className="pageFlow">

          <section className="introBox">
            <hr className="line top"/>

            <label className="introContent">
              <p className="textGreen">Greetings! My name is</p>
              <h1 className="chadley">Chadley.</h1>
              <p className="chadleyDescription">I am an intelligent machine designed to fufill your needs.</p>
            </label>

            <hr className="line bottom"/>
          </section> {/* End of introBox */}

          <MyForm />
        </section> {/* End of pageFlow */}
      </div> {/* End of container */}
    </>
  );
}

export default App;
