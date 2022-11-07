import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Statement = () => {
  return (<>
    <Header/>
    <div className="title">Statement</div>
    <div className="form">
        <form>
          <div className="input-container">
            <label>Customer Name </label>
            <label>First_Name Last_Name </label>
          </div>

          <div className="input-container">
            <label>Select the transaction </label>
            <input type="text" name="type" required /> 
          </div>

          <div className="input-container">
            <label>Transaction period from </label>
            <input type="text" name="type" required /> 
          </div>

          <div className="input-container">
            <label>Transaction period to </label>
            <input type="text" name="type" required /> 
          </div>

          <div className="button-container">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    <Footer/>
    </>);
  };
  
  export default Statement;
