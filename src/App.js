import './App.css';
import {useState} from "react";
import Dashboard from "./pages/Dashboard";

export default function App() {
    const [notes, setNotes] = useState([
        { _id: 1, title: "First note", body: "this is body of my first note", updated_at: new Date()},
        { _id: 2, title: "Second note", body: "this is body of my Second note", updated_at: new Date()}
    ])
    return (
        <div className="App">
            <Dashboard notes={notes}/>
        </div>
    );
}

