
import Category from "../models/category.model";
export const resolversCategory = {
	Query: {
		getListCategory: async (_, args) => {
			const categories = await Category.find({
				deleted: false
			})

			return categories;
		},
		getCategory: async (_, args) => {
			const {id} = args;
			const category = await Category.findOne({
				_id: id,
				deleted: false
			})

			return category;
		}
	},
	Mutation: {
		createCategory: async(_, args) => {
			const {category} = args;

			const record = new Category(category);
			await record.save;

			return record;
		},

		updateCategory: async (_, args) => {
			const {id, category} = args;

			await Category.updateOne({
				_id: id,
				deleted: false
			}, category);

			const record = await Category.findOne({
				_id: id,
				deleted: false
			});

			return record;
		},

		deleteCategory: async(_, args) => {
			const {id} = args;
			await Category.updateOne({
				_id: id,
				deleted: false
			}, {
				deleted: true,
				deletedAt: new Date()
			});

			return "Xóa thành công"
		}
	}
}