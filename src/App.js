import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextFile from './Components/TextFile';
function App() {
  return (
    <>
      <Navbar name='Jatin' />
      <div className='container'>
        {/* <TextFile heading='Heyy enter here some text'/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
