import "mocha";
import { join } from "path";
import * as assert from "assert";
import * as supertest from "supertest";
import { Application } from "../lib/application";

const app = supertest(Application.getInstance());

const metadata = require(join("..", "..", "package.json"));

describe("Basic API Routes", () => {

    describe("GET /", () => {

        it("should return a friendly JSON message", done => {
            app.get("/")
                .expect("content-type", /json/)
                .expect(200, {
                    data:
                    {
                        name: metadata.name,
                        version: metadata.version,
                        description: metadata.description,
                        author: metadata.author,
                    }
                })
                .end((err, res) => err ? done(err) : done());
        });
    });
});
