import {gql} from "apollo-server-express";

export const typeDefsArticle = gql `
	type Article {
		id: ID,
		title: String,
		avatar:String,
		description: String
		category: Category
	}

	type Query {
		getListArticle(
			sortKey: String,
			sortValue: String,
			currentPage: Int,
			limitItems: Int,
			filterKey: String,
			filterValue: String,
			keyword: String
		): [Article],
		getArticle(id: ID): Article,
	}

	input ArticleInput {
		title: String,
		avatar: String,
		description: String
	}

	type Mutation {
		createArticle(article: ArticleInput): Article,
		updateArticle(id: ID, article: ArticleInput): Article,
		deleteArticle(id: ID): String,
	}
`;