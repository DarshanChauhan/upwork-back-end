const express = require("express");
const route = new express.Router();

route.use("/user", require("./userRoutes"));
route.use("/attachment", require("./attachmentRoutes"));
route.use("/payment", require("./paymentRoutes"));
route.use("/skill", require("./skillRoutes"));
route.use("/company-contract", require("./companyContractsRoutes"));
route.use("/proposal-status-catalog", require("./proposalStatusCatalogRoute"));
route.use("/tests", require("./testRoutes"));
route.use("/complexities", require("./complexitiesRoute"));
route.use("/expectedDuration", require("./expectedDurationRoutes"));
route.use("/company-client", require("./companyClientRoutes"));
route.use("/hire-manager", require("./hireManagerRoutes"));
route.use("/freelancer", require("./freelancerRoutes"));
route.use("/test-result", require("./testResultRoutes"));
module.exports = route;
