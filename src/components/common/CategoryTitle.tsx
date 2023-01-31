interface CategoryTitleProps {
  index: number;
  name: string;
}

function CategoryTitle({ index, name }: CategoryTitleProps): JSX.Element {
  return (
    <div className="flex items-center">
      <div className="h-[1px] bg-secondary w-12"/>
      <p className="ml-6 font-poppins">
        <span className="text-tertiary-500">0{index}. </span>
        <span className="text-secondary">{name}</span>
      </p>
    </div>
  );
}

export default CategoryTitle;
