import React from 'react';
import { Route, Link } from 'wouter';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { SearchResults } from './pages/SearchResults';
import { GifContextProvider } from './context/GifContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/" className="App-logo">Find your Gif</Link>
        <GifContextProvider>
          <Route 
            component={Home}
            path="/"
          />
          <Route 
            component={SearchResults}
            path="/search/:keyword" 
          />
          <Route
            component={Detail}
            path="/gif/:id"
          />
        </GifContextProvider>
      </section>
    </div>
  )
}

export default App;
