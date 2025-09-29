import MainController from "./control/MainController";
import Databases from "./db/Databases";

const dbInstance = new Databases();
new MainController(dbInstance);
