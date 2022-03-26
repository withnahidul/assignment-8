import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <h2>1. How Does React Works?</h2>
      <p>
        React one kind of a javaScript library for user interfaces. There are
        three main components (MVC): Model- manage the data and rules of the
        application(React component). View-the output, in React applications,
        the browser's DOM (rander()) Controller- take user input and converts it
        into commands for the Model or view layers (click events or api
        requests). It use virtul DOM.extemly fast to the browser DOM. Create
        completely from scartch on every setState or dispatch.
      </p>
      <h2>2. How useStste works?</h2>
      <p>
        its mainly use for Distructring data.In useState perameter we can pass
        diffrent value, There are some steps of usestate: Declare the state
        first. Showing the state in Ui. Set an event handler. Use onClick and
        make connection Btween Event Handler.
      </p>

      <h2>3. What are the Diffreence Between Props and State?</h2>
      <p>
        Props: Its use for sending data. Props are immutable. you can pass
        properties from parents components. Determine the view upon creation ,
        and then they remain static. State: Without state your react application
        is just a glorified static template. State are mutable. You vant define
        states in the components itselfs. The state is set and update by the
        object. State: Without state your react application is just a glorified
        static template. State are mutable. You vant define states in the
        components itselfs. The state is set and update by the object.
      </p>
    </div>
  );
};
export default Faq;
