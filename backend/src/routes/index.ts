import * as Router from "koa-router";
import userRoute from "./UserRoute";
import collegeRoute from "./CollegeRoute";

const router = new Router();

// TODO: add swagger and ping endpoint

router.use("/user", userRoute.routes(), userRoute.allowedMethods());
router.use("/college", collegeRoute.routes(), collegeRoute.allowedMethods());

export default router;
