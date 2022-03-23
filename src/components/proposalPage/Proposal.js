import { useState } from 'react';
import { Box, Badge, Button, Text, Grid, GridItem, useColorModeValue, Flex } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ProposalInfo from './ProposalInfo';

export default function Proposal(proposal) {
  const [isExpanded, setIsExpanded] = useState(false);

  const border = useColorModeValue('gray.200', 'gray.700');
  const accent = useColorModeValue('light_accent', 'dark_accent');

  return (
    <>
      <Box
        my={5}
        p={3}
        rounded='md'
        textAlign='left'
        shadow='sm'
        border='1px solid'
        borderColor={border}
        backgroundColor={accent}
      >
        <Text fontWeight='semibold' fontSize={{ base: '2xl', md: '3xl' }}>
          {proposal.proposal.metadata.name}
        </Text>
        <Text fontSize='md'>{proposal.proposal.metadata.description}</Text>
      </Box>
      <Grid templateColumns={'repeat(12, 1fr)'} gap={4}>
        <GridItem colSpan={{ base: 12, md: 9 }}>
          <Box
            mb={3}
            p={3}
            rounded='md'
            textAlign='center'
            shadow='sm'
            border='1px solid'
            borderColor={border}
            backgroundColor={accent}
          >
            <Flex alignItems='center'>
              <Text textAlign='left' fontSize='2xl'>
                Proposal
              </Text>
              <Badge ml={2} variant='outline' fontSize='sm'>
                {proposal.proposal.id}
              </Badge>
            </Flex>
            <Box textAlign='left' fontSize='sm' noOfLines={isExpanded ? 1000 : 5}>
              <ReactMarkdown>{proposal.proposal.metadata.content}</ReactMarkdown>
            </Box>

            <Button size='sm' mt={6} variant='link' fontWeight='bold' onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Show Less...' : 'Show More...'}
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={3} display={{ base: 'none', md: 'block' }}>
          <ProposalInfo proposal={proposal.proposal} />
          <Box
            mb={3}
            p={3}
            rounded='md'
            textAlign='left'
            shadow='sm'
            border='1px solid'
            borderColor={border}
            backgroundColor={accent}
          >
            <Text fontSize='xl'>Proposal Vote</Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
