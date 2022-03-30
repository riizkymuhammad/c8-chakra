import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { useFormik } from 'formik';
  
  export default function RegisterPage() {
    const formik = useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
        gender: '',
        bod: '',
      },
      onSubmit: values => {
        console.log(values, 'ini dari on submit formik');
      },
    });
  
    return (
      <>
        <VStack spacing={8}>
          <Text fontSize={'4xl'}>Register page</Text>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="email" mt={'5'}>Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder='Masukkan Email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="username" mt={'5'}>Username</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder='Masukkan Username'
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="password" mt={'5'}>Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder='Masukkan Password'
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="bod" mt={'5'}>bod</FormLabel>
              <Input
                id="bod"
                type="date"
                value={formik.values.bod}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="gender" mt={'5'}>gender</FormLabel>
              <Select
                id="gender"
                placeholder="Jenis Kelamin"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </Select>
              <Button type="submit" mt={'5'}>Submit</Button>
            </FormControl>
          </form>
        </VStack>
      </>
    );
  }