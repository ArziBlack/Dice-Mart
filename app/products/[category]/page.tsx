import React from "react";

const Category = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const category = (await params).category;
  return <div className="text-black">Category{category}</div>;
};

export default Category;
