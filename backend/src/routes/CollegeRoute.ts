import * as Router from "koa-router";
import CollegeController from "../controller/CollegeController";
const router = new Router();

router.put("/", async (ctx, next) => {
  const collegeController = new CollegeController();
  console.log("update college");
  await collegeController.updateCollege(<CollegeUpdate>ctx.request.body);
  ctx.body = {
    statusCode: 200,
  };
});

router.post("/", async (ctx, next) => {
  console.log("create college started");
  const collegeController = new CollegeController();
  //console.log("ctx: ", ctx.request.body);
  let college = await collegeController.createCollege(
    <College>ctx.request.body
  );
  ctx.body = college;
});

router.get("/", async (ctx, next) => {
  const collegeController = new CollegeController();
  // await userController.getUser(ctx);
  try {
    let users = await collegeController.getColleges(ctx);
    console.log("here users " + JSON.stringify(users));
    ctx.body = users;
  } catch (err) {
    console.log("Error in getusers", err);
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      code: ctx.status,
      msg: "some error occured!",
    };
  }
});

router.delete("/", async (ctx, next) => {
  console.log("delete college startd");
  const collegeController = new CollegeController();
  await collegeController.deleteCollege(<CollegeDelete>ctx.request.body);
  ctx.body = {
    statusCode: 300,
  };
});

// Hello world
// router.get("/getInfo", async (ctx, next) => {
//   // const data = <HelloWorld>ctx.request.body;
//   // ctx.body = { completeName: data.name };

//   const name = ctx.request.query?.name;
//   await ctx.render('./index', {
//     name: name
//   });
// });

//module.exports = router;
export default router;
