import "./button.style.css";

const MyButton = ({ color, buttonText, handleToButton, textColor }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: color, color: textColor }}
      onClick={handleToButton}
    >
      {buttonText}
    </button>
  );
};

export default MyButton;
