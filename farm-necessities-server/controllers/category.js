import { databasePool, queryDatabase } from "../services/database.js";
import {
  selectCategory,
  insertCategory,
  updateCategory,
  deleteCategory,
} from "../utilities/queries.js";

export const getCategory = async (req, res) => {
  try {
    const placeholders = [];
    const categories = await queryDatabase(
      databasePool,
      selectCategory.all,
      placeholders
    );
    res.status(200).json(categories);
  } catch (error) {
    console.log("category-error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const addCategory = async (req, res) => {
  const { name, status } = req.body;
  try {
    const placeholders = [name, status];
    const addedCategory = await queryDatabase(
      databasePool,
      insertCategory,
      placeholders
    );
    res.status(200).json(addedCategory);
  } catch (error) {
    console.log("category-error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const editCategory = async (req, res) => {
  const { category_id, name, status } = req.body;
  try {
    const placeholders = [name, status, category_id];
    const editedCategory = await queryDatabase(
      databasePool,
      updateCategory,
      placeholders
    );
    res.status(200).json(editedCategory);
  } catch (error) {
    console.log("category-error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const removeCategory = async (req, res) => {
  const { category_id } = req.body;
  try {
    const placeholders = [category_id];
    const removedCategory = await queryDatabase(
      databasePool,
      deleteCategory,
      placeholders
    );
    res.status(200).json(removedCategory);
  } catch (error) {
    console.log("category-error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
