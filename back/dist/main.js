"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const constants_1 = require("./strategy/constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    await app.listen(3000);
    const corsoption = {
        origin: ['http://localhost:3001'], optionsSuccessStatus: 200
    };
    app.use(session({
        secret: constants_1.jwtConstants.secret,
        resave: false,
        saveUninitialized: false,
    }));
    app.enableCors(corsoption);
}
bootstrap();
//# sourceMappingURL=main.js.map