import React from "react";
import styled from "styled-components";
import { Text } from "../../common/Text";
import token_back from "../../../assets/token_back.png";
import mmp from "../../../assets/mmp.png";
import receipt from "../../../assets/receipt.png";
import buyback from "../../../assets/buyback.png";
import cardPos from "../../../assets/card-pos.png";
import { Col } from "../../common/Layout";
const TokenItem = styled.div`
  background-image: url(${token_back});
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border-radius: 60px;
  background-repeat: no-repeat;
`;
const Tokenomics = () => {
  return (
    <Col id="tokenomics">
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="40px"
        align="center"
      >
        Tokenomics
      </Text>
      <TokenItem>
        <Text
          fontFamily="Orbitron"
          fontWeight="700"
          fontSize="40px"
          align="center"
        >
          Tokenomics
        </Text>
      </TokenItem>
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="40px"
        align="center"
      >
        Roadmap
      </Text>
    </Col>
  );
};
export default Tokenomics;
