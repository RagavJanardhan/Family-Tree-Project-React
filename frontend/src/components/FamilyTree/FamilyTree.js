import React from "react";
import f3 from "family-chart"; // npm install family-chart@0.2.1 or yarn add family-chart@0.2.1
import { Button, Box } from "@mui/material";
import "./FamilyTrees.css";
export default class FamilyTree extends React.Component {
  cont = React.createRef();
  f3Chart = null; // Declare f3Chart at the class level

  componentDidMount() {
    if (!this.cont.current) return;

    // Fetch the family tree data from the backend
    fetch("/family-data")
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => this.create(data))
      .catch((error) => console.error("Error fetching family tree data:", error));
  }

  formatAgeOrAgeAtDeath = (birthday, deathDate) => {
    if (!birthday) return "Age Unknown";
    const birthDate = new Date(birthday);
    const death = deathDate ? new Date(deathDate) : new Date();
    const ageAtDeath = Math.floor(
      (death - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
    );
    return deathDate
      ? `${ageAtDeath} years at death`
      : `${ageAtDeath} years old`;
  };

  formatBirthDeathDates = (birthday, deathDate) => {
    if (!birthday) return "Birthdate Unknown";

    const birth = new Date(`${birthday}T00:00:00`);
    const birthFormatted = birth.toLocaleDateString();

    if (!deathDate || deathDate === "unknown") {
      return `Born: ${birthFormatted}`;
    }

    const death = new Date(`${deathDate}T00:00:00`);
    const deathFormatted = death.toLocaleDateString();

    return `Born: ${birthFormatted} - Died: ${deathFormatted}`;
  };

  create = (data) => {
    this.f3Chart = f3
      .createChart("#FamilyChart", data)
      .setTransitionTime(1000)
      .setCardXSpacing(280)
      .setCardYSpacing(150)
      .setOrientationVertical()
      .setSingleParentEmptyCard(true, { label: "ADD" });

    const card_display = [
      (d) => `${d.data["first name"]} ${d.data["last name"]}`,
      (d) =>
        this.formatAgeOrAgeAtDeath(d.data["birthday"], d.data["death date"]),
      (d) =>
        this.formatBirthDeathDates(d.data["birthday"], d.data["death date"]),
    ];

    const f3Card = this.f3Chart
      .setCard(f3.CardHtml)
      .setMiniTree(true)
      .setStyle("imageRect")
      .setOnHoverPathToMain()
      .setCardDim({ width: 250, height: 100 })
      .setCardDisplay(card_display);

    const f3EditTree = this.f3Chart
      .editTree()
      .fixed(true)
      .setFields([
        { type: "text", label: "First Name", id: "first name" },
        { type: "text", label: "Last Name", id: "last name" },
        { type: "text", label: "Birthday (YYYY-MM-DD)", id: "birthday" },
        { type: "text", label: "Death Date (YYYY-MM-DD)", id: "death date" },
        { type: "text", label: "Avatar URL", id: "avatar" },
      ])
      .setEditFirst(false);

    f3EditTree.setEdit();

    f3Card.setOnCardClick((e, d) => {
      f3EditTree.open(d);
      if (f3EditTree.isAddingRelative()) return;
      f3Card.onCardClickDefault(e, d);
    });

    this.f3Chart.updateTree({ initial: true });
    f3EditTree.open(this.f3Chart.getMainDatum());
    this.f3Chart.updateTree({ initial: true });

    console.log("f3Chart initialized:", this.f3Chart); // Debug to confirm initialization
  };

  handleDownloadButton = () => {
    // Check if the chart is initialized
    if (!this.f3Chart) {
      console.error("f3Chart is not initialized.");
      alert("Family tree chart is not ready yet.");
      return;
    }
  
    // Get the updated family tree data
    const updatedData = this.f3Chart.getDataJson();

    if (!updatedData) {
      console.error("No data available to save.");
      alert("No data available to save.");
      return;
    }
  
    console.log("Family tree data to save:", updatedData);
  
    // Create a Blob object from the data, specifying UTF-8 encoding
    const blob = new Blob([updatedData], { type: "application/json;charset=utf-8" });
  
    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = "family-tree.json";  // Name of the file to download
  
    // Append link to body, trigger download, and then remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // Revoke the object URL to release memory
    URL.revokeObjectURL(url);
  
    console.log("Family tree data downloaded successfully!");
  };  

  handleSaveButton = async () => {
    // Check if the chart is initialized
    if (!this.f3Chart) {
      console.error("f3Chart is not initialized.");
      alert("Family tree chart is not ready yet.");
      return;
    }
  
    // Get the updated family tree data
    const updatedData = this.f3Chart.getDataJson();
  
    if (!updatedData) {
      console.error("No data available to save.");
      alert("No data available to save.");
      return;
    }
  
    console.log("Family tree data to save:", updatedData);
  
    try {
      // Send a POST request to the backend with the updated family data
      const response = await fetch("/save-family-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: updatedData, // Send the JSON data
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(result.message); // Notify the user of success
      } else {
        const error = await response.json();
        console.error("Error saving family tree data:", error);
        alert("Failed to save family tree data.");
      }
    } catch (error) {
      console.error("Error saving family tree data:", error);
      alert("An error occurred while saving family tree data.");
    }
  };

  render() {    
    const { theme } = this.props; // Access the theme from props
    return (
      <div>
        <div className="f3 f3-cont" id="FamilyChart" ref={this.cont}></div>
        
        {/* Buttons side by side */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 2, // Spacing between buttons
            marginTop: 2 // Margin above the button container
          }}
        >
          {/* Save Changes Button */}
          <Button 
            variant="outlined" 
            onClick={() => {
              this.handleSaveButton();  // Call the save handler
            }}
            sx={{
              color: theme.palette.auxilary.redText, // Text color
              backgroundColor: 'rgba(0, 0, 0, 0)',
              '&:hover': {
                backgroundColor: theme.palette.auxilary.redBackground, // Darker shade on hover
                borderColor: theme.palette.auxilary.redText, // Use primary color for the border
              },
            }}
          >
            Save Changes
          </Button>

          {/* Download Data JSON Button */}
          <Button 
            variant="outlined" 
            onClick={() => {
              this.handleDownloadButton();  // Call the save handler
            }}
            sx={{
              color: theme.palette.auxilary.greenText,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              '&:hover': {
                backgroundColor: theme.palette.auxilary.greenBackground, // Darker shade on hover
                borderColor: theme.palette.auxilary.greenText, // Use primary color for the border
              },
            }}
          >
            Download Data JSON
          </Button>
        </Box>
      </div>
    );
  }
}
