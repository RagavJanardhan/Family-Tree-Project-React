
import React from "react";
import f3 from 'family-chart';  // npm install family-chart@0.2.1 or yarn add family-chart@0.2.1
//import 'family-chart/styles/family-chart.css';
import '../styles/familyTree.css';


export default class FamilyTree extends React.Component {
  cont = React.createRef();

  componentDidMount() {
    if (!this.cont.current) return;
    
    create(data())

    // Format Age or Age at Death
    function formatAgeOrAgeAtDeath(birthday, deathDate) {
      if (!birthday) return "Age Unknown"; // If no birth date is provided, return "Age Unknown"
      const birthDate = new Date(birthday);
      const death = deathDate ? new Date(deathDate) : new Date();
      const ageAtDeath = Math.floor((death - birthDate) / (365.25 * 24 * 60 * 60 * 1000));  // in years
      return deathDate ? `${ageAtDeath} years at death` : `${ageAtDeath} years old`;
    }

    // Format Birth and Death Dates
    function formatBirthDeathDates(birthday, deathDate) {
      if (!birthday) return "Birthdate Unknown"; // If no birth date is provided, return "Birthdate Unknown"
      
      const birth = new Date(`${birthday}T00:00:00`);
      const birthFormatted = birth.toLocaleDateString();
      
      if (!deathDate || deathDate === "unknown") {
        return `Born: ${birthFormatted}`; // If no death date is provided or it is "unknown", return only the birth date
      }

      const death = new Date(`${deathDate}T00:00:00`);
      const deathFormatted = death.toLocaleDateString();
      
      return `Born: ${birthFormatted} - Died: ${deathFormatted}`; // Return both birth and death dates
    }

    function create(data) {
      console.log("Here")
      const f3Chart = f3.createChart('#FamilyChart', data)
        .setTransitionTime(1000)
        .setCardXSpacing(250)
        .setCardYSpacing(150)
        .setOrientationVertical()
        .setSingleParentEmptyCard(true, {label: 'ADD'})

      const card_display = [
        // Combine first name and last name into a single field
        d => `${d.data["first name"]} ${d.data["last name"]}`,
        
        // Format birthday and death date into an age or age at death
        d => formatAgeOrAgeAtDeath(d.data["birthday"], d.data["death date"]),
        
        // Format and display birth and death dates
        d => formatBirthDeathDates(d.data["birthday"], d.data["death date"]),
      ];
    
      const f3Card = f3Chart.setCard(f3.CardHtml)
        //.setCardDisplay([["first name","last name"],["birthday"],["death date"]])
        .setCardDim({})
        .setMiniTree(true)
        .setStyle('imageRect')
        .setOnHoverPathToMain()
        .setCardDisplay(card_display);

    
      const f3EditTree = f3Chart.editTree()
        .fixed(true)
        .setFields([
          { type: "text", label: "First Name", id: "first name" },
          { type: "text", label: "Last Name", id: "last name" },
          { type: "text", label: "Birthday (YYYY-MM-DD)", id: "birthday" },
          { type: "text", label: "Death Date (YYYY-MM-DD)", id: "death date" },
          { type: "text", label: "Avatar URL", id: "avatar" }
        ])
        
        .setEditFirst(false)
      
      f3EditTree.setEdit()
      
      console.log(f3EditTree.fields);

      f3Card.setOnCardClick((e, d) => {
        f3EditTree.open(d)
        if (f3EditTree.isAddingRelative()) return
        f3Card.onCardClickDefault(e, d)
      })
    
      f3Chart.updateTree({initial: true})
      f3EditTree.open(f3Chart.getMainDatum())
    
      f3Chart.updateTree({initial: true})
    }
    
    function data() {
      return [
        {
          "id": "0",
          "rels": {},
          "data": {
            "first name": "Name",
            "last name": "Surname",
            "birthday": "2005-12-02",
            "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg",
            "gender": "M",
            "death date": ""  
          }
        }
      ]
    }

  }

  render() {
    return <div className="f3 f3-cont" id="FamilyChart" ref={this.cont}></div>;
  }
}
