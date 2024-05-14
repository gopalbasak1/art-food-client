import { NavLink } from "react-router-dom";

const CategoriesFile = ({ category }) => {
  const { categories_name, image } = category;

  return (
    <NavLink to={`/categories/${categories_name}`}>
      <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full h-[200px] mx-auto">
  <figure><img src={image} alt={categories_name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{categories_name}</h2>

  </div>
</div>
    </NavLink>
  );
};

export default CategoriesFile;
