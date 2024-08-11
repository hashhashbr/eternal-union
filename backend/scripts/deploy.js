async function main() {
  const EternalUnion = await ethers.getContractFactory("EternalUnion");
  const eternalUnion = await EternalUnion.deploy();

  console.log("EternalUnion deployed to:", eternalUnion.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
