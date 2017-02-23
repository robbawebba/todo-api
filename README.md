# Todo API
Todo-list backend for experimenting with new technologies
## Setup
1. `git clone https://github.com/robbawebba/todo-api.git`
2. `cd todo-api`
3. `npm install`
4. `npm start`
5. Open your browser to `localhost:3000`, or another port if you specified something else for `process.env.PORT`

## Test
Todo API uses [newman](https://github.com/postmanlabs/newman), Postman's CLI and node module for testing collections of API requests. The test script is located in at `./test/test.js`. 

### Running the Tests
1. Start the db in a separate terminal: `mongod`
2. If you've run this application before with the default db "todo", you'll want to drop it first to start with a fresh db:
    ```
    mongo
    > use todo
    > db.dropDatabase()
    ```
3. Run the todo app in a separate terminal: `npm start`
4. Lastly, run the test sequence using `npm test`, and the results will print out nicely :smile:
