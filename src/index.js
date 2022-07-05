import ReactDOM from "react-dom/client";

function Welcome(a){
    return <h1>Selamat datang {a.name} !</h1>
}

let user = "Nurul"

function App(){
    if(user)
        return <Welcome name="Nurul"/>
    else
        return <button>Login</button>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);