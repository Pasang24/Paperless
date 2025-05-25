import FormCardSkeleton from "./FormCardSkeleton";

function FormListSkeleton() {
  const listItems = new Array(6).fill(0);
  return (
    <div className="my-4 space-y-4">
      {listItems.map((_, index) => (
        <FormCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default FormListSkeleton;
