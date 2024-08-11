const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EternalUnion Contract", function () {
  let EternalUnion;
  let eternalUnion;

  beforeEach(async function () {
    EternalUnion = await ethers.getContractFactory("EternalUnion");
    eternalUnion = await EternalUnion.deploy();
  });

  describe("Invalid Inputs", function () {
    it("Should fail if the groom's name is empty", async function () {
      await expect(
        eternalUnion.registerMarriage(
          "",
          "Jane Smith",
          "2023-08-10",
          "Congratulations!"
        )
      ).to.be.revertedWith("Groom's name cannot be empty");
    });

    it("Should fail if the bride's name is empty", async function () {
      await expect(
        eternalUnion.registerMarriage(
          "John Doe",
          "",
          "2023-08-10",
          "Congratulations!"
        )
      ).to.be.revertedWith("Bride's name cannot be empty");
    });

    it("Should fail if the wedding date is empty", async function () {
      await expect(
        eternalUnion.registerMarriage(
          "John Doe",
          "Jane Smith",
          "",
          "Congratulations!"
        )
      ).to.be.revertedWith("Wedding date cannot be empty");
    });

    it("Should fail if the congratulations message is empty", async function () {
      await expect(
        eternalUnion.registerMarriage(
          "John Doe",
          "Jane Smith",
          "2023-08-10",
          ""
        )
      ).to.be.revertedWith("Message cannot be empty");
    });
  });
});
