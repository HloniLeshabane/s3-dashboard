import { Flex, Progress, Text, useColorModeValue, Button } from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { Icon } from "@chakra-ui/react";
import React from "react";
import { MdAddTask, MdAttachMoney, MdCircle, MdFileCopy } from 'react-icons/md';

const ChartStatistics = () => {
  const iconRed = useColorModeValue("red", "red");
  const iconGreen = useColorModeValue("green", "green");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const overlayRef = React.useRef();
  return (
    <Flex direction='column' rounded='md' bg='#706F6F' p={"5px"}>
      <Text fontSize='md' color='white' fontWeight='semibold'>
          Flood Lights
        </Text>
      <Flex alignItems='center' mt={"5px"}>
        {/* <IconBox as='box' h={"30px"}  mx="auto" w={"30px"} bg={iconGreen}> */}
        <IconBox
							w='30px'
							h='30px'
              mx="auto"
							bg={iconRed}
							icon={<Icon w='32px' h='32px' as={MdCircle} color={iconRed} />}
						/>
          
          <IconBox
							w='30px'
							h='30px'
              mx="auto"
							bg={iconGreen}
							icon={<Icon w='32px' h='32px' as={MdCircle} color={iconGreen} />}
						/>
        
        
      </Flex>
      {/* <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
        {amount}
      </Text> */}
      
      {/* <Flex alignItems='center' mt={"5px"}>
        <Button h={"30px"} w={"80px"} variant='outline' colorScheme='teal'  mx="auto" size='sm'>
          On
        </Button>
        <Button h={"30px"} w={"80px"} variant='outline' colorScheme='teal'  mx="auto" size='sm'>
          Off
        </Button>
        
      </Flex> */}
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
