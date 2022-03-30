import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values, 'ini values dari login');
    },
  });
  return (
    <>
      <VStack spacing={8}>
        <Text fontSize={'4xl'}>Login Page</Text>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="usernameLogin" mt={'5'}>
              Username
            </FormLabel>
            <Input
              id="usernameLogin"
              values={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Masukkan Username"
            />

            <FormLabel htmlFor="passwordLogin" mt={'5'}>
              Password
            </FormLabel>
            <Input
              id="passwordLogin"
              placeholder="Masukkan Password"
              values={formik.values.password}
              onChange={formik.handleChange}
            />
          </FormControl>
          <Button mt={'5'} type="submit">
            Login
          </Button>
        </form>
      </VStack>
    </>
  );
}
