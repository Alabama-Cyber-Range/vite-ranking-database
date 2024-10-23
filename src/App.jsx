import React from 'react';
import { Box, Grid, Heading, Text, Stack, Progress } from '@chakra-ui/react';

function App() {
  const progressData = [
    { category: 'Linux Skills', progress: 80 },
    { category: 'Kali Top 10', progress: 30 },
    { category: 'Windows Defense', progress: 65 },
    { category: 'Purple Team', progress: 50 },
  ];

  const achievementsDataLeft = [
    { title: 'Linux Master', description: 'Completed all Linux skills', unlocked: true },
    { title: 'Network Pro', description: 'Reached 50% in Network Security', unlocked: true },
    { title: 'Blue Team Hero', description: 'Started Blue Team Defense training', unlocked: false },
    { title: 'Junior Application Security Analyst', description: 'Unlocked Burp Suite Skills', unlocked: false },
    { title: 'Senior Application Security Engineer', description: 'Mastered Burp Suite Skills', unlocked: false },
  ];

  const achievementsDataMiddle = [
    { title: 'Advanced Linux Admin', description: 'Master advanced Linux commands', unlocked: false },
    { title: 'Network Defense Expert', description: 'Complete Kali Top 10 training', unlocked: false },
    { title: 'Windows Security Guru', description: 'Complete Windows defense training', unlocked: false },
    { title: 'Purple Team Commander', description: 'Master Purple Team coordination', unlocked: false },
  ];

  const achievementsDataRight = [
    { title: 'Junior Network Security Analyst', description: 'Unlocked Wireshark Skills', unlocked: false },
    { title: 'Senior Network Forensics Specialist', description: 'Mastered Wireshark Skills', unlocked: false },
    { title: 'Junior Network Discovery Analyst', description: 'Unlocked Nmap Skills', unlocked: false },
    { title: 'Senior Network Security Auditor', description: 'Mastered Nmap Skills', unlocked: false },
    { title: 'Junior Penetration Tester', description: 'Unlocked Metasploit Skills', unlocked: false },
    { title: 'Senior Red Team Operator', description: 'Mastered Metasploit Skills', unlocked: false },
  ];

  return (
    <Box p={4}>
      <Heading mb={6}>Welcome, Brandon</Heading>

      {/* Progress Section */}
      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>Your Progress</Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {progressData.map((progress, index) => (
            <Box 
              key={index} 
              bg="gray.100" 
              p={4} 
              borderRadius="md" 
              textAlign="center" 
              boxShadow="md"
            >
              <Heading size="md">{progress.category}</Heading>
              <Text>{progress.progress}% Complete</Text>
              <Progress 
                value={progress.progress} 
                size="sm" 
                colorScheme="green" 
                bg="gray.300" 
                borderRadius="md"
              />
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Achievements Section */}
      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>Achievements</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {/* Left Column Achievements */}
          <Stack spacing={4}>
            {achievementsDataLeft.map((achievement, index) => (
              <Box 
                key={index} 
                bg={achievement.unlocked ? 'green.100' : 'gray.200'} 
                p={4} 
                borderRadius="md" 
                textAlign="center" 
                boxShadow="md"
              >
                <Heading size="sm">{achievement.title}</Heading>
                <Text>{achievement.description}</Text>
                <Text>{achievement.unlocked ? 'UNLOCKED' : 'LOCKED'}</Text>
              </Box>
            ))}
          </Stack>

          {/* Middle Column Achievements (greyed out) */}
          <Stack spacing={4}>
            {achievementsDataMiddle.map((achievement, index) => (
              <Box 
                key={index} 
                bg="gray.200" 
                p={4} 
                borderRadius="md" 
                textAlign="center" 
                boxShadow="md"
              >
                <Heading size="sm">{achievement.title}</Heading>
                <Text>{achievement.description}</Text>
                <Text>LOCKED</Text>
              </Box>
            ))}
          </Stack>

          {/* Right Column Achievements */}
          <Stack spacing={4}>
            {achievementsDataRight.map((achievement, index) => (
              <Box 
                key={index} 
                bg={achievement.unlocked ? 'green.100' : 'gray.200'} 
                p={4} 
                borderRadius="md" 
                textAlign="center" 
                boxShadow="md"
              >
                <Heading size="sm">{achievement.title}</Heading>
                <Text>{achievement.description}</Text>
                <Text>{achievement.unlocked ? 'UNLOCKED' : 'LOCKED'}</Text>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Box>

      {/* Notifications Section */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>Notifications</Heading>
        <Text>No new notifications</Text>
      </Box>
    </Box>
  );
}

export default App;
