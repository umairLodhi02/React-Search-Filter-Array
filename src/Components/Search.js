import React, { useState } from "react";
import { STUDENTS } from "./../studentsList";
import ResidentsList from "./ResidentsList";
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function Search({ stdData, handleChange, checkValidity }) {
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            name="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            value={stdData.studentName}
            onChange={handleChange}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            name="joiningDate"
            className="mr-30 mt-10"
            value={stdData.joiningDate}
            onChange={handleChange}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={checkValidity}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
