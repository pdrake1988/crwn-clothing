import { CategoriesProps } from "../../categories.ts";
import DirectoryContainer from "./DirectoryContainer.tsx";
import CategoryItem from "../categories/CategoryItem.tsx";

type DirectoryProps = {
  categories: CategoriesProps[];
};

function Directory({ categories }: DirectoryProps) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </DirectoryContainer>
  );
}
export default Directory;
