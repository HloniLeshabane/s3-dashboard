// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue,Button } from "@chakra-ui/react";

// Custom components
import Card from "components/card/Card";
import { barChartDataConsumption } from "variables/charts";
// Custom icons
import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/icons/Icons";
import React from "react";
import ChartStatistics from "./ElectricFence";
import FloodLights from "./FloodLights"
import ActivityLogs from "components/charts/ActivityLogs";

const ActiveUsers = () => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const section_title = 'Panic Button Status';
  

  return (
    <Card p='16px' bg={"#C6C6C6"}>
      <Flex direction='column' w='100%'>
        <Text fontSize='lg' color={iconBoxInside} fontWeight='bold' mb='6px'>
            {section_title}
        </Text>
        <ActivityLogs/>
        <Flex direction='column' mt='24px' mb='36px' alignSelf='flex-start'>
          <Text fontSize='lg' color={iconBoxInside} fontWeight='bold' mb='6px'>
            System Statuses
          </Text>
          {/* <Text fontSize='md' fontWeight='medium' color='gray.400'>
            <Text
              as='span'
              color={percentage > 0 ? "green.400" : "red.400"}
              fontWeight='bold'>
              {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
            </Text>{" "}
            than last week
          </Text> */}
        </Flex>
        <SimpleGrid gap={{ sm: "12px" }} columns={2}>
          <ChartStatistics />
          <FloodLights />
          {/* <ChartStatistics
            title={"Sales"}
            amount={"2,400$"}
            percentage={30}
            icon={<CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
          />
          <ChartStatistics
            title={"Items"}
            amount={"320"}
            percentage={40}
            icon={<StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
          /> */}
        </SimpleGrid>
      </Flex>
    </Card>
  );
};

export default ActiveUsers;
