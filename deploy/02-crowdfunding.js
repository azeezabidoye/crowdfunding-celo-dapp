module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;

  // Named Accounts are for improving developer experience, can be configured in hardhat.config.js
  const { deployer } = await getNamedAccounts();

  await deploy("Crowdfunding", {
    from: deployer,
    args: [],
    log: true,
  });
};

module.exports.tags = ["Crowdfunding"];
