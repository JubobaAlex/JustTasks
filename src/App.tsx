import React, { useState } from 'react';
import './animation.css'
import './App.css';

function App() {

const [inputValue, setInputValue] = useState('');
  class DataReceiver {
    protected content : HTMLElement | null = null
    getValues() {
      this.content = document.createElement('p')
      this.content.textContent = inputValue
       return this
    }
  }
  class DataPrinter extends DataReceiver{
    
    showResults() {
       if (!this.content) return;
      const element_div = document.querySelector('.cont') as HTMLDivElement || null
      if(element_div) {
        element_div.prepend(this.content)
      }
      setInputValue('');
    }
  }

  function HandleClick() {
  
    const data_printer = new DataPrinter()
    
    
    data_printer.getValues().showResults()
  }

  return (
    <div className="App">

      <header>
        <ul>
          <li>JustTasks</li>
        </ul>
      </header>
      
      <main>

        <div className='text-main'>
          <h2>Создай свой список с нами прям щас <img src= '/list.png' /> </h2> 
        </div>

        <div className='input-container'>
          <div className='input-wrapper'>
            <input onChange={(e) => setInputValue(e.target.value)} className='input' type='text' />
          </div>
          <button onClick={HandleClick} className='save-btn'>Сохранить</button>
        </div>
        
        <div className='cont'>
        
        </div>

      </main>
    </div>
  );
}

export default App;
