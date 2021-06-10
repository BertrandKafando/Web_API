'use strict';
var faker = require('faker');
var _ = require('underscore');
const users = [...Array(20)].map((user) => (
  {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    role : faker.helpers.randomize(['admin', 'author', 'guest']),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

const tags = [...Array(10)].map((tags) => (
  {
    name: faker.lorem.word(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
const Article = [...Array(200)].map((Article) => (
  {
    title: faker.name.title(),
    content:faker.lorem.paragraph(),
    published:1,
    UserId:faker.helpers.randomize(_.range(1,20,1)),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

const Comment = [...Array(200)].map((Comment) => (
  {
    content:faker.lorem.paragraph(),
    ArticleId:faker.helpers.randomize(_.range(1,200,1)),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))


const ArticleTags = [...Array(200)].map((ArticleTags) => (
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    ArticleId:faker.helpers.randomize(_.range(1,200,1)),
    Tagid:faker.helpers.randomize(_.range(1,10,1)),
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    //await queryInterface.bulkInsert('Users',users);
  //await queryInterface.bulkInsert('Tags',tags);
  //  await queryInterface.bulkInsert('articles',Article);
   // await queryInterface.bulkInsert('comments',Comment);
  await queryInterface.bulkInsert('ArticleTags',ArticleTags);   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
