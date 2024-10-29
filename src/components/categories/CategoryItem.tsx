import CategoryBodyContainer from "./ui/CategoryBodyContainer.tsx";
import CategoryContainer from "./ui/CategoryContainer.tsx";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
};

function CategoryItem({ title, imageUrl }: CategoryItemProps) {
  return (
    <CategoryContainer imageUrl={imageUrl}>
      <div className={"background-image"} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
}
export default CategoryItem;
