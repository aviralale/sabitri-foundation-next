// Filter button component
const FilterButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2  text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-primary shadow-md text-white dark:text-black shadow-primary/20"
          : "bg-muted/20 text-muted-foreground hover:bg-muted/40"
      }`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
