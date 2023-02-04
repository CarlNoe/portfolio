import "./BurgerButton.css";

interface BurgerButtonProps {
  isActive: boolean;
}

function BurgerButton({ isActive }: BurgerButtonProps): JSX.Element {
  return (
    <div
      className={`burger-button relative z-30 w-6 ${
        isActive ? "burger-active" : "burger-not-active"
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerButton;
