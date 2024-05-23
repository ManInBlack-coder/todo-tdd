const request = request('supertest');
const { response } = require('express');
const app = require('../../app');
const newTodo = require('../mock-data/new-todo.json');
const allTodos = require('../mock-data/all-todos.json');

const endpointURL = '/todos/';
let firstTodo

describe(endpointURL, () => {
    it('POST ' + endpointURL, async () => {
    const response = await request(app)
        request(app)
        .post(endpointURL)
        .send(newTodo);
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newTodo.title);
    expect(response.body.done).toBe(newTodo.done);
    });
    it(
        'should return error 500 on malformed data with POST' + endpointURL, async () => {
            const response = await request(app)
            .post(endpointURL)
            .send({title: 'Missing done property'});
        expect(response.statusCode).toBe(500);
        expect(response.body).toStrictEqual({
            message: 'Todo validation failed: done; Path `done` is required.'
        });
        it('GET' + endpointURL, async () => {
            const response = await request(app).get(endpointURL);
            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body[0].title).toBeDefined();
            expect(response.body[0].done).toBeDefined();
            firstTodo = response.body[0];
        });
        it('GET by Id ' + endpointURL + ':todoId', async () => {
            const response = await request(app)
            .get(endpointURL + '65a7cfbdfa5eba9bcd3e1325');
        expect(response.statusCode).toBe(404);
        // expect(response.statusCode).toBe(200);
        // expect(response.body.title).toBe(firstTodo.title);
        // expect(response.body.done).toBe(firstTodo.done);
        });
         
    });
    
});