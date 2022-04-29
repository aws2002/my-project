import React from "react";

export default function FormInput(props) {
  const [focused, setFocused] = React.useState(false);
  const {titel, errorMessage, onChange, icon, id, ...inputProps } = props;
//   const fieldStyle=focused===true?"bg-color_3":"bg-color_5"
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <label
        htmlFor="email-address"
        className="block font-medium text-color_1 mt-5 mb-1 text-md"
      >
        {titel}
      </label>

      <div className="relative">
        {icon}
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus} // or=> onKeyUp
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
          className="font-medium w-full bg-color_22 pl-11 py-3 focus:ring-2 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
        />
        <span className=" font-medium">{errorMessage}</span>
      </div>
    </div>
  );
}
