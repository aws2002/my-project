import React from "react";
export default function ButtonFilter({ button, filter }) {
  const [appState, setAppState] = React.useState({
    activeObj: null,
    obj: button,
  });
  function toggleActive(index) {
    setAppState({ ...appState, activeObj: appState.obj[index] });
  }
  function toggleActiveStyles(index) {
    if (appState.obj[index] === appState.activeObj) {
      return "active";
    } 
    if(appState.activeObj === null){
      appState.activeObj="All";
      return "active"
    }
    else {
      return "inactive"
    };
  }
  return (
    <div className="buttonsFilter container bg-color_4 py-3 justify-center flex rounded-lg">
      <div className="grid grid-cols-6">
        {button.map((cat, i) => {
          return (
            <div
              className={`md:col-span-1 col-span-3 md:mx-5 mx-10 my-1 ${toggleActiveStyles(i)}`}
              key={i}
              onClick={() => {
                toggleActive(i);
              }}
            >
              <button
                type="button"
                onClick={() => filter(cat)}
                className={`transition-all text-color_5 font-semibold hover:bg-color_5 hover:text-white h-10 w-36 rounded-md`}
              >
                {cat}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
