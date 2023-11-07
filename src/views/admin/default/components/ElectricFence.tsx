import { Flex, Progress, Text, useColorModeValue, Button } from "@chakra-ui/react";
import { useControllableProp, useControllableState } from '@chakra-ui/react'
import IconBox from "components/icons/IconBox";
import { Icon } from "@chakra-ui/react";
import { MdAddTask, MdAttachMoney, MdCircle, MdFileCopy } from 'react-icons/md';
import React from "react";

const ChartStatistics = () => {
  const iconRed = useColorModeValue("red", "red");
  const iconGreen = useColorModeValue("green", "green");
  const iconGray = useColorModeValue("gray", "gray");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const overlayRef = React.useRef();
  const [value, setValue] = useControllableState({ defaultValue: "false" })

  return (
    <Flex direction='column' rounded='md' bg='#706F6F' p={"5px"}>
      <Text fontSize='md' color='white' fontWeight='semibold'>
          Electric Fence
        </Text>
        
      <Flex alignItems='center' mt={"5px"}>
        <IconBox
							w='30px'
							h='30px'
              mx="auto"
							bg={value == "true" ? iconGreen : iconGray}
							icon={<Icon w='32px' h='32px' as={MdCircle} color={value == "true" ? iconGreen : iconGray} />}
						/>
        <IconBox
							w='30px'
							h='30px'
              mx="auto"
							bg={value == "false" ? iconRed : iconGray}
							icon={<Icon w='32px' h='32px' as={MdCircle} color={value == "false" ? iconRed : iconGray} />}
						/>
        
      </Flex>
      {/* <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
        {amount}
      </Text> */}
      
      
      <Flex alignItems='center' mt={"5px"}>
        <Button h={"30px"} w={"80px"}
               variant='outline' 
               colorScheme='white'  
               mx="auto" size='sm'
               onClick={() => setValue("true")}>
          On
        </Button>
        <Button h={"30px"} 
                w={"80px"} 
                variant='outline' 
                colorScheme='white'  
                mx="auto" size='sm'
                onClick={() => setValue("false")}>
          Off
        </Button>
        
      </Flex>
      
      {/* <Progress
        colorScheme='teal'
        borderRadius='12px'
        h='5px'
        value={percentage}
      /> */}
    </Flex>
  );
};

export default ChartStatistics;
