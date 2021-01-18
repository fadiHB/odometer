import React from "react";

import "./App.css";

function Header() {
  return <header className="App">This is a header</header>;
}


class FoodChoice2 extends React.Component {
  constructor() {
    super();
    this.state = {
      food: "0000",
    };
  }

  changeFood(n) {
    let num = Number(this.state.food) + n;
    if (num > 9999) {
      this.setState({ food: "0000" });
      return;
    }
    if (num < 10) {
      this.setState({ food: "000" + num });
      return;
    }
    if (num < 100) {
      this.setState({ food: "00" + num });
      return;
    }
    if (num < 1000) {
      this.setState({ food: "0" + num });
      return;
    }
    this.setState({ food: num });
  }

  render() {
    return (
      <>
        <button onClick={() => this.changeFood(1)}>add 1</button>
        <button onClick={() => this.changeFood(10)}>add 10</button>
        <button onClick={() => this.changeFood(100)}>add 100</button>
        <button onClick={() => this.changeFood(1000)}>add 1000</button>

        <div className="food">
          <h2>Odometer</h2>
          <h3>{this.state.food}</h3>
        </div>
      </>
    );
  }
}

function Main() {
  return (
    <main>
      <div className="App">
        {/* <h1>Hello {courseName}</h1> */}
        <h1>Hello {getCourseName()}</h1>
        <p>Welcome to our awesome React world!!! </p>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="App">
      <p>Copy Right @</p>
      <span>ASAC</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <FoodChoice2 />
      <Footer />
    </>
  );
}

function getCourseName() {
  return "401 Python";
}

export default App;
