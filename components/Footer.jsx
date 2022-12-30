import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import { ReactNode } from 'react';
import { explorerUrl } from "../const/aLinks";
const FaBsc = '/icons/bscscan-logo.svg';
const bscLink = explorerUrl;
const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box style={{position: 'fixed', bottom: 0, width: '100%'}}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.200', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text style={{color: '#8a919e'}}>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'/'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'/'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'/'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'bscscan'} href={bscLink()} target="_blank" rel="noopener noreferrer">
            <Image src={FaBsc} width={16} height={16} alt="bsc" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}