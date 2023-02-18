import React, { Component }  from 'react';

class Screening extends Component {

    constructor() {
        super();

        this.answers = [-1,-1,-1,-1,-1]

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
    }

    submitForm = () => {
        let baseURL = "";
        console.log("Pressed submit form " + this.handleChange1);
        let tracker = [0,0,0];

        for (let i = 0; i < 5; i++) {
            let target = this.answers[i]
            if (target !== -1)
                tracker[target] += 1;

            // Extra weight for self-determined learning type
            if (i === 4)
                tracker[target] += 1;
            
            if (i === 3 && target === -1)
                tracker[0] = 0;
        }

        let mapDict = {0: "VIS", 1: "AUD", 2: "SOC"};
        let maxInd = tracker.indexOf(Math.max(tracker[2],Math.max(tracker[0],tracker[1])));

        console.log("This is a "+ mapDict[maxInd] + " type of learner");

        // Log value into backend
        fetch(`${baseURL}/sessions`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "type": mapDict[maxInd]})
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
    }

    getAnswers() {
        return this.answers;
    }

    handleChange1(changeEvent) {
        console.log(this.getAnswers());
        this.answers[0] = changeEvent.target.value;
    }

    handleChange2(changeEvent) {
        this.answers[1] = changeEvent.target.value;
    }

    handleChange3(changeEvent) {
        this.answers[2] = changeEvent.target.value;
    }

    handleChange4(changeEvent) {
        this.answers[3] = changeEvent.target.value;
    }

    handleChange5(changeEvent) {
        this.answers[4] = changeEvent.target.value;
        console.log(this.answers);
    }

    render() {
        return (
            <div className="screening">
            <div className="screeningCard">
                <header>
                    <h1>Help us learn more about you!</h1>
                    <h3>Answer some quick questions to help us best tailor your learning experience.</h3>
                </header>
                
                <ol>
                    <li>When you are trying to remember information, do you typically create mental images or rely on written notes?
                        <br/> 
                        <form><input type="radio" name="q1ans" value="0" onChange={this.handleChange1}/> Mental Images &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="q1ans" value="-1" onChange={this.handleChange1}/> Written Notes</form>
                    </li>

                    <li>Do you tend to remember information best when you hear it spoken aloud or read it silently to yourself?
                        <br/> <input type="radio" name="q2ans" value="1" onChange={this.handleChange2}/> Spoken Aloud  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="-1" name="q2ans" onChange={this.handleChange2}/> Read to Self
                    </li>

                    <li>Do you prefer to learn through group discussions, lectures, or by working with a partner or in a team?
                        <br/> <input type="radio" name="q3ans" value="2" onChange={this.handleChange3}/> Group discussion  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="1" name="q3ans" onChange={this.handleChange3}/> Lecture &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="2" name="q3ans" onChange={this.handleChange3}/> Group work
                    </li>

                    <li>Do you find it helpful to draw visual aids (diagrams, charts, mindmaps) to help you understand new information?
                        <br/> <input type="radio" name="q4ans" value="0" onChange={this.handleChange4}/> Yes  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="-1" name="q4ans" onChange={this.handleChange4}/> No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>

                    <li>Do you tend to remember information best when you can associate it with a specific visual, auditory, or social experience?
                        <br/> <input type="radio" name="q5ans" value="0" onChange={this.handleChange5}/> Visual  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="1" name="q5ans" onChange={this.handleChange5}/> Auditory &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="2" name="q5ans" onChange={this.handleChange5}/> Social &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                </ol>

                <button onClick={this.submitForm}>Submit</button>
            </div>
        </div>
        );
    }

}

export default Screening;
