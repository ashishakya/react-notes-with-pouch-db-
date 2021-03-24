import './App.css';
import {useState} from "react";
import Dashboard from "./pages/Dashboard";
import NoteDetail from "./pages/NoteDetail";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
    const [notes, setNotes] = useState([
        {_id: 1, title: "First note", body: "this is body of my first note", updated_at: new Date()},
        {_id: 2, title: "Second note", body: "this is body of my Second note", updated_at: new Date()}
    ])
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Route exact path="/" component={() => <Dashboard notes={notes}/>}/>
                    <Route exact path="/notes/:id" component={(props)=><NoteDetail {...props} note={notes[props.match.params.id - 1]}/>}/>
                </div>
            </div>
        </Router>
    );
}

