import RegistrationForm from '../components/register/RegistrationForm';
import Layout from './layout';
const Register = () => {
  return (
    <Layout>
      <section className='border-red-500 bg-gray-200 min-h-screen flex items-center justify-center'>
        <div className='bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl'>
          <div className='px-5'>
            <RegistrationForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
