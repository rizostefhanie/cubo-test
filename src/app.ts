import express, { NextFunction, Request, Response } from "express";
import api_v1 from "./routes";
import passport from "passport";
import { Rol } from "./models/rol";
import auth from "./routes/auth"
import { Strategy, ExtractJwt } from "passport-jwt";
import * as swaggerUi from 'swagger-ui-express';
import * as YAML  from 'yamljs';
const app = express();

app.use(express.json());
let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "$@CUBO2021FINANCE$",
};

const swaggerDocument = YAML.load('./swagger.yaml');


//Passport middleware 
app.use((req: Request, res: Response, next: NextFunction) => {
  passport.use(
    new Strategy(opts, function (jwt_payload, done) {
      Rol.findOne({ _id: jwt_payload.data.rol, "options.path": req.url, "options.method":req.method }, function (err: any, rol:any) {
        if(err || rol ==null){
          return done(null, false);
        }
        else{
          done(null, { username: jwt_payload.data.username });
        }
      });
    })
  );
  next();
});


app.use(passport.initialize());
app.use(passport.session());

/**
 * Health endpoint
 */
app.get("/health", (req: Request, res: Response) => {
  try {
    res.status(200).send({
      message: "Cubo server is working properly.",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
});

/**
 * Unauthorized endpoint
 */
app.get("/unauthorized", (req: Request, res: Response) => {
  try {
    res.status(401).send({
      message: "This action is not authorized",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
});

/**
 * Cubo docs API 
 */
app.use('/cubo-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
/**
 * Authentication endpoint
 */
app.use("/auth", auth);
/**
 * General endpoints
 */
app.use("/", passport.authenticate("jwt", { session: false, failureRedirect: "/unauthorized",}), api_v1);

export default app;
