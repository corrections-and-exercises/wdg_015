import {sequelize} from '../db.js';
import {DataTypes} from 'sequelize';

export const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
});

(async () => {
    await Post.sync({});
})();
