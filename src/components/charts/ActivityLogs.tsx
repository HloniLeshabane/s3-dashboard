import React, { Component } from "react";
import {Text,useColorModeValue,useControllableState,Button} from "@chakra-ui/react";
import Card from "components/card/Card";
import Chart from "react-apexcharts";
const color = "gray.700";

const ActivityLogs = () =>  {
  
  const textColor = useColorModeValue("white", "white");
  const [value, setValue] = useControllableState({ defaultValue: "false" })
  const [section_title, setTitle] = useControllableState({ defaultValue: "Date: MM-DD-YYYY" })
  const [section_time, setSectionTime] = useControllableState({ defaultValue: "Time: 00:00:01" })
  const [last_trigger, setLastTrigger] = useControllableState({ defaultValue: "(Last trigger)" })

  
    return (
      
      <Card
        py="1rem"
        height={{ sm: "200px" }}
        width="100%"
        bg="linear-gradient(81.62deg, #009FBE 10.25%, #009FBE 79.87%)"
        //bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
        position="relative"
      >
        <Text fontSize='lg' color={textColor} my='10px' fontWeight='bold' mb='6px'>
          {last_trigger}
        </Text>
        <Text fontSize='lg' color={textColor} my='10px' fontWeight='bold' mb='6px'>
          {section_title}
        </Text> 
        <Text fontSize='lg' color={textColor} my='10px' fontWeight='bold' mb='6px'>
          {section_time}
        </Text> 
        <Button mt={"10px"} h={"30px"} w={"80px"} variant='outline' colorScheme={textColor}  mx="auto" size='sm'>
            Reset
        </Button>
        {/* <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          width="100%"
          height="100%"
        /> */}
      </Card>
    );
}


export default ActivityLogs;
