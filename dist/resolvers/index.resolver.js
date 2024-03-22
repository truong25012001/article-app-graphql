"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const article_resolvers_1 = require("./article.resolvers");
const category_resolvers_1 = require("./category.resolvers");
const user_resolver_1 = require("./user.resolver");
exports.resolvers = [article_resolvers_1.resolversArticle, category_resolvers_1.resolversCategory, user_resolver_1.resolversUser];
