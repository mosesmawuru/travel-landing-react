import React from "react";
import { Text } from "../../common/Text";
import { SupplyItem } from "../../common/SupplyItem";
import jagvar from "../../../assets/Car.jpg";
import clothe from "../../../assets/Tshirt.jpg";
import house from "../../../assets/House.jpg";
import bogati from "../../../assets/Wap.jpg";
import bmw from "../../../assets/Ship.jpg";
import motor from "../../../assets/motor.png";
import WCCFgtaV2 from "../../../assets/WCCFgtaV2.png";
import { Col, Row } from "../../common/Layout";
import buyeffect from "../../../assets/buyeffect.png";
import motoreffect from "../../../assets/motor-effect.png";
import maneffect1 from "../../../assets/man-effect1.png";
import maneffect2 from "../../../assets/man-effect2.png";
import styled from "styled-components";

import { CountItem } from "../../common/CountItem";
const colordata = [
  {
    percent: 5,
    gfcolor: "#FF8383",
    glcolor: "#FF3333",
    describe: "Ingame Events & Airdrops",
    width: 9,
    count: "50,000,000,000",
  },
  {
    percent: 5,
    gfcolor: "#FF9D2A",
    glcolor: "#FFD707",
    describe: "Marketing",
    width: 9,
    count: "50,000,000,000",
  },
  {
    percent: 5,
    gfcolor: "#FF42E1",
    glcolor: "#9F3FFF",
    describe: "Charity Wallet (Community members choose the organisation)",
    width: 9,
    count: "50,000,000,000",
  },
  {
    percent: 10,
    gfcolor: "#6148FF",
    glcolor: "#3014DE",
    describe: "Public Sale",
    width: 10,
    count: "100,000,000,000",
  },
  {
    percent: 10,
    gfcolor: "#7AEE68",
    glcolor: "#36BA20",
    describe: "Game Development",
    width: 10,
    count: "100,000,000,000",
  },
  {
    percent: 10,
    gfcolor: "#68EEC6",
    glcolor: "#20BA8C",
    describe: "Staking Rewards",
    width: 10,
    count: "100,000,000,000",
  },
  {
    percent: 10,
    gfcolor: "#EE7868",
    glcolor: "#BA2020",
    describe: "Periodic Burns",
    width: 10,
    count: "100,000,000,000",
  },
  {
    percent: 15,
    gfcolor: "#9E00FF",
    glcolor: "#5B20BA",
    describe: "Ecosystem ($MMP Foundation)",
    width: 13,
    count: "150,000,000,000",
  },
  {
    percent: 30,
    gfcolor: "#FF00A8",
    glcolor: "#BA2073 ",
    describe: "Pancakeswap Listing",
    width: 20,
    count: "300,000,000,000",
  },
];
const BuyButton = styled.button`
  background: url(${buyeffect});
  background-color: #16beaa;
  border-radius: 20px;
  justify-content: center;
  max-width: 300px;
  margin: 43px 0 0 0;
  padding: 10px 0;
  display: flex;
  width: 60%;
  outline: none;
  position: relative;
  border: none;
  box-shadow: 0px 4px 97px rgba(0, 255, 255, 0.51);

  :hover {
    ::before {
      opacity: 1;
    }
  }
`;
const TokenSupply = styled.div`
  display: flex;
  position: relative;
  margin: 40px 0 0 20px;
  /* padding-top: 40px; */
  width: 100%;
  max-width: 1200px;
  padding-bottom: 20px;
  & > * {
    margin-right: -30px;
  }
  & > :first-child {
    border-bottom-left-radius: 35px;
    border-top-left-radius: 35px;
  }
  overflow-x: auto;
  overflow-y: visible;
`;
const EcoDirect = styled.div`
  background: ${(props) =>
    `linear-gradient(95.03deg, ${props.gfcolor} 0%, ${props.glcolor} 103.72%)`};
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  width: 35px;
  height: 35px;
`;
const SupplyGrid = styled.div`
  display: grid;
  padding: 0 80px 0 80px;
  grid-template: repeat(1, 1fr) / repeat(5, 1fr);
  gap: 30px;
  margin: 50px 0 0 0;
  @media only screen and (max-width: 1358px) {
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    padding: 0 20px 0 20px;
  }

  @media only screen and (max-width: 850px) {
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    padding: 0 10px 0 10px;
  }
  @media only screen and (max-width: 580px) {
    grid-template: repeat(5, 1fr) / repeat(1, 1fr);
    padding: 0 10px 0 10px;
  }
`;
const data = [
  {
    title: "Clothe",
    type: "Style",
    height: "auto",
    src: clothe,
  },
  {
    title: "Jagvar",
    type: "car",
    height: "auto",
    src: jagvar,
  },
  {
    title: "House (2Bedrooms)",
    type: "House",
    height: "auto",
    src: house,
  },
  {
    title: "Bogati",
    type: "car",
    height: "auto",
    src: bogati,
  },
  {
    title: "Jagvar",
    type: "car",
    height: "auto",
    src: bmw,
  },
];
const Supply = () => {
  return (
    <Col
      align="center"
      id="supply"
      backgroundColor="rgb(28, 20, 43)"
      position="relative"
    >
      <SupplyGrid>
        {data.map((item, key) => {
          return (
            <SupplyItem
              img={item.src}
              title={item.title}
              type={item.type}
              height={item.height}
              key={key + 1}
            />
          );
        })}
      </SupplyGrid>
      <BuyButton disabled>
        <Text fontSize="24px" align="center">
          Buy
        </Text>
      </BuyButton>

      <img
        src={motor}
        width="600px"
        style={{ position: "absolute", left: 0, bottom: 0, zIndex: 2 }}
        alt="motor"
      />
      <img
        src={WCCFgtaV2}
        width="700px"
        style={{ position: "absolute", right: "5%", bottom: "20%", zIndex: 2 }}
        alt="WCCFgtaV2"
      />
      <img
        src={motoreffect}
        style={{
          position: "absolute",
          left: 0,
          bottom: "25%",
          zIndex: 1,
        }}
        alt="motoreffect"
      />
      <img
        src={maneffect1}
        width="40%"
        style={{ position: "absolute", right: 0, bottom: "30%", zIndex: 1 }}
        alt="maneffect1"
      />
      <img
        src={maneffect2}
        width="20%"
        style={{ position: "absolute", right: 0, bottom: "15%", zIndex: 1 }}
        alt="maneffect2"
      />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Text
          fontFamily="Orbitron"
          fontWeight="700"
          fontSize="40px"
          align="center"
          margin="30px 0 0 0"
        >
          SUPPLY
        </Text>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <TokenSupply>
            {colordata.map((item, key) => {
              return (
                <CountItem
                  data-tip
                  data-for={`countItem${key + 1}`}
                  item={item}
                  key={key + 1}
                  index={key + 1}
                />
              );
            })}
          </TokenSupply>
        </div>
      </div>
      <Row
        wrap="wrap"
        mgap="0 20px 20px 0"
        justify="flex-start"
        margin="30px 30px 0 30px"
        borderRadius="45px"
        backgroundColor="rgba(255,255,255,0.3)"
        backdropFilter="blur(10px)"
        padding="20px"
        maxWidth="1200px"
      >
        {colordata.map((item, key) => {
          return (
            <Row key={key + 1}>
              <EcoDirect gfcolor={item.gfcolor} glcolor={item.glcolor} />
              <Text fontSize="20px" margin="0 0 0 15px" flex="1">
                {item.describe}
              </Text>
            </Row>
          );
        })}
      </Row>
      <Text fontSize="24px" align="center" margin="30px 0 110px 0">
        Total supply: 1,000,000,000,000
      </Text>
    </Col>
  );
};
export default Supply;
