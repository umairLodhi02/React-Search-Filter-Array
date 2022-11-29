import React from "react";

function Error({ errorMsg }) {
  console.log(errorMsg);
  return (
    <>
      {errorMsg === "" ? null : (
        <div
          data-testid="errorMsg"
          className="alert error mt-20 slide-up-fade-in"
        >
          {errorMsg}
        </div>
      )}
    </>
  );
}

export default Error;
