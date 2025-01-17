import React from "react";

const Table = ({ list, handleOnDelete, switchTask }) => {
  const entryList = list.filter((item) => item.type === "entry");
  const badList = list.filter((item) => item.type === "bad");

  const SavedHours = badList.reduce((acc, item) => acc + +item.hours, 0);

  return (
    <div className="row mt-5">
      <div className="col-md text-center">
        <h3>Entry List</h3>
        <hr />
        <table className="table table-striped table-hover border shadow-lg">
          <tbody id="entryList">
            {entryList.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hours}</td>
                <td className="text-end">
                  <button
                    onClick={() => handleOnDelete(item.id)}
                    className="btn btn-danger"
                  >
                    Delete<i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    onClick={() => switchTask(item.id, "bad")}
                    className="btn btn-success"
                  >
                    Switch<i className="fa-solid fa-arrow-right"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col text-center">
        <h3>Bad List</h3>
        <hr />
        <table className="table table-striped table-hover border shadow-lg">
          <tbody id="badlist">
            {badList.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hours}</td>
                <td className="text-end">
                  <button
                    onClick={() => switchTask(item.id, "entry")}
                    className="btn btn-warning"
                  >
                    Switch <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    onClick={() => handleOnDelete(item.id)}
                    className="btn btn-danger"
                  >
                    Delete <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="alert alert-success">
          You could have saved <span id="savedhours">{SavedHours}</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
