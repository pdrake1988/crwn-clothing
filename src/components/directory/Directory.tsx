import { CategoriesProps } from "../../categories.ts";
import DirectoryContainer from "./DirectoryContainer.tsx";
import CategoryItem from "../categories/CategoryItem.tsx";

function Directory({ categories }: { categories: CategoriesProps[] }) {
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
