import { resolversArticle } from "./article.resolvers";
import { resolversCategory } from "./category.resolvers";
import { resolversUser } from "./user.resolver";

export const resolvers = [resolversArticle, resolversCategory, resolversUser];