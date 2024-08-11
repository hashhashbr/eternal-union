// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.24 ;


contract EternalUnion {
    struct MarriageRecord {
        string groomName;
        string brideName;
        string weddingDate;
        string congratulationsMessage;
    }

    MarriageRecord[] public records;

    event MarriageRegistered(
        string groomName,
        string brideName,
        string weddingDate,
        string congratulationsMessage
    );

    function registerMarriage(
        string memory _groomName,
        string memory _brideName,
        string memory _weddingDate,
        string memory _congratulationsMessage
    ) public {
        require(bytes(_groomName).length > 0, "Groom's name cannot be empty");
        require(bytes(_brideName).length > 0, "Bride's name cannot be empty");
        require(bytes(_weddingDate).length > 0, "Wedding date cannot be empty");
        require(bytes(_congratulationsMessage).length > 0, "Message cannot be empty");

        records.push(MarriageRecord(_groomName, _brideName, _weddingDate, _congratulationsMessage));
        emit MarriageRegistered(_groomName, _brideName, _weddingDate, _congratulationsMessage);
    }

    function getAllRecords() public view returns (MarriageRecord[] memory) {
        return records;
    }
}