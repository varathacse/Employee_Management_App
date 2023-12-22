import React, { useState } from "react";
import ListSearchEmployee from "./ListSearchEmployee";

const SearchItem = () => {
  const [search, setSearch] = useState("");
  const [value, setvalue] = useState("id");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  function myFunction() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  }

  const changeValue1 = () => {
    setvalue("id");
    let a = document.getElementById("btn");
    a.textContent = "By Id";
  };
  const changeValue2 = () => {
    setvalue("firstName");
    let a = document.getElementById("btn");
    a.textContent = "By Name";
  };
  const changeValue3 = () => {
    setvalue("dept");
    let a = document.getElementById("btn");
    a.textContent = "By Department";
  };

  const changeValue4 = () => {
    setvalue("dob");
    let a = document.getElementById("btn");
    a.textContent = "By Dob";
  };
  const changeValue5 = () => {
    setvalue("city");
    let a = document.getElementById("btn");
    a.textContent = "By City";
  };
  const changeValue6 = () => {
    setvalue("emailId");
    let a = document.getElementById("btn");
    a.textContent = "By EmailId";
  };
  const changeValue7 = () => {
    setvalue("phone");
    let a = document.getElementById("btn");
    a.textContent = "By Phone";
  };

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <br></br>
        <br></br> <br></br>
        <br></br>
        <input
          id="search"
          className="inp"
          type="text"
          role="searchbox"
          placeholder="Search Items"
          value={search}
          onChange={handleSearchChange}
        />
        <div className="dropdown">
          <button id="btn" onClick={myFunction} className="dropbtn">
            By Id
          </button>
          <div id="myDropdown" className="dropdown-content">
            <ul>
              <li onClick={changeValue1}>By Id</li>
              <li onClick={changeValue2}>By Name </li>
              <li onClick={changeValue3}>By Department</li>
              <li onClick={changeValue4}>By DOB</li>
              <li onClick={changeValue5}>By City </li>
              <li onClick={changeValue6}>By Email Id</li>
              <li onClick={changeValue7}>By Phone</li>
            </ul>
          </div>
        </div>
      </form>

      <div>
        <ListSearchEmployee search={search} value={value} />
      </div>
    </div>
  );
};

export default SearchItem;
