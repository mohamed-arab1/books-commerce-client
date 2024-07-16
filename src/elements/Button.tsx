import { ButtonProps } from "../globalType/buttonsType";
export default function Button({
  buttons,
  handleClick,
  selectedGenres,
}: ButtonProps) {
  return (
    <>
      {buttons.map((button) => (
        <button
          key={button.id}
          className={` w-button text-[15px] m-auto h-button flex justify-center items-center ${
            selectedGenres.includes(button.name) ||
            (button.name === "All" && selectedGenres.length === 0)
              ? "bg-blue-400 text-white"
              : "bg-buttons"
          }`}
          onClick={() => handleClick(button.name)}
        >
          {button.name}
        </button>
      ))}
    </>
  );
}
