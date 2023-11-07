// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
// Custom components
import BarChart from 'components/charts/BarChart';
import React from 'react';
import { barChartDataConsumption, barChartOptionsConsumption } from 'variables/charts';
import { MdBarChart } from 'react-icons/md';
import VideoFeed from './VideoFeed';

export default function WeeklyRevenue(props: { [x: string]: any }) {
	const { ...rest } = props;

	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
	const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });
	return (
		<Card alignItems='center' flexDirection='column' w='100%' {...rest}>
			<Flex align='center' w='100%' px='15px' py='10px'>
				<Text me='auto' color={textColor} fontSize='lg' fontWeight='700' lineHeight='100%'>
					ALPR
				</Text>
				{/* <Button
					alignItems='center'
					justifyContent='center'
					bg={bgButton}
					_hover={bgHover}
					_focus={bgFocus}
					_active={bgFocus}
					w='37px'
					h='37px'
					lineHeight='100%'
					borderRadius='10px'
					{...rest}>
					<Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
				</Button> */}
			</Flex>
			<VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8" />
			{/* <Box h='240px' mt='auto' w='100%'>
				<BarChart chartData={barChartDataConsumption} chartOptions={barChartOptionsConsumption} />
			</Box> */}
		</Card>
	);
}
