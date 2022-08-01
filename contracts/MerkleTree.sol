// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MerkleTreeContract is ERC721A, Ownable {
    constructor() ERC721A("Test", "TEST") {}

    function mint(uint256 quantity) external payable onlyOwner {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        _mint(msg.sender, quantity);
    }
}